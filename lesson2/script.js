//Задание 1

var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2 Префикс. Сначала поисходит увеличение на единицу, затем возвращается новое значение
d = b++; alert(d);           // 1 Постфикс. Сначала возвращается значение в d, затем происходит увеличение b на единицу
c = (2+ ++a); alert(c);      // 5 Унарный инкремент изменил значение a в первом выражении. Здесь уже складывается 2 и еще раз увеличенное на единицу значение a - c = (2 + 1+2)
d = (2+ b++); alert(d);      // 4 Унарный инкремент изменил значение b во втором выражении. Здесь складывается 2 и значение b до инкремента из-за постфикса c = (2 + 2)
alert(a);                    // 3 a был инкрементирован два раза в выражениях 1 и 3
alert(b);                    // 3 b был инкрементирован два раза в выражениях 2 и 4


//Задание 2

var a = 2;
var x = 1 + (a *= 2); //Альтернативная запись: x = 1 + (a = 2 * 2), Получается 5
alert(x);

//Задание 3

let a = 5, b = -2;

if (a > 0 && b > 0) {
    console.log(a - b);
} else if (a < 0 && b < 0 ) {
    console.log(a * b);
} else if ((a < 0 && b >= 0) || (a >= 0 && b < 0)) {
    console.log(a + b);
}

//Задание 4

let a = 0;

switch (a) {
    case 0:
        console.log(a++);

    case 1:
        console.log(a++);

    case 2:
        console.log(a++);

    case 3:
        console.log(a++);

    case 4:
        console.log(a++);

    case 5:
        console.log(a++);

    case 6:
        console.log(a++);

    case 7:
        console.log(a++);

    case 8:
        console.log(a++);

    case 9:
        console.log(a++);

    case 10:
        console.log(a++);

    case 11:
        console.log(a++);

    case 12:
        console.log(a++);

    case 13:
        console.log(a++);

    case 14:
        console.log(a++);

    case 15:
        console.log(a++);
        break;
}

//Задание 5


    function add(x, y) {
        return x + y;
    }

    function diff(x, y) {
        return x - y;
    }

    function mult(x, y) {
        return x * y;
    }

    function div(x, y) {
        if(y !== 0) {
            return x / y;
        } return 'Деление на ноль!';
    }


    console.log(add(2, 12));
    console.log(diff(2, 12));
    console.log(mult(2, 12));
    console.log(div(2, 12));

 //Задание 6

    function mathOperation(x, y, name) {
        let result;
        switch (name) {
                case '+':
                    result = add(x, y);
                    break;
                case '-':
                    result = diff(x, y);
                    break;
                case '*':
                    result = mult(x, y);
                    break;
                case '/':
                    result = div(x, y);
                    break;
                }
    return result;
    }

    console.log(mathOperation(2,3,'+'));
    console.log(mathOperation(2,3,'-'));
    console.log(mathOperation(2,3,'*'));
    console.log(mathOperation(2,3,'/'));

//Задание 7

    console.log(0 !== null); //Null - пустое значение, в то время как 0 не является пустым и представляет число

//Задание 8

    function power(val, pow) {
        if (pow <= 1) { return 1;
            return val*power(val, pow - 1);
        }
    }

    console.log(power(2, 0));