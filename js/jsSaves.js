'use strict'
// Методы массивов + Map + Классы (еще нету)

let ElectionsDE = [
    {party: ' CDS/CSS', partyFounded: 1982, partyLeader: 'Angela Merkel', members: 1920000},
    {party: 'Social-Dem-Party', partyFounded: 1921, partyLeader: 'Olaf Sholtz', members: 3800000},
    {party: 'GRUNE', partyFounded: 2011, partyLeader: 'Enjerica Meleyo', members: 1240000},
    {party: 'Alternate for Deutshland', partyFounded: 1999, partyLeader: 'Vladislav Zemkorsky', members: 930000},
    {party: 'Right', partyFounded: 1932, partyLeader: 'Adolf Hitla', members: 670000},
    {party: 'Left Deutchland', partyFounded: 1871, partyLeader: 'Karl Marx', members: 400000}
    
]

// Делаем через обычный цикл
// for(let i = 0; i < ElectionsDE.length; i++){
//     console.log(ElectionsDE[i]);
// }

// Или делаем через forEach

// ElectionsDE.forEach(party => console.log(ElectionsDE))

// Map - служит для преобразования текущего массива в новый массив

// const newParty = ElectionsDE.map(party => {
//     return `${party.partyFounded} ${party.partyLeader}`
// })

// console.log(newParty);


// Метод Filter 

// const filtElem = ElectionsDE.filter(party => party.partyFounded >= 1950)
     


// console.log(filtElem);


// Метод Reduce 

// let amountMembers = 0;

// for(let i = 0; i<ElectionsDE.length; i++){
//     amountMembers = amountMembers + ElectionsDE[i].members
// }

// console.log(amountMembers);


// const RulParty = ElectionsDE.reduce((total, party) => {
//     return total + party.members
// }, 0)

// console.log(RulParty);

// FIND

// const rightPRT = ElectionsDE.find(party => party.party === 'Right');

// console.log(rightPRT);


// FindIndex

// const rightPRT = ElectionsDE.findIndex(party => party.party === 'Right');

// console.log(rightPRT);

// Совместаня практика этих методов

// const newParty = ElectionsDE
//     .filter(party => party.members >= 1500000)  // Метод filter вернул нам новый массив с массива ElectionsDe
//     .map(party => {
//         return {
//            info: `${party.members} (${party.partyFounded})`,
//            leader: `${party.partyLeader}`
//         }
//     })
    
//     console.log(newParty);


// Все о Map

// const personObj = {
//     name: 'Vitalik',
//     age: 20,
//     job: 'none'
// }

// const personArr = [
//     ['name', 'Vitalik'],
//     ['age', 20],
//     ['job', 'none']
// ]

// const map = new Map(personArr);

// map
//     .set('newField', 90)
//     .set(personObj, 'strValue')

// console.log(map);

// const a1 = map.size

// const a2 = map.has('job')


// for( let val of map){
//     console.log(val);
// }

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

// function hello() {
//     console.log('hello1',this);
// }

// const person = {
//     name: ' Vitaliy ',
//     age: 25, 
//     sayHello: hello,
//     sayHelloWindow: hello.bind(document),
//     logInfo: function(){
//         console.log(`Name is ${this.name}`);
//         console.log(`Age is ${this.age}`);
//     }
// }

// const lena = {
//     name: 'Elena', 
//     age: 23
// }

// person.logInfo.bind(person)()

// Анонимные функции и стрелочые функции

let a1 = () => {
    console.log('we arrow');
}
a1()
