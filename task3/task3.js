function triangle() {
    let str = '';
    for (let i = 0; i < 7; i++) {
        str += '#';
        console.log(str);
    }
}
function FizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 == 0 && i % 5 == 0)
            console.log("FizzBuzz")
        else if (i % 3 == 0)
            console.log("Fizz");
        else if (i % 5 == 0)
            console.log("Buzz");
        else
            console.log(i);
    }
}
function chessTable() {
    let table = "";
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 4; j++) {
            if (i % 2 == 1)
                table += " #";
            else
                table += "# ";
        }
        table += '\n';
    }
    console.log(table);
}
function min(a, b) {
    return a < b ? a : b;
}
function isEven(num) {

    if (num == 0)
        return true;
    else if (num == 1)
        return false;
    else
        return isEven(num - 2);

}
function isEvenUpg(num) {
    if (Math.abs(num) == 0)
        return true;
    else if (Math.abs(num) == 1)
        return false;
    else
        return isEven(Math.abs(num) - 2);

}
function countBs(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++)
        if (str[i] == 'B')
            count++;
    return count;
}
function countChar(str, symbol) {
    let count = 0;
    for (let i = 0; i < str.length; i++)
        if (str[i] == symbol)
            count++;
    return count;
}
function range(start, finish, step) {
    if (step === undefined)
        step = 1;
    const arr = [];
    if (start > finish) {
        for (let i = start; i >= finish; i += step)
            arr.push(i);
    }
    else {
        for (let i = start; i <= finish; i += step)
            arr.push(i);
    }
    return arr;
}
function sum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++)
        sum += array[i];
    return sum;
}
function reverseArray(array) {
    const arr = [];
    for (i = array.length - 1; i >= 0; i--)
        arr.push(array[i]);
    return arr;
}
function reverseArrayInPlace(array) {
    let temp;
    const n = array.length - 1;
    for (let i = 0; i < array.length / 2; i++) {
        temp = array[i];
        array[i] = array[n - i];
        array[n - i] = temp;
    }
}
function arrayToList(array) {
    let curNode, prevNode;
    for (let i = array.length - 1; i >= 0; i--) {
        if (i < array.length - 1) {
            curNode = {
                value: array[i],
                rest: prevNode
            }
        }
        else {
            curNode = {
                value: array[i],
                rest: null
            }
        }
        prevNode = curNode;
    }
    return prevNode;
}
function listToArray(list) {
    let node = list;
    const res = [];
    do {
        res.push(node.value);
        node = node.rest;

    } while (node != null);
    return res;
}
function pretend(list, element) {
    return { value: element, rest: list }
}
function nth(list, position) {
    let i = 0;
    let node = list;
    while (i != position && node != null) {
        node = node.rest;
        i++;
    }
    if (i < position)
        return undefined;
    return node.value;
}
function deepEqual(obj1, obj2) {
    if (typeof obj1 != "object" && typeof obj2 != "object") {
        return obj1 === obj2;
    }
    else if (typeof obj1 == "object" && typeof obj2 == "object") {
        if (obj1 === null && obj2 === null)
            return true;
        else if (obj1 === null || obj2 === null)
            return false;
        else {
            let propObj1 = [], propObj2 = [];
            for (prop in obj1)
                propObj1.push(obj1[prop]);
            for (prop in obj2)
                propObj2.push(obj2[prop]);
            for (let i = 0; i < propObj1.length; i++)
                if (!deepEqual(propObj1[i], propObj2[i]))
                    return false;
        }
    }
    else if (typeof obj1 == "object" || typeof obj2 == "object") {
        return false;
    }
    return true;
}
function reduce() {
    const array = [[1, 2, 3], [4, 5], [6]]
    const result = array.reduce((prev, cur) => {
        return prev.concat(cur);
    });
    console.log(result);
}
function every(array, func) {
    for (let i = 0; i < array.length; i++)
        if (!func(array[i]))
            return false;
    return true;
}
function some(array, func) {
    for (let i = 0; i < array.length; i++)
        if (func(array[i]))
            return true;
    return false;
}


const obj = { here: { is: "an" }, object: 2 };
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, { here: 1, object: 2 }));
console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));

/*
console.log(some([3, 1, 5, 3], isNaN));
console.log(some([5, NaN, 2, 3], isNaN));
console.log(every([2, 6, 2, 4], isNaN));
console.log(every([NaN, NaN, NaN], isNaN));
*/