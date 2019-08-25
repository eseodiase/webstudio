
function ConvertThis(ValNum) {

    document.getElementById("cm").innerHTML = ValNum/0.0000062137;
    
    document.getElementById("inches").innerHTML = ValNum*12;
    
    document.getElementById("kilometer").innerHTML = ValNum/3280.8;
    
    document.getElementById("meter").innerHTML = ValNum/3.2808;
    
    document.getElementById("miles").innerHTML = ValNum/0.00018939;
    
    document.getElementById("yards").innerHTML = ValNum/0.33333;
    }
    
    function backspace() {
        document.calculator.ans.value+= "";
        document.calculator.ans.value
        = document.calculator.ans.value.substr(0, document.calculator.ans.value.length - 1);
        document.getElementById("del").innerHTML 
        = document.calculator.ans.value;
        }
    