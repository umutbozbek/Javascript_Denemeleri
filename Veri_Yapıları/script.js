
// //date object

// const { typeOf } = require("react-is");

// let d=new Date;
// let birthday=new Date(1997,1,4);
// //set nethods
// d.setFullYear(2020);
// d.setMonth(5);
// d.setDate(20);
// d.setHours(10);


// //get methods
// console.log(d.getDate());
// console.log(d.getDay());
// console.log(d.getFullYear());
// console.log(d.getHours());
// console.log(d.getMonth());
// console.log(d.getSeconds());

// console.log(d.getFullYear()-birthday.getFullYear());
// console.log(d.getMonth()-birthday.getMonth());
// console.log(d);
// console.log(typeof d);

//şimdiki tarihi göster (y.a.g)

// var dt=new Date();

// console.log(dt.getMonth());
// console.log(dt.getDate());
// console.log(dt.getFullYear());
// console.log(dt);

// //Tarih ve saat 

// var dtA=new Date('6/12/2021 15:50:20');

// console.log(dtA);

// 1/1/2021 -1 gün

// var dtC=new Date('1/1/2021');
// var dayofMonth = dtC.getDate();
// dtC.setDate(dayofMonth-1);

// console.log(dtC);

//2 tarih arasında geçen süre

// var start=new Date('1/1/2021');
// var  end=new Date ('1/1/2022');

// var milisecond=end-start;
// var saniye=milisecond/1000;
// var dakika=saniye/60;
// console.log('milisecond:' + milisecond);
// console.log('saniye:'+ saniye);
// console.log('dakika'+dakika);


//anneler gününün 2022 yılında ne zaman kullanılacak

// var motherdays=new Date();
// motherdays.setHours(0,0,0,0);
// motherdays.setFullYear(2022);
// motherdays.setDate(1);
// motherdays.setMonth(4);

// while(motherdays.getDay() !=0) {
//     motherdays.setDate(motherdays.getDate()+1)
// }

// motherdays.setDate(motherdays.getDate()+7);
// console.log(motherdays);
    

//yaş hesaplama

// var dgko=new Date('4/2/1997');
// var ageDifms=Date.now()-dgko.getTime();
// var ageDate=new Date(ageDifms);
// console.log(ageDate.getFullYear()-1970);


//Number

// let val;
// // val= isNan (' ') sayıya çevrilebilirmi diye kontrol eder

// var num=10.1234566789;
// val=num.toPrecision(5); //alınacak toplam basamakları
// val=num.toFixed(2); //virgülden sonraki basamakları

// val =Math.PI;
// val=Math.round(2.4); //en yakın sayıya yuvarlar
// val=Math.ceil(2.4); // her zaman yukaru yuvarlar
// val=Math.floor (2.4) // her zaman asagı yuvarlarnır


// console.log(val);
// console.log(typeof val);

//Uygulama

// var num=15.123456789;

//toplamda 3 basamaklı sayı kullan
// console.log(num.toPrecision(3));

//ondalık kısmı 3 basamakta sınırla
// console.log(num.toFixed(3));

// en yakın sayıya yuvarla

// console.log(Math.round(num));
 // yukaru yuvarla 

//  console.log(Math.ceil(num));

 //aşağı yuvarla

//  console.log(Math.floor(num));

 //1-2-10-56-20 en küçüğünü ve en büyüğünü bul

//  console.log(Math.min(1,2,10,56,20));
//  console.log(Math.max(1,2,10,56,20));

// sayı aralığının kullanıcının belirleyeceği rastgele sayı üretin

// var min=50;
// var max=100;

// console.log(Math.floor(min+Math.random()*(max-min)));

/* bir personelin yaptığı mesaiye göre aldığı maaşı hesaplama
**brüt maaş :3700tl //// brüt mesai:10.3tl 
ağustos ayı mesai toplamı 42 saat ise toplam brüt maaş nedir ? 
brüt maaş üzerinde toplan kesinti oranı %25 ise alınacak toplam net maaş nedir?
*/

// var brütMaaş=3700;
// var mesaiUcreti=10.3;
// var mesaiSüresi=42;

// var toplamBrütMaas=brütMaaş+(mesaiUcreti*mesaiSüresi);
// var toplamNetMaas =toplamBrütMaas-toplamBrütMaas*0.25;

// console.log(toplamBrütMaas.toFixed(2));
// console.log(toplamNetMaas.toFixed(2));



// --String

// const firstName='Umut';
// const lastName = "Bozbek";
// const age=24;
// let val;

//string concatenation 
// val =firstName+lastName;
// val ='Umut';
// val+=' Bozbek';
// val='Benim adım ' + firstName+ '' +lastName+' ve yaşım ' + age +' Mersinde yaşıyorum';

//string concat (birleştirme)

// val=firstName.concat(' ',lastName);

//string uppercase-lowercase
// val=val.toLocaleUpperCase();
// val=val.toLocaleLowerCase();
//val=val[0];
// val=val.indexOf('z');

//string replace
// val=val.replace('umut','ergün');

////String lenght
// val=val.length;
 
// console.log(val);
// console.log(typeof val);


//template literals

// const fuulName = 'umut bozbek';
// const city='mersin';
// const yearofBirth='1997';

// let val ;

// val= 'my name is ' + fuulName+' I\'m ' +(2020-yearofBirth)+' years old'+' and I live in '+ city;

// val=`my name is ${fuulName} I'm ${2018-yearofBirth} years old and  I live in ${city}`;

// console.log(val);


