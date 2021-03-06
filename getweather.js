const darksky_api_key='api key from dark sky api from forecast.io';
const request = require('request');
let obj

 module.exports={
getWeather: (lat,long,address)=>
{
  return new Promise((resolve,reject)=>
  {
  request({
    url : 'https://api.darksky.net/forecast/'+darksky_api_key+'\/'+lat+'\,'+long,
    json :true
  },
  (err,res,data)=>{
if(err || res.statusCode!==200)
{
reject('unable to fetch data at the moment, sorry dude')

}
else
{
   obj={
        lat,
        long ,
        address ,
        weather : data.currently.summary,
        temperature : ((data.currently.temperature -32 ) * 5/9).toFixed(2)+" C"

    }

    resolve(obj)
}
  });
});
}
}
