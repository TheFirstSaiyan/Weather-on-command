console.log('fetching ...');
const yargs =require('yargs');
const getLocation=require('./getlocation');
const weather=require('./getweather');


if(yargs.argv.a)
{
getLocation.getLocation(yargs.argv.a).then((data)=>{
return weather.getWeather(data.lat,data.long,data.addr)
}).then((msg)=>{
   console.log(msg)
 }).catch((error)=>{
  console.log(error)
});
}
else
console.log("enter a valid address yo")
