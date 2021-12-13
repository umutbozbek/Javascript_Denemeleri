
//for döngüsü 

// const { number } = require("prop-types");

// for (let i=0;i<10;i++){
 
//     if(i==3){
//         console.log('istediğim sayı :'+i);
//         continue;
//     }

//     if(i==6){
//         console.log('en sevmediğim rakam :6');
//         break;
//     }
//     console.log(i);

// }

// let sonuc = 1;
// for ( let i=10 ; i>0; i-- ){
//     sonuc*= i;

// }

// console.log(sonuc);

// val = '\n';
// for (let i=0;i<10;i++){
//     for (let j=0;j<10;j++){
//         val +='* '
//     }
//     val +='\n';
// }

// console.log(val);


  // loops inn array & objects

//   let cars = ['Bmv','Mercedes','Toyota'];

//   for (let i=0;i<cars.length;i++){
//       console.log(cars[i]);
//   }

  /*
  let cars = ['Bmv','Mercedes','Toyota'];
let people=[
    {firstName:'umut',lastName:'bozbek'},
    {firstName:'ergün',lastName:'bozbek'},
    {firstName:'seda',lastName:'bozbek'},
]
     */
//objects
// for (let i=0;i<people.length;i++){
//     console.log(people[i].firstName);
// }




  //for-in 
//Arrays2
//         for(let i in cars){
//             console.log(`index:${i} value:${cars[i]}`);
// }


// Object
// for (let i in people){
//     console.log(`index:${i} value:${people[i].firstName}`);
// }




//   //foreach

//   cars.forEach(function(item){
//     console.log(item);

//   })

// people.forEach(function(item){
//     console.log(item.firstName);
// })


// map : returns an array 

// let val = people.map(function(item){
//     return item.firstName+ ' ' +item.lastName;
// })

// console.log(val);


// let numbers =[1,5,6,8,10];

// let num = numbers.map(function(n){
//     return n*n;
// })
// console.log(num);


/* Uygulama Sayı Tahmin Oyunu
 1-10 arası rastgele sayı üreticez üretilen bir sayıyıy aşağı yukarı 
 ifadeleri ile bulmaya çalışcaz
 ** puanlama yapın
 **kullanıcı kaç kerede bileceğini belirtebilirsiniz.
*/

// var hak ,can;
// var tahmin,sayac=0;
// var sayi =Math.floor((Math.random()*10+1));
// can = Number(prompt('kaç kerede bileceksiniz?'));
// hak=can;
// console.log(sayi);

// while (hak>0){
//     hak--;
//     sayac++;
//     tahmin=Number(prompt('bir sayı giriniz'));
//     if (sayi==tahmin){
//         console.log(`'Tebrikler ${sayac} defada bildiniz.`);
//         console.log(`puan: ${100-(100/can)*(sayac-1)}`);
//         break;
//     }else if (sayi>tahmin){
//         console.log('Yukarı');
//     }else {
//         console.log('Aşağı');
//     }

//     if (hak==0){
//         console.log('Hakkınız bitti.' +sayi);
//     }
// }