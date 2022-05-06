const axios = require("axios");

const getFact = async(limit) => {
    return new Promise((resolve, reject) => {
      headers = {headers: {"X-Api-Key": "API KEY HERE"}}
      url = "https://api.api-ninjas.com/v1/facts?limit=" + limit
      axios.get(url , headers).then(res => {
      return resolve(res.data)
      
    })
    })
  
    
  };

module.exports = getFact;
