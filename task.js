
function parseCount(count){
    if (isNaN(Number.parseInt(count))) {
        throw new Error("Невалидное значение");
    }
    return count;
}

function validateCount(count){
    try {
        return parseCount(count)
    } catch(Error) {
        console.log(Error);
    }
}

console.log(validateCount("123"));
console.log(validateCount("1.34"));
console.log(validateCount("asfer"));


class Triangle{

    getPerimeter(){
        let P;

        P = a + b + c;
        return P;
    }

    getArea(){
        let S;
        let p;

        p = (a + b + c) / 2
        S = (Math.sqrt(p * (p - a)*(p - b)*(p - c))).toFixed(3);
        
        return S;
    }
    constructor(a, b, c){
        this.a = a;
        this.b = b;
        this.c = c;
        let sum = a + b;
        if (sum < c ) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
       
    }
    
}

function getTriangle(a, b, c) {
    try {
        return new Triangle;
    } catch(Error) {
        console.log("Ошибка! Треугольник не существует");
    }
}

getTriangle(3, 5, 7)