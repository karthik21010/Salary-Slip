var inps = document.querySelectorAll('input[type="Text"]');
var btn = document.querySelector("#btn");
var h3 = document.querySelector('#heading');

var sal = document.querySelector("#salary");
var d_m = document.querySelector("#d_month");
var present = document.querySelector("#present");
var ot = document.querySelector("#ot");

var total = document.querySelector("#result");
var display = document.querySelector('.result_box');
var OT_sal = document.querySelector('#ot_salary');
var t_s = document.querySelector('#totalsalary')
btn.addEventListener('click',function(ev){
    ev.preventDefault();
    
    for(var i = 0; i < inps.length; i++){
        if(inps[i].value.trim() === ''){
            h3.textContent = "*Please fill all the details";
            h3.style.color = 'red';
            display.style.display = 'none';
            break;
        }else{
            h3.textContent = "";
            display.style.display ='block';
        }   
            var total_salary = (parseInt(sal.value)/parseInt(d_m.value)) * parseInt(present.value);
            total.value = total_salary.toFixed(2);

            var OT = parseInt(sal.value)/parseInt(d_m.value) / 8 * parseInt(ot.value);
            OT_sal.value = OT.toFixed(2);

            var total_sal = total_salary + OT;
            t_s.value = total_sal.toFixed(2);
        }}
    )




