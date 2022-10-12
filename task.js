
function parseCount(count){
    
    if (isNaN(Number.parseInt(count))) {
        throw new Error("Невалидное значение");
    }
    return count;
}

function validateCount(count){
    try {
        return parseCount(count)
    } catch(error) {
        return error;
    }
}

console.log(validateCount("123"));
console.log(validateCount("1.34"));
console.log(validateCount("asfer"));


class Triangle{

    constructor(a, b, c){
        this.a = a;
        this.b = b;
        this.c = c;
        let sum = a + b;
        let sum1 = a + c;
        let sum2 = b + c;
        if (sum < c ||  sum1 < b || sum2 < a) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
    }

    getPerimeter(){
        return this.a + this.b + this.c;
    }

    getArea(){
        const p = getPerimeter() / 2;
       
        return Number(Math.sqrt(p * (p - this.a)*(p - this.b)*(p - this.c))).toFixed(3);
    }
    
    
}

function getTriangle(a, b, c) {
    
    try {
        return new Triangle(a, b, c);
    } catch(Error) {
        console.log("Ошибка! Треугольник не существует");
    }
}

getTriangle(1, 3, 100)