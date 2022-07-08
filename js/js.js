// let num = 50;

// while (num < 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// } while (num < 55)

// for (let i = 1; i < 8; i++) {
//     console.log(i);
// }


// for(let i = 0; i < 3; i++) {
//     console.log(i);
//     for(let j = 0; j < 3; j++) {
//         console.log(j);
//     }
// }

// let result = '';

// for(let i = 1; i < 7; i++ ) {
//     for (let j = 0; j < i; j++) {
//         result += '*';
//     }



//     result += '\n';
// }

// console.log(result);

function thirdTask() {
    // Пишем решение вот тут
    for(let i = 2; i < 11; i++) {
        if(i % 2 === 0) {
            console.log(i)
        }
    }

}
function firstTask() {
    const arr = [3, 5, 8, 16, 20, 23, 50];
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        result[i] = arr[i];
    }

    console.log(result);
    // return result;
}


// function secondTask() {
//     const data = [5, 10, 'Shopping', 20, 'Homework'];

//     for (let i = 0; i < data.length; i++) {
//         if (typeof(data[i]) === 'number') {
//             data[i] = data[i] * 2;
//         } else if (typeof(data[i]) === 'string') {
//             data[i] = `${data[i]} - done`;
//         }
//     }

//     console.log(data);
//     return data;
// }
// console.log(secondTask())


// function secondTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const data = [5, 10, 'Shopping', 20, 'Homework'];

//     // Пишем решение вот тут
//     for(let i = 0; i < data.length; i*2){
//         if(i === String) {
//             i
//         }
//         console.log(data)
//     }
//     return data;
// }

// console.log(secondTask())

function getMathResult(num, times) {
    if (typeof(times) !== 'number' || times <= 0) {
        return num;
    }

    let str = '';

    for (let i = 1; i <= times; i++) {
        if (i != times) {
            str += `${num * i}---`;
            // Тут без черточек в конце
        } else {
            str += `${num * i}`;
            // Это тоже самое, что и
            // str = str + num * i + "---"
        }
    }

    return str;
}

console.log(getMathResult(10, 5))

// const abc = "test";

// console.log(abc.slice(1, 4))


const num = 17.6;
console.log(Math.round(num));

const test = "15.6";
console.log(parseFloat(test));


const calc = (num) => {
    const cub = num * num * num;
    const val = (num * num) * 6;
    
    return `Объем куба: ${cub}, площадь всей поверхности ${val}`;
}
console.log(calc(5))




function getCoupeNumber (seatNumber) {

    if (typeof(seatNumber) !== 'number' || seatNumber < 0 || !Number.isInteger(seatNumber)) {
        return "Ошибка. Проверьте правильность введенного номера места";
    };

    if (seatNumber === 0 || seatNumber > 36) {
        return "Таких мест в вагоне не существует";
    }

    return seatNumber = Math.ceil(seatNumber / 4);

    // for (let i = 4; i <= 36; i += 4) {
    //     if(seatNumber <= i) {
    //         return Math.ceil(i / 4)
    //     }
    // }
}

console.log(getCoupeNumber(38));


function time (min) {
    const hours = Math.floor(min / 60);
    const minutes = min % 60;

    let hourStr = '';

    if (hours == 1) {
        hourStr = 'час'
    } else if (hours == 2 || hours == 3 || hours == 4) {
        hourStr = 'часа'
    } else {
        hourStr = 'часов'
    }

    return `Это ${hours} ${hourStr} и ${minutes} минут`
}

console.log(time(150));

function findMaxNumber (val1, val2, val3, val4) {

    if(typeof(val1, val2, val3, val4) !== 'number' || arguments.length < 4) {
        return '0';
    }

    return Math.max(val1, val2, val3, val4);

}

console.log(findMaxNumber(2, 3, 4, ));


const obj = {
    name: 'dsajd',
    with: 1000,
    height: 123,
    options: {
        erd: 'asdwa',
        dsad: 'wqoeiu'
    }
};

Object.keys(obj).forEach((key) => console.log(key));
Object.values(obj).forEach((key) => console.log(key));