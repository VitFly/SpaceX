// 'use strict'

// let userName = prompt('Кто там?', '');

//     if (userName == 'Админ'){

//         let pass = prompt('Пароль?','');

//         if(pass == 'Я главный'){
//             alert('Здравствуйте!');
//         }
//         else if(pass == null || ''){
//             alert('Отменено');
//         } 
//         else{
//             alert('Неверный пароль');
//         }

        
//     }   else if(userName == null || userName == ''){
//         alert('Отменено');
//     }   else{
//         alert('Я вас не знаю')
//     }



    

    // const number = +prompt('Введите число между 0 и 3', '');

    // if (number === 0) {
    //   alert('Вы ввели число 0');
    // }
    
    // if (number === 1) {
    //   alert('Вы ввели число 1');
    // }
    
    // if (number === 2 || number === 3) {
    //   alert('Вы ввели число 2, а может и 3');
    // }


    // function checkAge(age) {
    //   if (age > 18) {
    //     return true;
    //   } else {
    //     return confirm('Родители разрешили?');
    //   }
    // }


  //   function getMin(a,b){
  //     return Math.min(a,b);
  //   }

  //  let resultFunc = getMin(12,7);

  //   console.log(resultFunc);


//   function ask(question, yes, no) {
//     if (confirm(question)){
//       yes();
//     }
//     else no();
//   }
  
//   ask(   
//     "Вы согласны?",
//     function() { alert("Вы согласились."); },
//     function() { alert("Вы отменили выполнение."); }
// );

// function ask(question, yes, no) {
//   if (confirm(question)) yes()
//   else no();
// }

// ask(
//   "Вы согласны?",
//   function() { alert("Вы согласились."); },
//   function() { alert("Вы отменили выполнение."); }
// );



// let userName = prompt("Введите имя", "Алиса");
// let isTeaWanted = confirm("Вы хотите чаю?");

// alert( "Посетитель: " + userName ); // Алиса
// alert( "Чай: " + isTeaWanted ); // true


// function showDialog(age,name){

//   let age = prompt('Введите ваш позраст','');

//   let name = prompt('Введите ваше Имя','');


// }



  // let Sobj = {
  // }


  // function isEmpty(obj){
  //     for( let key in obj){
  //       return false
  //     }
  //       return true
  // }

  // let a1 =  isEmpty(Sobj);

  // console.log(a1);


//  let salary = {
//    Michail: 1200, 
//    Ilya: 1350, 
//    Ruslan: 1700, 
//    Vitaliy: 800, 

//  }

//  let sum = 0;

//  for( let key in salary){
//    sum += salary[key];
//  }

//  console.log(sum);

// let user = {
//   name: "Джон",
//   go: function() { alert(this.name) }
// };

// (user.go)()

// function makeUser() {
//   return {
//     name: "Джон",
//     ref: 'undefi'
//   };
// };

// let user = makeUser();

//    console.log(user.ref);   




    // Калькулятор!!


  //  let calculator = {
  //   sum() {
  //     return this.a + this.b;
  //   },
  
  //   mul() {
  //     return this.a * this.b;
  //   },
  
  //   read() {
  //     this.a = +prompt('a?', 0);
  //     this.b = +prompt('b?', 0);
  //   }
  // };
  
  // calculator.read();
  // alert( calculator.sum() );
  // alert( calculator.mul() );

      // let num1 =( Math.round(6.33 * 10) / 10  ) 

      // console.log(num1);

      // function random(min, max) {
      //   return min + Math.random() * (max - min);
      // }
      
      // alert( random(1, 5) );
      // alert( random(1, 5) );
      // alert( random(1, 5) );

      // String !!! // 
      
    //  let styles = ['Джас', 'Блюз'];

    //  styles.push('Рок-н-ролл');

    //  styles[(Math.floor(styles.length-1))/2 ] = 'Классика'

    // let DelElem = styles.shift();

    // console.log(DelElem);

    // styles.unshift('Рэп','Рэгби');

    // console.log(styles);

    let arr = ["a", "b"];

arr.push(function() {
  alert( this );
})

arr[2](); // ?


      