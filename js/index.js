"use strict"

function firstF(){

    let t = {}
    let i
    let numberOfUsers = prompt("Введите количество пользователей ");

    users()

    console.log(`Количество участников ${numberOfUsers}!`);

    function users(){
      for (i = 1; i <= numberOfUsers; i++) {
          t = {
             name: prompt(`Введите имя Пользователя №${i}`),
             age: +prompt(`Введите возраст Пользователя №${i}`),
          }   
          alert(`Пользователь ${i} \nИмя: ${t.name} \nВозраст: ${t.age}`);  
      }
  }
}
function secondF(){
    let getReceipt = receipt();
    let number = Object.keys(getReceipt).length;
    let key;
    let cost = 0;

    function totalCost() {
      for( key in getReceipt ) {
          if (!getReceipt.hasOwnProperty(key)) continue; 
          cost += ( getReceipt[key]['price'] );
        } return (cost);
    };

    let showCost = totalCost();

    ( function getInfo( secondFunc, thirdFunc ) {
      ( getInfo, secondFunc, thirdFunc );
      let totalInfo = Object.entries( getReceipt )
        .map( ( [ mainArray, property ] ) => `${mainArray}: ${property.info} | cost: ${property.price} $` )
        .join( `\n` );
      alert(` Your order: \n${totalInfo} \n Total cost of ${number} items: ${showCost} $ +Delivery 9000$ \n With delivery ${showCost + 9000} $`);
    }) ();

    alert("Второй вариант в консоли...");

    let b = 0;
    let g = `Ваш заказ: \n`;

    for( key in getReceipt ) { 
       g +=` ${key} ${getReceipt[key]['info']} | стоимость ${getReceipt[key]['price']}\n` ;
      b += ( getReceipt[key]['price'] );
    };

    console.log(`${g} Общая сумма ${b} $ +Доставка 9000$ \n Сумма с доставкой ${b + 9000} $`);


}
function thirdF(){
  let a = [];
  let str;
  let arr;
  let userAnswer;

     for (;;)  {  
      userAnswer = prompt("Команда 'del,' чтобы удалить обьект \n Команда 'add,' чтобы добавить обьект","");
      if( userAnswer == "stop" || userAnswer == "Stop" || userAnswer == "STOP" ){
        console.log("Вы отменили действие"); break
      };
      if( !userAnswer ){
        console.log("Вы отменили действие"); break
      } ;
        console.log(a);
        console.log(userAnswer);
        addOrDelItem() 
        delVoid()
        console.log(a);
        if ( userAnswer == !null || !undefined ) continue;
     }

  function addOrDelItem(){
    let userOperate = userAnswer;
    arr = userOperate.split(', ');
    for( let key in arr ){
      ( arr[key] == "add" ) ? arr.splice(0,1) && aDDItem() : "";
      ( arr[key] == "del" ) ?  arr.splice(0,1) && delItem() : ""; 
      ( arr[key] !== "add" || arr[key] !== "del" ) ? arr.splice(key,2)  &&
      console.log(" Введите 'add' или 'del'!"): ""; 
     }
  }
  function aDDItem(){
    str = String(arr);
    a.push(str)
  }
  function delItem(){
    str = String(arr);
    for( let key in a ){
     if ( a[key] == str ){
       a.splice(key, 1)
     } else {
         continue
       }
   }
  }
  function delVoid(){
    for (let key in a){
      if ( a[key] == "" ) { a.splice(key, 1) }
      else{ continue
      }}
  }
}
function activ() {
  document
  .querySelectorAll('.line')
  .forEach(n => n.classList.add('color'));
  document.querySelector(".line").classList.toggle("color")
}
function lightning() {
  alert("Пожалуйста обновите страницу\nИ еще раз нажмите на кнопку\nпосле 5 секунд, начинается гроза...");
  document
  .querySelectorAll('.line')
  .forEach(n => n.classList.add('light-2'));
  document.querySelector(".line").classList.toggle("light-2")
}


