/*let create = document.createElement('h1');
create.id='head';
create.className='cool'
create.innerHTML='<a href="https://codewithharry.com">Go to Codewithharry</a>';
let link = document.querySelector('#container')
link.appendChild(create)
let li = document.getElementById('container');
// li.replaceChild(create, document.getElementById('blue'))
console.log(create);
 let element = document.getElementById('blue');
let key = element.id
console.log(key)*/


// div element created
let createElement = document.createElement('div');
createElement.setAttribute('contenteditable','true');
createElement.id='head';


// Firstly inserted
let text = document.querySelector('#main');
let insert = text.appendChild(createElement);
let get =  document.getElementById('head');
let val = localStorage.getItem('text');
let check;

// getting same item by refressing
if (val==null) {
   
   check = document.createTextNode('click here to edit')
} 
else {
   check = document.createTextNode(val)
}
let first = get.appendChild(check)
//  let check =
//  get.innerHTML= createElement.value;
// let set= get.innerText='Edit this';

// after that saving into localstorage
console.log(val)
get.addEventListener('blur', function() {
   // let read
   let element = get.innerText;
   let piece = localStorage.setItem('text',element) 
})

// else
// else if (set>0) {
   
//     get.innerHTML=
// }
// {
   
// }
// let set = get;
   //  =set;


/*get.addEventListener('blur',function() {
   let element = localStorage.setItem('edited',set)
   // console.log(text.innerText)
})*/