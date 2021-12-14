// 1 
// let val ;

// val = window.document;
// val= document.all;
// val=document.all.length;
// val=document.head;
// val= document.anchors;
// val=document.domain;


// console.log(val);


//2_Selecting Elements


//  **Single Elements
//document.getelementBuId()
// let val;

// val=document.getElementById('header');
// val=document.getElementById('header').id;
// val=document.getElementById('header').className;

// val=document.getElementById('header');
// //val.id;
// //val=val.className;

// val.style.fontSize='45px';
// val.style.color='red';
// val.style.fontWeight='bold';


// console.log(val);
// val=document.getElementById('header').innerText='my ToDo App';
// val=document.getElementById('header').innerText='<b> My ToDo App </b>';
// val=document.getElementById('header').innerHTML='<b> My ToDo App </b>';

//document.querySelector()
// console.log (document.querySelector('#header'));
// console.log(document.querySelector('.card-header'));
// console.log(document.querySelector('h1'));
// console.log(document.querySelector('div'));
// console.log(document.querySelector('li').style.color='red'); //ilk elemana
// console.log(document.querySelector('li:last-child').style.color='blue');
// console.log(document.querySelector('li:nth-child(2').style.color='yellow');
// console.log(document.querySelector('li:nth-child(3').textContent='task item');
// document.querySelector('li').classList.add('active');


// **Multiple Elements

//class name'e göre 
//document.gerElementsByClassNane()
// let val ;

// val= document.getElementsByClassName('list-group-item');
// val= document.getElementsByClassName('list-group-item')[0];
// val= document.getElementsByClassName('list-group-item')[2];
// val=val[2];

// val[1].style.color='blue';
// val[1].style.fontSize='25px';
// val[2].textContent='new item';

// for(let i=0;i<val.length;i++){
//     console.log(val[i].style.color='red');
//     console.log(val[i].textContent='new item');
// }


//document.getElementByTagName()

// val=document.getElementsByTagName('li');
// val=document.getElementById('task-list').getElementsByTagName('a');

//document.querySelectorAll()

// val=document.querySelectorAll('li');

// val.forEach(function(item,index){
// item.textContent=`${index} -hello`;
// });

// val=document.querySelectorAll('li:nth-child(even)');

// val.forEach(function(item){
//  item.style.background='#ccc';
// });

// console.log(val);


// 3-Traversting the Doom

// let val ;

// let list=document.querySelector('.list-group'); 
// val=list;

// val=list.childNodes;
// val= list.childNodes[0];
// val= list.childNodes[0].nodeName;
// val= list.childNodes[0].nodeType;
// val= list.childNodes[1].nodeType;

// val=list.children;
// val=list.children[0];
// val=list.children[2];
// val=list.children[2].textContent='new item';
// val=list.children[3].children;

// val=list.firstChild;
// val=list.firstElementChild;
// val=list.lastChild;
// val=list.lastElementChild;

// val=list.childElementCount;

// val=list.parentNode;
// val=list.parentElement;
// val=list.parentElement.parentElement;

// val=list.children[0].nextSibling;
// val=list.children[0].nextElementSibling;

// val=list.children[1].previousSibling;
// val=list.children[1].previousElementSibling;

//console.log(val);

// for(let i=0;i<list.children.length;i++){
//     console.log(list.children[i]);
// }


// 4-Creating Element

//Create element
// const li=document.createElement('li');

//Add class
// li.className='list-group-item list-group-item-secondary';

// li.setAttribute('title','new item');
// li.setAttribute('data-id','5');

//text node

// const text=document.createTextNode('new item');
// li.appendChild(text);

// const a =document.createElement('a');
// a.setAttribute('href','#');
// a.className='delete-item float-right';
// a.innerHTML='<i class="fas fa-times"></i>';
//append a to li
// li.appendChild(a);
//append li to ul
// document.querySelector('#task-list').appendChild(li);

// console.log(li);


// 5-Removing And Changing Nodes
// const taskList =document.querySelector('#task-list');

//***removing element
// taskList.remove();
// taskList.childNodes[7].remove();
// taskList.children[3].remove();

//taskList.removeChild(taskList.children[3]);

// **removing attirbute

//taskList.children[1].removeAttribute('class');

// for (let i =0;i<taskList.children.length;i++){

//     taskList.children[i].removeAttribute('class');
// }

// **Replacing Element

// const cardHeader =document.querySelector('.card-header');

//create element

// const h2=document.createElement('h2');
// h2.setAttribute('class','card-header');
// h2.appendChild(document.createTextNode('My List'));

// const parent =document.querySelector('.card');
// parent.replaceChild(h2,cardHeader);

// console.log(cardHeader);


// ** Calasses 

// let val ;

// link=taskList.children[0].children[0];

// val=link.className;
// val=link.classList;
// val=link.classList[0];

// link.classList.add('new');
// link.classList.remove('new');
// Attirbutes

// val = link.getAttribute('data-id');
// val = link.getAttribute('href');

// val=link.hasAttribute('data-val');



// console.log(val);