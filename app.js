const getNoticeBBCnews = require("./RobotNotice")
const loginAndPostTimeLine = require('./RobotFacebook');

//loginAndPostTimeLine();

async function play(){
    const reponse =  await getNoticeBBCnews;
    await loginAndPostTimeLine(reponse.articles[0])   
}

play();