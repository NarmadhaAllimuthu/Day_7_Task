var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload=function (){
     var result = JSON.parse(request.response);


     //Get all the countries from Asia continent /region using Filter function

     var asia=result.filter((element)=>element.region=="Asia");
  var asiacountry=asia.map((asia)=>asia.name.common);
 console.log(asiacountry);


//Get all the countries with a population of less than 2 lakhs using Filter function

 var lesspop=result.filter((people)=>people.population<200000);
 var country=lesspop.map((free)=>free.name.common);
 console.log(country);


// Print the following details name, capital, flag using forEach function
//Name

 let arr=[];
var array=result.forEach((element)=>{
    arr.push(element.name.common)});
console.log(arr);

//capital

let cap=[];
 result.forEach((element)=>{
   cap.push(element.capital)});
   console.log(cap);

   //flag

result.forEach((element)=>console.log(element.flag));     
  
  //Print the total population of countries using reduce function

var population=result.map((countries)=>countries.population);
var total=population.reduce((acc,ele)=>acc+ele);
console.log(total); 


//Print the country which uses US Dollars as currency.

var curr=result.map((need)=>need.currencies);

var countryname=[];
var res=[];

for(i=0; i<curr.length; i++){
  if(curr[i]!= undefined){

      var  b= Object.keys(curr[i]);
       var res = Object.values(curr[i]);

               for(var j=0;j<res.length; j++){
            if(res[j].symbol=="$"){

       countryname.push(result[i].name.common); 
               }
           }
       }      
}
console.log(countryname);
}





 
 