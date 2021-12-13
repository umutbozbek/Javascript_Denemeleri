//                                        if/else Statements

// const firstnNmae= "Umut";
// const age =24;
// const isStudent = false;
// const school ='university';

// if(firstnNmae=='Umut'){
//     console.log('Merhaba Umut');
// }

// if (age==24){
//     console.log('Yaşınız 24');
// }

// if(isStudent){
//     console.log('Merhaba öğrenci');
// }else{
//     console.log('Nasılsın öğrenci')
// }

// if(age>=18) {

//         if((school=='university')|| (school=='high school')){

//     console.log('Ehliyet alabilirsiniz')
//         }else{
//     console.log('Eğitim durumunuz yetersiz')
//         }

// }else{
//     console.log('Ehliyet alamazsınız')
// }

// if(age>0 && age<12){
//     console.log(`${firstnNmae} is a child `);

// }else if (age>=13 && age <=19){
//     console.log(`${firstnNmae} is a teenager`)
// }else{
//     console.log(`${firstnNmae} is a adult`)
// }


// undefined


// if(typeof id !=='undefined'){
//     console.log('id ' + id );
// }else{
//     console.log('no id');
// }

//Switch statements

// let category = 'telefon';

//  switch(category){
// case 'telefon' :
//         console.log('telefon kategorisi');
// break;
// case 'bilgisayar':
//         console.log('bilgisayar kategorisi');
//         break;

//         default:
//                 console.log('yaanlış katagorisindesiniz');
//  }


// let day;

// switch (new Date().getDay()) {
//         case 0:
//                 day = 'Pazar';
//                 break;

//         case 1:
//                 day = 'Pazartesi';
//                 break;

//         case 2:
//                 day = 'Salı';
//                 break;

//         case 3:
//                 day = 'Çarşamba';
//                 break;

//         case 4:
//                 day = 'Perşembe';
//                 break;

//         case 5:
//                 day = 'Cuma';
//                 break;

//         case 6:
//                 day = 'Cumartesi';
//                 break;



// }

// console.log(`bugün günlerden ${day}`);



// const age =24;
// const firstName='Umut'

// switch(true){
//         case age>=0 && age<=12:
//         console.log(`${firstName} is a child `);
//         break;
//         case  age>=13 && age <=19:
//         console.log(`${firstName} is a teenager`);
//         break;
//         default :
//         console.log(`${firstName} is a adult`);
// }


//uygulama - 20.04.2017 tarihinde trafiğe çıkan bir aracın servis bakım süreleri verilmiştir 
//bu bilgilere göre servis uyarısı verisiz
/* 1.bakım: 1 yıl
   2.bakım: 2 yıl
   3.bakım: 3 yıl */

// var trafigeCikis = new Date('04/20/2020');
// trafigeCikis.setHours(0, 0, 0, 0);
// var trafitketiMs = Date.now() - trafigeCikis.getTime();
// var trafiktekiGun = Math.floor(trafitketiMs / (1000 * 60 * 60 * 24));
// if (trafiktekiGun <= 365) {
//         console.log('1.servis bakım süreniz geldi');
// } else if (trafiktekiGun > 365 && trafiktekiGun <= 365 * 2) {
//         console.log('2.bakım süreniz geldi')
// } else if (trafiktekiGun > 365 * 2 && trafiktekiGun <= 365 * 3) {
//         console.log('3.bakım süreniz gelmiştir')
// } else {
//         console.log('bilinmeyen bir süre');
// }

// console.log(trafiktekiGun);

// var result = prompt ("who'there ?");


// if(result=='cancel'){
//         console.log('cancelled');
// }else if(result=='Admin'){
//         console.log('welcome admin');

//         var password =prompt('enter your password');
//         if(password=='cancel'){
//                 console.log('cancelled');
//         }else if (password=='1234'){
//                 console.log('welcome Admin');
//         }else{
//                 console.log('wrong password');
//         }
// }else {
//         console.log('I dont know you mate!');
// }

// Object Literals

// let val ;

// let person ={
//         firstName :'Umut',
//         lastName :'Bozbek',
//         age : 24,
//         hobbies : ['game','music'],
//         address:{
//                 city :'Mersin',
//                 country:'Turkey'
//         },
//         getBirthYear :  function(){
//                 return 2021- this.age;
//         }
        
// };

// val=person;
// val = person.firstName;
// val = person.lastName;
// val = person ['firstName'];
// val = person.age;
// val=person.hobbies[1];
// val=person.hobbies.length;
// val = person.address;
// val=person.address.city;
// val=person.getBirthYear();


// console.log(val);
// console.log(typeof person);


// let people =     [
//         {firstName: 'umut',lastName :'bozbek'},
//         {firstName: 'ergün',lastName :'bozbek'},
//         {firstName: 'random',lastName :'bozbek'},
//                 ]

// val=people[2];
// val=people[2].firstName;

// for(let i=0;i<people.length;i++){
//  console.log(people[i].firstName)

// };

// console.log(val);
// console.log(typeof people);

/* 
   Aşağıdaki object literal yapısını kullanarak en az 5 araç bilgisini tutunuz.
   
   Araç Bilgileri:

      id : bmw116d_1234
      model : 116d
      yil : 2015
      renk : white
      servis kayitlari : 
            id : bmw116d_1234_1 tarih : 30.01.2016 km : 13000 toplam ücret : 900
               servis detayı:
               id : 1 işlem : yağ değişimi ücret : 300
               id : 2 işlem : filtre değişimi ücret: 300
               id : 3 işlem : fren hidroliği ücret: 300
            
            id : bmw116d_1234_2 tarih : 10.01.2017 km : 28000 toplam ücret : 1800
               id : 1 işlem : yağ değişimi ücret : 350
               id : 2 işlem : filtre değişimi : 350
               id : 3 işlem : fren hidroliği : 300
               id : 3 işlem : balata değişimi : 800 

*/


var aracBilgileri =[
        {

                id : 'bmv116d_123',
                model : ' bmv 116d',
                yil : 1015,
                renk : 'beyaz',
                servisKayitlari : [
                {
                        id :'bmv116d_123_1',
                        tarih: '20.01.2016',
                        km :'1300',
                        ucret :900,
                        detay :[      
                                {id :'bmv_116d_1_1',aciklama :' yağ değişimi ücret',ucret : 300},
                                {id :'bmv_116d_1_2',aciklama :' filtre değişimi ücret',ucret : 300},
                                {id :'bmv_116d_1_3', aciklama :'fren hidroliği ücret',ucret : 300 }                                          
                        
                 ]
                },  
                {
                        id :'bmv116d_123_2',
                        tarih: '10.01.2017',
                        km :'2800',
                        ucret :1800,
                        detay :[
                        {id :'bmv_116d_2_1',aciklama :' yağ değişimi ücret',ucret : 350},
                        {id :'bmv_116d_2_2',aciklama :' filtre değişimi ücret',ucret : 350},
                        {id :'bmv_116d_2_3',aciklama : 'fren hidroliği ücret',ucret : 300},
                        {id :'bmv_116d_2_4',aciklama :'balata değişimi',ucret : 800}
                        ]
                },  
          
         ]
        },
        {

                id : 'bmv320d_123',
                model : ' bmv 320d',
                yil : 1015,
                renk : 'beyaz',
                servisKayitlari : [
                {
                        id :'bmv320d_123_1',
                        tarih: '20.01.2016',
                        km :'1300',
                        ucret :900,
                        detay :[      
                                {id :'bmv320d_1_1',aciklama :' yağ değişimi ücret',ucret : 300},
                                {id :'bmv320d_1_2',aciklama :' filtre değişimi ücret',ucret : 300},
                                {id :'bmv320d_1_3', aciklama :'fren hidroliği ücret',ucret : 300 }                                          
                        
                 ]
                },  
                {
                        id :'bmv320d_123_2',
                        tarih: '10.01.2017',
                        km :'2800',
                        ucret :1800,
                        detay :[
                        {id :'bmv320d_2_1',aciklama :' yağ değişimi ücret',ucret : 350},
                        {id :'bmv320d_2_2',aciklama :' filtre değişimi ücret',ucret : 350},
                        {id :'bmv320d_2_3',aciklama : 'fren hidroliği ücret',ucret : 300},
                        {id :'bmv320d_2_4',aciklama :'balata değişimi',ucret : 800}
                        ]
                },  
          
         ]
        },
        {

                id : 'bmv116d_123',
                model : ' bmv 116d',
                yil : 1015,
                renk : 'beyaz',
                servisKayitlari : [
                {
                        id :'bmv116d_123_1',
                        tarih: '20.01.2016',
                        km :'1300',
                        ucret :900,
                        detay :[      
                                {id :'bmv_116d_1_1',aciklama :' yağ değişimi ücret',ucret : 300},
                                {id :'bmv_116d_1_2',aciklama :' filtre değişimi ücret',ucret : 300},
                                {id :'bmv_116d_1_3', aciklama :'fren hidroliği ücret',ucret : 300 }                                          
                        
                 ]
                },  
                {
                        id :'bmv116d_123_2',
                        tarih: '10.01.2017',
                        km :'2800',
                        ucret :1800,
                        detay :[
                        {id :'bmv_116d_2_1',aciklama :' yağ değişimi ücret',ucret : 350},
                        {id :'bmv_116d_2_2',aciklama :' filtre değişimi ücret',ucret : 350},
                        {id :'bmv_116d_2_3',aciklama : 'fren hidroliği ücret',ucret : 300},
                        {id :'bmv_116d_2_4',aciklama :'balata değişimi',ucret : 800}
                        ]
                },  
          
         ]
        }


]

console.log(aracBilgileri[0]);
console.log(aracBilgileri[0].id);
console.log(aracBilgileri[0].model);
console.log(aracBilgileri[0].renk);
console.log(aracBilgileri[0].servisKayitlari);


// console.log(aracBilgileri[1]);
// console.log(aracBilgileri[2]);


