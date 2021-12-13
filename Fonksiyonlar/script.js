        //Functions


    //     function yasHesapla(dogumYılı){
    //         return 2021-dogumYılı;
    //     }

    //   let ageUmut =  yasHesapla(1997);
    //   let ageSeda =  yasHesapla(1995);
    //   let ageMert =  yasHesapla(2004);

    //   console.log(ageUmut);
    //   console.log(ageSeda);
    //   console.log(ageMert);

    //   function EmeklikikKaçYılKaldı (dogumYili,isim){
    //     let yas =yasHesapla(dogumYili);
    //     let emeklilik =65-yas;

    //     if(emeklilik>0){
    //         console.log(`${isim}Emekli olmana ${emeklilik}`);
    //     }else{
    //         console.log('Zaten emekli oldunuz');
    //     }
    //   }

    //   EmeklikikKaçYılKaldı(1997,'Umut');
    //   EmeklikikKaçYılKaldı(1995,'Seda');
    //   EmeklikikKaçYılKaldı(1950,'Mert');

    //--

    //Function Declarations

    // function sum(a,b){
    //     var c =a+b;
    //     return c;
    // }

    // console.log(sum(10,20));


    //Function Expressions

    // const sum = function(a,b){

    //     if(typeof a ==='undefined'){
    //         a=0;
    //     }
    //     if(typeof b==='undefined'){
    //         b=0;
    //     }
    //     var c =a+b ;
    //     return c;
    // }
    
        //ES6 Default Parameters
    // const sum = function(a=0,b=0){

    //     var c =a+b ;
    //     return c;
    // }
     
    // function sumAll(){
    //     var total = 0 ;
    //     for(let i=0;i<arguments.length;i++){
    //     total+=arguments[i];
    // }
    // return total;
    // }


    // console.log(sum(10,30));
    // console.log(sum(10,)); 
    // console.log(sum(10,30,40,50));
    // console.log(sumAll(10,20,30,70));

    //Uygulama Fonksiyon 


// var hesapA = {
//     ad : 'umut bozbek',
//     hesapNo : '12345678',
//     bakiye : 2000,
//     ekHesap : 1000
// }

// var hesapB= {
//     ad : 'seda bozbek',
//     hesapNo : '12356479',
//     bakiye : 3000,
//     ekHesap : 2000
// }


// function paraCek(hesap,miktar){
//     console.log(`Merhaba ${hesap.ad}`);

//     if(hesap.bakiye >= miktar){
//         hesap.bakiye = hesap.bakiye - miktar;
//         console.log('paranızı alabilirsiniz');
//     }else {
//         var toplam = hesap.bakiye + hesap.ekHesap;

//         if(toplam>=miktar){
//             if(confirm('ek hesabınızı kullanmak istermisiniz')){
//                 console.log('paranızı alabilirsiniz');
//                 var bakiye = hesap.bakiye;
//                 var ekhesap = miktar - bakiye;
//                 hesap.bakiye = 0;
//                 hesap.ekhesap = hesap.ekhesap - ekhesap;
//             }else{
//                 console.log(`${hesap.hesapNo} nolu hesabınızda ${miktar} TL bulunmamaktadır.`);
//             }
//         }else{
//             console.log('üzgünüz bakiye yetersiz');
//         }
//     }

// }

// paraCek(hesapA,3000);
// paraCek(hesapA,1000);
// // paraCek(hesapB,2000);


     //Window Object
        // let val ;
        // var a =10;
        // function abc(){
        //     return 0
        // }
        // val=window;

// -alert 
    // alert('Nerhaba');

// -promopt
       //    var b =prompt('Bir sayı giriniz');
       //    console.log(b);
       
// -Confirm
    //  val =confirm ('emin misiniz?');
    //   if(val){
    //       console.log('ok');
    //   }else {
    //       console.log('no');
    //   }


//-location
        // val=window.location;
        // val=window.location.href;
        // val=window.location.hostname;
       
    //    console.log(val);


                    //Scope 

// **Global Scope
// var name ='umut';
// var age = 25;

// function logName(){
//     var name ='Ergün';
//     var age = '12';
//     console.log('function scope',name,age);
// }

// if(true){
//     var age =30;
//     console.log('block scope',name,age);
// }
// console.log(age);

// logName();
// console.log(name);

//  **Local Scope 
//Fonksiyonlar kendi scope'larını oluşturur.
//**Blok'lar yeni scope oluşturmaz.
//ES6  ile gelen let ve const block scope oluşturur
// console.log('*******************************');

// if(true){
//     var model ='Opel';
//     let year =2016;
//     const color = "white";
//     console.log('block scope',model,year,color);
// }

// console.log(model);
//console.log(color); // dışarıdan ulaşılamaz (let)

// var a =1 ;

// for(let i=0;i<10;i++){

//     console.log('i',i);
// }

//  console.log(i);