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


  function getPow(){
      let PowNum1 = prompt('Введите 1-е число','');
      let PowNum2 = prompt('Введите 2-е число(возведение в степень)','');
      let PowMath = Math.pow(PowNum1, PowNum2);
      alert(PowMath);
  }

  getPow();

//   getPow(3,6);

//   let PowFunc = getPow;

//   pow(3, 2) = 3 * 3 = 9
// pow(3, 3) = 3 * 3 * 3 = 27
// pow(1, 100) = 1 * 1 * ...* 1 = 1

    

    