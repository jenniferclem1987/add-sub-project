function add()
{
    let a=Number(document.getElementById('num1').value);
    let b=Number(document.getElementById('num2').value);
    var sum=a+b;
    document.getElementById('result').value=Number(sum);
}
function sub()
{
    let a=Number(document.getElementById('num1').value);
    let b=Number(document.getElementById('num2').value);
    var sum=a-b;
    document.getElementById('result').value=Number(sum);
}
function reset()
{
    document.getElementById('num1').innerHTML-" ";
    document.getElementById('num2').innerHTML-" ";
    document.getElementById('result').innerHTML-" ";
}