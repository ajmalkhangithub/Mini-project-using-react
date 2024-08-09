import React  from "react";
import ReactDOM from "react-dom";
import "./index.css"
let currdate=new Date(2024,8,9,11)
 currdate=currdate.getHours();
let greeting=""
if(currdate>=1 && currdate<12){
  greeting="Good Morning!";

}
else if(currdate>=12 && currdate<=17){
  greeting="Good afternoon";
}
else{
 greeting="Good Evening";
}
ReactDOM.render(
  <>
  <div className="heading">
  <h1>Hello Sir,{greeting}</h1>
  </div>

  </>,
  document.getElementById("root")

)