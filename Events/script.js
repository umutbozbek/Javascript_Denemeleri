// Event Listeners

// const btn=document.querySelector('#btnDeleteAll');
// const btn2=document.querySelector('#btnAddNewTask');
// btn.addEventListener('click',function(e){
//     // console.log('btn clicked');

//     let val ;

//     val=e;
//     val=e.target;
//     val = e.target.id;
//     val=e.type;


//     console.log(val);
//     e.preventDefault();
// });

// btn.addEventListener('click',btnClick);
// btn.addEventListener('click',btnClick2);
// btn2.addEventListener('click',btnClick);

// function btnClick(){
// console.log('btn clicked');

// }

// function btnClick2(){
//     console.log('btn 2 clicked');
    
//     }



//Mause Events
// const btn=document.querySelector('#btnDeleteAll');
// const ul=document.querySelector('#task-list');

//click
// btn.addEventListener('click',eventHandler);
// ul.addEventListener('click',eventHandler);

//Double Click
// btn.addEventListener('dblclick',eventHandler);


//mause down

// btn.addEventListener('mousedown',eventHandler);
// btn.addEventListener('mouseup',eventHandler);

// function eventHandler(event){
//     console.log(`event type : ${event.type}`);
// }


//Keyboard Events

// const input=document.querySelector('#txtTaskName');
// const form =document.querySelector('form');

// input.addEventListener('keydown',eventHandler);
// input.addEventListener('keyup',eventHandler);
// input.addEventListener('keypress',eventHandler);
// input.addEventListener('focus',eventHandler);
// input.addEventListener('blur',eventHandler);
// input.addEventListener('cut',eventHandler);
// input.addEventListener('select',eventHandler);

// form.addEventListener('submit',eventHandler);

// function eventHandler(e){

    // console.log(`event type `+ e.type);
    // console.log('key code :' +e.keyCode);
    //console.log('value :'+e.target.value);

    //  e.target.style.backgroundColor='yellow';
    
//     e.preventDefault();
// }


//Event Bubbling

const form=document.querySelector('form');

const cardBody=document.querySelector('.card-body');

const card =document.querySelector('.card');

const container =document.querySelector('.container');

// form.addEventListener('click',function(e) {
//  console.log('form');
//  e.stopPropagation();
// });

// cardBody.addEventListener('click',function(e) {
//     console.log('card Body');
//     e.stopPropagation();
//    });

//    card.addEventListener('click',function(e) {
//     console.log('card');
//     e.stopPropagation();
//    });

//    container.addEventListener('click',function(e) {
//     console.log('container');
//     e.stopPropagation();
//    });


// Event Capturing

// form.addEventListener('click',function(e) {
//     console.log('form');
//     e.stopPropagation();
//    },true);
   
//    cardBody.addEventListener('click',function(e) {
//        console.log('card Body');
//        e.stopPropagation();
//       },true);
   
//       card.addEventListener('click',function(e) {
//        console.log('card');
//        e.stopPropagation();
      
//       },true);
   
//       container.addEventListener('click',function(e) {
//        console.log('container');
//        e.stopPropagation(); // mantıksız
//       },true);



// const deleteItems =document.querySelectorAll('.fa-times');

// deleteItems.forEach(function(item){
// item.addEventListener('click',function(e){
//     console.log(e.target);
// })

// });


// const ul =document.querySelector('ul');

// ul.addEventListener('click',function(e){

// if(e.target.className==='fas fa-times'){
//    e.target.parentElement.parentElement.remove();

//     e.preventDefault();
// }

// });