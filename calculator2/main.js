function getHistory(){
    return document.getElementById("history-value").innerText;
};
function printHistory(num){
    return document.getElementById("history-value").innerHTML=num;
};
function getOutput(){
    return document.getElementById("output-value").innerText;
};
function formattedNumber(num){
    const n = Number(num);
    const value = n.toLocaleString("en");
    return value;
};
function printOutput(num){
    if(num==""){
         document.getElementById("output-value").innerHTML=num;
    }
    else{
    document.getElementById("output-value").innerHTML=formattedNumber(num);
    }
};


function revearseFormattedNumber(num){
    if(num=="-"){
        return "";
    }
    return Number(num.replace(/,/g,''));
  
};


const operator = document.getElementsByClassName("operator");
for(i=0;i<operator.length;i++){
operator[i].addEventListener('click', function(){
    if(this.id=="clear"){
        printOutput("");
        printHistory("");
    }
    if(this.id=="backspace"){
        let output=revearseFormattedNumber(getOutput()).toString();
        if(output){//that is if output is true or has a value
output=output.substr(0,output.length-1);
printOutput(output);
        }
    }
    else{
        let output=getOutput();
        let history=getHistory();
if(output!=""){
    output=revearseFormattedNumber(output);
    history=history+output;
    if(this.id=="="){
        let result=eval(history);
        printOutput(result);
        printHistory("");
    }
    else{
history=history+this.id;
printHistory(history);
printOutput("");        
    }
}
    }
});
}

const number = document.getElementsByClassName("number");
for(i=0;i<number.length;i++){
number[i].addEventListener('click', function(){
    let output = revearseFormattedNumber(getOutput());
    if(output!=NaN){// that is if output is a number
        output=output+this.id;
        printOutput(output);
    }
});
};    