var input=document.getElementById('input');
var result=document.getElementById('result');
var inputType=document.getElementById('inputType');
var resultType= document.getElementById('resultType')
var inputTypevalue , resultTypevalue;


// Add a listener
input.addEventListener("keyup",myResult);
inputType.addEventListener("change",myResult);
resultType.addEventListener("change",myResult);
 
// initial value 
inputTypevalue = inputType.value;
resultTypevalue= resultType.value;



function myResult()
{
    inputTypevalue = inputType.value;
    resultTypevalue= resultType.value;

// this is the meter to kilometer and centimeter all formula 
    if(inputTypevalue==="meter"&& resultTypevalue==="kilometer")
    { // this is meter to kilometern formula 
        result.value=Number(input.value)*0.001;
    }else if(inputTypevalue === "meter"&& resultTypevalue=== "Centimeter"){
       // this is meter to centimeter formula
        result.value=(Number (input.value))* 100 ;
    }else if (inputTypevalue==="meter"&& resultTypevalue==="meter"){
        // this is meter to meter formula
        result.value = input.value
    }
// this is the kilometer to meter and centimeter formula
    if(inputTypevalue==="kilometer"&& resultTypevalue==="meter")
    { // this is kilometer to meter formula 
        result.value=Number(input.value)*1000;
    }else if(inputTypevalue === "kilometer"&& resultTypevalue=== "Centimeter"){
        // this is kilometer to centimeter 
        result.value=(Number (input.value))* 100000 ;
    }else if (inputTypevalue==="kilometer"&& resultTypevalue==="kilometer"){
        // this is kilometer to kilometer 
        result.value = input.value
    }

    
    if(inputTypevalue==="Centimeter"&& resultTypevalue==="kilometer")
    {
        result.value=Number(input.value)*0.00001
    }else if(inputTypevalue === "Centimeter"&& resultTypevalue=== "meter"){
        result.value=(Number (input.value))* 0.01 ;
    }else if (inputTypevalue==="Centimeter"&& resultTypevalue==="Centimeter"){
        result.value = input.value
    }
   
}

