//Require Axios for API call. 
const axios = require("axios"); 


//Construct API call to Github
const gitAPI = {
    async user(username){
        try{
            var userInfo = await axios.get("https://api.github.com/users/" + username, { authentication: {
                userName: "Username", 
                pWord: "Password"
        }
            });
            var {email, avatar_url} = userInfo.data; 
            return {email, avatar_url}; 

        }  catch(err) {
            throw new Error(`Something failed`);
          } finally {
            console.log(`All Tasks is Done`);
          }
    }
}

module.exports = gitAPI;

