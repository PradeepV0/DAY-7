// var request = new XMLHttpRequest();
// request.open("GET","https://restcountries.com/v3.1/all",true)
// request.send()
//  request.onload=function(){
//     var data = request.response
//     var result = JSON.parse(data)
//      var res = result.filter((ele)=>ele.continents=="Asia")
//      //to display the filtered result countries
     
//      console.log(res);
//     }


// var request = new XMLHttpRequest();
// request.open("GET","https://restcountries.com/v3.1/all",true)
// request.send()
//  request.onload=function(){
//     var data = request.response
//     var result = JSON.parse(data)
//      var res = result.filter((ele)=>ele.population<200000)
//      //to display the filtered result countries
//      var res1 = res.map((ele)=>`${ele.population}: ${ele.name.common}`)
//      console.log(res1)
//     }

// var request = new XMLHttpRequest();
// request.open("GET","https://restcountries.com/v3.1/all",true)
// request.send()
//  request.onload=function(){
//     var data = request.response
//     var result = JSON.parse(data)
//      var res1 = result.forEach((ele)=>{console.log(` ${ele.name.common}, ${ele.capital}, ${ele.flag}`)})
 
     
//     }



// var request = new XMLHttpRequest();
// request.open("GET","https://restcountries.com/v3.1/all",true)
// request.send()
//  request.onload=function(){
//     var data = request.response
//     var result = JSON.parse(data)
//     var res = result.reduce((acc,cv)=>acc+cv.population,0)
//     console.log(res)
//     }


// var request = new XMLHttpRequest();
// request.open("GET","https://restcountries.com/v3.1/all",true)
// request.send()
//  request.onload=function(){
//     var data = request.response
//     var result = JSON.parse(data)
//      var res = result.filter((ele)=>ele.currencies)
//      var res1 = res.filter((ele)=>ele.currencies.USD)
//      var res2 = res1.map((ele)=>`${ele.name.common}: ${ele.currencies.USD.name}`)

     
    
//      console.log(res2);
//     }