'use strict'

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


function showDialog(age,name){

  let age = prompt('Введите ваш позраст','');

  let name = prompt('Введите ваше Имя','');


}

  showDialog(20," Vitalik");