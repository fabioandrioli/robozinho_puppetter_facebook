
const connect = require('../connect');
const getNoticeBBCnews = require("../RobotNotice")
const loginAndPostTimeLine = require('../RobotFacebook');
const moment = require('moment');
module.exports = {
    async verifyDateToNewPostInFacebook(){
        var date = await connect.getLatDatePostFaceook();
        if(moment(date).format('YYYY-MM-DD') === moment(date).format('YYYY-MM-DD')){
            return true;
        }
        return false;
    },

    async verifyHourNewPost(){
        var hourPost = "12:42:00";
        if(moment().format('HH:mm:ss') === moment().format(hourPost)){
            const reponse =  await getNoticeBBCnews;
            await loginAndPostTimeLine(reponse.articles[0])   
        }
    }
}