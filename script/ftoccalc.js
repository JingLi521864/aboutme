var fvalue = 0
function calcSalary(){
    fvalue = Number(document.getElementById("fvalue").value)
    var salary = calculate(fvalue)
}
function calculate(fvalue){
    var salary = 5/9*(fvalue - 32)
    document.getElementById('result').innerHTML += salary;
    return salary;
}