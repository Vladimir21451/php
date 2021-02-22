let lastOperand = 0;
let hrelastOperand=0;
let operation = null;
let firstOperand = 0;

const inputWindow = document.getElementById('inputWindow');
const inputAll = document.getElementById('inputAll');

document.getElementById('btn_clr').addEventListener('click', function () {
    lastOperand = 0;
    operation = null;
    inputWindow.value = '';
    inputAll.value ='';
})
document.getElementById('btn_clrW').addEventListener('click',function () {
    let d = 0;
    let k = 0;
    d = inputWindow.value.length;
    k = inputAll.value.length
    k = k - d;
    d=inputAll.value; 
    inputWindow.value = '';  
    inputAll.value = d.slice(0, k);
b 
})
document.getElementById('btn_1').addEventListener('click',function () {
    inputWindow.value += 1; 
    inputAll.value += 1;  
})

document.getElementById('btn_2').addEventListener('click',function () {
    inputWindow.value += 2; 
    inputAll.value += 2;  
})
document.getElementById('btn_3').addEventListener('click',function () {
    inputWindow.value += 3; 
    inputAll.value += 3;  
})
document.getElementById('btn_4').addEventListener('click', function () {
    inputWindow.value += 4;
    inputAll.value +=4;
})
document.getElementById('btn_5').addEventListener('click', function () {
    inputWindow.value += 5;
    inputAll.value +=5;
})
document.getElementById('btn_6').addEventListener('click', function () {
    inputWindow.value += 6;
    inputAll.value +=6;
})
document.getElementById('btn_7').addEventListener('click', function () {
    inputWindow.value += 7;
    inputAll.value +=7; 
})
document.getElementById('btn_8').addEventListener('click', function () {
    inputWindow.value += 8;
    inputAll.value +=8;
})
document.getElementById('btn_9').addEventListener('click', function () {
    inputWindow.value += 9;
    inputAll.value +=9;
    //alert(inputAll.value);
})
document.getElementById('btn_0').addEventListener('click', function () {
    inputWindow.value += 0;
    inputAll.value += 0;
})
document.getElementById('btn_plus').addEventListener('click', function () {
    inputAll.value = inputAll.value += '+';
    firstOperand = inputWindow.value;
    inputWindow.value = '';
    operation = '+';
})
document.getElementById('btn_minus').addEventListener('click', function () {
    inputAll.value = inputAll.value += '-';
    firstOperand = inputWindow.value;
   inputWindow.value = '';
    operation = '-';
})

document.getElementById('btn_proc').addEventListener('click', function () {
    inputAll.value = inputAll.value += '%';
    firstOperand = inputWindow.value;
    inputWindow.value = '';
    operation = '%';
})
document.getElementById('btn_punkt').addEventListener('click', function () {
    inputAll.value = inputAll.value += '.';
    inputWindow.value = inputWindow.value + '.';

})
document.getElementById('btn_del').addEventListener('click', function () {
    inputAll.value = inputAll.value += '/';
    firstOperand = inputWindow.value;
    inputWindow.value = '';
    operation ='/';
})
document.getElementById('btn_sqrt').addEventListener('click', function () {
    inputAll.value = 'V';
    operation = 'V';
    inputWindow.value = '';
})
document.getElementById('btn_result').addEventListener('click', function () {
    inputAll.value = inputAll.value += '=';
    lastOperand = inputWindow.value;
    //alert('lastOperand' + ' ' + lastOperand);
    inputWindow.value = '';
    switch(operation){
        case '+':
            inputAll.value += parseFloat(firstOperand) + parseFloat(lastOperand);
        break;
        case '-':
            inputAll.value += (parseFloat(firstOperand) -  parseFloat(lastOperand)).toPrecision(4);
            break;
        case '*':
            inputAll.value += (parseFloat(firstOperand)*parseFloat(lastOperand)).toFixed(4);  
        break;
        case '/':
            inputAll.value += (parseFloat(firstOperand)/parseFloat(lastOperand)).toFixed(4);
        break;
        case '%':
            inputAll.value += (parseFloat(firstOperand)%parseFloat(lastOperand)).toFixed(4);
        break;
        case 'V':
            inputAll.value +=   Math.sqrt(lastOperand).toFixed(4); 
        break; 
        default:
    }
    let li = document.createElement('li');
    li.textContent = inputAll.value;
    ul.append(li);
})
document.getElementById('btn_mult').addEventListener('click', function () {
    inputAll.value = inputAll.value += '*'; 
    firstOperand = inputWindow.value;
    inputWindow.value = ''; 
    operation = '*'; 
})
