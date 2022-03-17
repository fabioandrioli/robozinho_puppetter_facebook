const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('ff212de09e674ec29fad305dcbf86b61');
const reqOptions = { 'mode': 'cors', headers: { 'Access-Control-Allow-Origin': '*' } };

async function getNoticeBBCnews(){ 
    return await newsapi.v2.topHeadlines({
        source:'bbc-news',
        language: 'pt',
        sortBy:'relevancy',
        reqOptions,
    })
}

module.exports = getNoticeBBCnews();



