
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
        this.perimeter = a + b + c;
        return this.perimeter;
    }

    getArea(){
        this.s = Number(Math.sqrt(p * (p - a)*(p - b)*(p - c))).toFixed(3);
        this.p = this.perimeter / 2;

        return this.s;
    }
    
    
}

function getTriangle(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
    
    try {
        return new Triangle;
    } catch(Error) {
        console.log("Ошибка! Треугольник не существует");
    }
}

getTriangle(3, 5, 7)