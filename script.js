/* 1. Напишите функцию, которая проверяет, равны ли два аргумента объекта друг другу. Верните true, если объекты равны, в противном случае верните false.
// Первый аргумент

// Второй аргумент

➞ false

// Первый аргумент

// Второй аргумент

➞ true
 */
const a = {
    name: "Benny",
    phone: "3325558745",
    email: "benny@edabit.com"
};
const b = {
    name: "Jason",
    phone: "9853759720",
    email: "jason@edabit.com"
};
const c = {
    name: "Jason",
    phone: "9853759720",
    email: "jason@edabit.com"
};
const d = {
    name: "Jason",
    phone: "9853759720",
    email: "jason@edabit.com"
};

function compareObj(obj1, obj2) {
    for (let key1 in obj1) {
            if (obj1[key1] !== obj2[key1]) {
                return false;
            }
            return true;
        }
}
console.log(compareObj(a, b));
console.log(compareObj(c, d));

/* 2. Напишите функцию, которая преобразует число в строку, как показано ниже:

32 ➞ "30 + 2"
70701 ➞ "70000 + 700 + 1"
685 ➞ "600 + 80 + 5"

expandedForm(70304) ➞ "70000 + 300 + 4"
expandedForm(1037903) ➞ "1000000 + 30000 + 7000 + 900 + 3"
expandedForm(802539) ➞ "800000 + 2000 + 500 + 30 + 9" */
function expandedForm(num) {
    let strNum = num.toFixed();
    let newStr = '';
    for(let i=0; i<strNum.length; i++){
        if(strNum[i] !== '0') {
            newStr+= strNum[i]* Math.pow(10, (strNum.length-1-i));
            if(i !== strNum.length-1){
                newStr+= ' + ';
            }
        } 
    }
    return newStr;
}
console.log(expandedForm(70304));
console.log(expandedForm(1037903));
console.log(expandedForm(802539));
