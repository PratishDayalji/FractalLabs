fetch(`https://7gq3bccyoa.execute-api.eu-west-1.amazonaws.com/v1/token`, {
    method: 'post',
    headers: {
        "x-api-key": "qmNZKSeD9k7ZG4WIAeDVBnAfzDXp3NI9e1gKrVZ0",
        "x-partner-id": "BraavosBank",
    }
})
.then(function(response) {
    return response.json();
})
.then(function(data) {
    console.log(data);
})
.catch(function(error){
    console.log(error);
});