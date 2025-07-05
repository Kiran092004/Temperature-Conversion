const text=document.getElementById("text");
const farhenhiet=document.getElementById("farhenhiet");
const celcius=document.getElementById("celcius");
const result=document.getElementById("result");
let temp;
function convert(){
    if(farhenhiet.checked) {
        temp = Number(text.value);
        let f = temp * 9/5 + 32;
        result.textContent = `${f.toFixed(2)} °F`;
    } else if(celcius.checked) {
        temp = Number(text.value);
        let c = (temp - 32) * 5/9;
        result.textContent = `${c.toFixed(2)} °C`;
    } else{
        result.textContent = "Please select a unit";
    }
}
