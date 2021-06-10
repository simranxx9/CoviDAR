var axios = require("axios").default;
const cors = require('cors')
const app = require('express')()
app.use(cors)

var options = {
    method: 'GET',
    url: 'https://covid-19-news.p.rapidapi.com/v1/covid',
    params: { q: 'covid', lang: 'en', media: 'True' },
    headers: {
        'x-rapidapi-key': 'cf20b9aaf7msh6ca24058bbdb5aap1abc80jsn5fcd4f5a5c31',
        'x-rapidapi-host': 'covid-19-news.p.rapidapi.com'
    }
};

axios.request(options).then(function (response) {
    console.log(response.data);
}).catch(function (error) {
    console.error(error);
});