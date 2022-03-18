var mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'robozinho'
});
 
module.exports = {
    getLatDatePostFaceook(){
        return new Promise((resolve, reject) => {
            connection.connect();
    
                connection.query('SELECT * FROM facebook ORDER BY id DESC limit 1',(error, results, fields) => {
                if (error) {throw resolve(error);}
                // console.log(await results[0].date);
                resolve(results[0].date);
                });
            
            connection.end();

        })
    }
}