const routineVerifyPost = require('./utils/routineVerifyPost')
const getNoticeBBCnews = require("./RobotNotice")
const loginAndPostTimeLine = require('./RobotFacebook');
async function play(){
      
    // if(await routineVerifyPost.verifyDateToNewPostInFacebook()){
    //     setInterval(async () => await routineVerifyPost.verifyHourNewPost(),1000);
    // }else{
    //     console.log("As datas são iguais")
    // }
    const reponse =  await getNoticeBBCnews;
    await loginAndPostTimeLine(reponse.articles[1])   
}

play();