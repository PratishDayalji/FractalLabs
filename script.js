fetch(`https://7gq3bccyoa.execute-api.eu-west-1.amazonaws.com/v1/token`, {
    method: 'post',
    headers: {
        "x-api-key": "qmNZKSeD9k7ZG4WIAeDVBnAfzDXp3NI9e1gKrVZ0",
        "x-partner-id": "BraavosBank",
    }
})
    .then(function (response) {
        return response.json()
    })
    .then(async function (data) {
        const proxyUrl = 'https://cors-anywhere.herokuapp.com/',
            targetUrl = 'https://r7p2rhg4ji.execute-api.eu-west-1.amazonaws.com/v1/banking/206/accounts/fakeAcc55/transactions';
        const access_token = `Bearer ${data["access_token"]}`;
        try {
            const response = await
                fetch(`${proxyUrl}${targetUrl}`, {
                    method: 'get',
                    headers: {
                        "x-api-key": "qmNZKSeD9k7ZG4WIAeDVBnAfzDXp3NI9e1gKrVZ0",
                        "x-partner-id": "BraavosBank",
                        "Authorization": `${access_token.toString()}`
                    }
                })
                    .then(function (response) {
                        return response.json();
                    })
                    .then(function (data) {
                        const a = document.createElement('a');
                        a.href = "data:application/octet-stream," +
                            encodeURIComponent([JSON.stringify(data)]);
                        a.download = 'myTransactions.json';
                        a.click();
                    });
        }
        catch (error) {
            console.log('Request failed', error);
        }
    })
    .catch(function (error) {
        console.log('Request to get token failed', error)
    });