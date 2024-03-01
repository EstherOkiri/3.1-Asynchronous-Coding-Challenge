let secondsDelay = Math.random() * 1000;
function sumAsync(num1,num2){
    let result = num1 + num2;
    setTimeout(()=>{
        console.log(result);
    },secondsDelay)
}

sumAsync(5,5);
//console.log(result);