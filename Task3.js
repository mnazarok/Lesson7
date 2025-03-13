// function divide (numerator, denominator){
//     let result = numerator / denominator;
//     if (denominator === 0 || !Number.isFinite(numerator) || !Number.isFinite(denominator)) {
//         console.log("Аргумент не пройшов валідацію");   
//     } else {
//         console.log(result);
//     }
// }


// divide (1.2,5);

    
function divide (numerator, denominator){
    let result = numerator / denominator;
    try {
        if (!Number.isFinite(numerator) || !Number.isFinite(denominator)) {
            throw new Error("Аргумент не є числом");
        }
        if (denominator === 0) {
            throw new Error("Ділення на нуль неможливе");
        }
        console.log(result);
    } catch (error) {
        console.log("Помилка:", error.message);
    }
}





 divide(Math.floor(Math.random() * 100) + 1,Math.floor(Math.random() * 100) + 1);
 divide("Hello",2);
 divide(3,"Hello");
 divide(1,0);



