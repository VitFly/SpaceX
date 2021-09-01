// Про прототипы
// Все просто рассказано: циклы, условные операторы, работа с домом уже рассказаны и ты их знашеь.
// Итак, это первая часть этой работы 
// Прототипы!!  Прототипы!!  Прототипы!!  Прототипы!!  Прототипы!!  Прототипы!!  Прототипы!! 

// const person = {
//     name: 'Vitalik',
//     age: 20,
//     city: 'Minsk',
//     income: 0,
//     makeDeal: function(){
//         console.log('i m learn JS');
//     }
// }

// Object.prototype.sayBye = 25;

// console.log(person.sayBye);

// const lena = Object.create(person);

// lena.name = 'Elena'

// Object.prototype.newMethod()

// console.log(Object.newMethod);

// Контаекст вызова this

function hello() {
    console.log('hello', this);
}

const person = {
    name: ' Vitaliy ',
    age: 25, 
    sayHello: hello,
    sayHelloWindow: hello.bind(document),
    logInfo: function(){
        console.log(`Name is ${this.name}`);
        console.log(`Age is ${this.age}`);
    }
}

const lena = {
    name: 'Elena', 
    age: 23
}

person.logInfo.bind(person)()