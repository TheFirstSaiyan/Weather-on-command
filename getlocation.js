const request = require('request');
const maps_api_key='AIzaSyB_fyipskkTJPpqmBD-lZEcAA44tFNXJy8';
// const weather=require('./getweather');

module.exports=
{
getLocation :(address) =>
{
return new Promise((resolve,reject)=>
{
  request({
    url : 'https://maps.googleapis.com/maps/api/geocode/json?address='+address+'&key='+maps_api_key,
    json :true
  },
  (err,res,data)=>{
    if(err || data.results.length==0)
    {
      reject('unable to fetch data at the moment, sorry dude')
    }

    else
    {
        let lat =data.results[0].geometry.location.lat;
        let long=data.results[0].geometry.location.lng;
        let addr=data.results[0].formatted_address;
        resolve({lat,long,addr})
      //  weather.getWeather(lat,long,addr)

    }
  });
}
);
}

}
