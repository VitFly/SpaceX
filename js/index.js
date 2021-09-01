'use strict'
// Методы массивов + Map + Классы (еще нету)

// let ElectionsDE = [
//     {party: ' CDS/CSS', partyFounded: 1982, partyLeader: 'Angela Merkel', members: 1920000},
//     {party: 'Social-Dem-Party', partyFounded: 1921, partyLeader: 'Olaf Sholtz', members: 3800000},
//     {party: 'GRUNE', partyFounded: 2011, partyLeader: 'Enjerica Meleyo', members: 1240000},
//     {party: 'Alternate for Deutshland', partyFounded: 1999, partyLeader: 'Vladislav Zemkorsky', members: 930000},
//     {party: 'Right', partyFounded: 1932, partyLeader: 'Adolf Hitla', members: 670000},
//     {party: 'Left Deutchland', partyFounded: 1871, partyLeader: 'Karl Marx', members: 400000}
    
// ]

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

// const Obj = {
//     name: 'Vitalik',
//     age: 20,
//     job: 'none'
// }

// const Arr02 = [
//     ['name', 'Vitalik'],
//     ['age', 20],
//     ['job', 'none'],
//     ['info', 'cigan'],
//     ['rulParty', 1917]
// ]

//     const map = new Map(Arr02) // это конструктор, мы передали Arr02

// console.log(Object.entries(Obj));
// console.log(Object.fromEntries(Arr02));

// map.set('nero-01', 54, 98)
//    .set('nero-02', Obj )
//    .set(Obj, 'nero-03')

// let mapSize = map.size

// for(let [key, value] of map.entries()) {    // получаем ключи и значения 
//     console.log(key, value);
// }

// for(let key of map.keys()) {  // получаем только ключи
//     console.log(key);
// }

// for(let value of map.value){    // получаем только значения
//     console.log(value);
// }          

// map.forEach((value, key, m)   =>{       // получаем из карты ключ и значение через forEach
//         console.log(value, key);
// })

// const array = Array.from(map);

// const mapObj = Object.fromEntries(map.entries())

// console.log(mapObj);

// ================== небольшой пример 

// const users = [
//     {name: 'Elena'}, 
//     {name: 'Victor'},
//     {name: 'Veronica'}
// ]


// const visits = new Map()

//     visits
//     .set(users[0], new Date())
//     .set(users[1], new Date(new Date().getTime() + 1000 * 60))
//     .set(users[2], new Date(new Date().getTime() + 3000 * 60))

//     function lastVisit(user) {
//         return visits.get(user)
//     }
//     console.log(lastVisit(users[0]));

    // ================== небольшой пример 

    let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
        ];


    function unique(array) {
        const set = new Set(array);
        console.log(set);
    }

    unique(values)









