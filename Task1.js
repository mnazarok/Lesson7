function handleNum (number, handleEvenCallback, handleOddCallback) {
    if (number % 2 === 0) {
        handleEvenCallback();
     } else {
        handleOddCallback();
    }
}


function handleEven () {
     console.log("number is even"); 
}

function handleOdd () {
    console.log("number is odd");  
}




handleNum(1, handleEven, handleOdd);