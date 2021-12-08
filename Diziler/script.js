//Diziler

// let names=['umut','serdar','mert','can'];
// let years=[2008,2009,1998,1997];
// let mix=['umut','bozbek',1997,null,undefined,['film izlemek']];

// //get array item 
// console.log(names[0]);
// console.log(names[3]);

// //set array item
// names[names.length]='baran';

// //add item
// years.push(1986); //sona
// years.unshift(1986); //başa
// //remove item
// years.pop(); //sondaki eleman
// years.shift(); // en baştaki

// //reverse 
// names.reverse();

// //sort
// years.sort();

// //concat
// let val =years.concat(names);
// console.log(val);

// //indexof
// let index= names.indexOf('serdar');
// console.log('index :'+index);

// //splice //eleman silme ekleme gibi düşün sırasını belirleme vs
// names.splice(0,1,);

// //find

// function over18(year){
//     let age = 2021-year;
//     return age>=18;

// }
// //let val=years.find(over18);


// //filter

// let val=years.filter(over18);



// console.log(val);
// console.log(names);
// console.log(names.length);
// console.log(typeof names);
// // console.log(years);
// // console.log(mix);





// //Diziler Uygulama




// // "Bmw,Mercedes,Opel,Mazda" elemanlarına sahip bir dizi oluşturun.
// var arr=["Bmv","Mercedes","Opel","Mazda"];
// // var arr2 = new Array("Bmw","Merdeces","Opel","Mazda")

// console.log(arr);




// // Dizi kaç elemanlıdır ?
// console.log(arr.length);

// // Dizinin ilk ve son elemanı nedir ?
// console.log(arr[0]);
// console.log(arr[3]); 
// console.log(arr[arr.length-1])


// // "Renault" değerini dizinin sonuna ekleyin.
// // arr[4] = "Renault";
// arr[arr.length]="Renault";
// arr[arr.length]="Fiat"
// arr.push('Toyota');

// // "Toyota" değerini dizinin başına ekleyin.

// arr.unshift("Seat");

// // "Seat" değerini siliniz.

// arr.shift("Seat");

// // "Toyota" değerini siliniz.
// arr.pop("Toyota");

// // Dizi elemanlarını ters çevirin

// arr.reverse();

// // Dizi elemanlarını alfabetik olarak sıralayın.

// arr.sort();


// // [1,2,5,80] dizisini sıralayın.

// var numbers=[1,2,5,80,15];

// function compare(a,b){
//     if(a>b) return 1 ;
//     if(a==b) return 0;
//     if(a<b) return -1;

// }
// console.log(numbers.sort(compare));

// // "Opel" değeri dizinin bir elemanımıdır ?

// console.log(arr);
// console.log(arr.indexOf("Opel"));
// console.log(arr.includes("Opel"));

// // var str = "Chevrolet,Dacia";
// // ifadesini diziye çeviriniz.
// var str = "Chevrolet,Dacia";
// var arr2=str.split(',');
// console.log(arr2);


// // Oluşturulan 2 dizinin elemanlarını bir başka dizi ile birleştirin.

// var arr3 =arr.concat(arr2);
// console.log(arr3);


// // Oluşturulan diziden son 2 elemanı siliniz.

// // console.log(arr3.pop());
// // console.log(arr3.pop());

// // console.log(arr3.splice(6,2));
// console.log(arr3.slice(6,8));
// console.log(arr3);

// /* Aşağıda verilen elemanları bir dizi içerisinde saklayınız.
     
//      studentA : Yiğit Bilgi 2010
//      StudentB : Sena Balcı  1999
//      studentC : Mert Atan 1998   

// */

// var studentA =["Yiğit","Bilgi",2010];
// var StudentB =["Sena","Balcı",1999];
// var studentC =["Mert","Atan",1998];

// var students=[studentA,StudentB,studentC];

// console.log(students[0]);
// console.log(students[0][0]);
// console.log(students[0][1]);
// console.log(students[0][2]);

// console.log(students[1][0]);
// console.log(students[1][1]);
// console.log(students[1][2]);



// console.log(students);










