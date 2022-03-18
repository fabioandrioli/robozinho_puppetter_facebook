const routineVerifyPost = require('./utils/routineVerifyPost')

async function play(){
      
    if(await !routineVerifyPost.verifyDateToNewPostInFacebook()){
        setInterval(async () => await routineVerifyPost.verifyHourNewPost(),1000);
    }else{
        console.log("As datas são iguais")
    }       
}

play();