console.log('This is For testing purpose');
myfun();

let button = document.getElementById("btn")
button.addEventListener("click", (e) => {
     let txtara = document.getElementById('text');
     let get = localStorage.getItem('note');
     // let txtara;
     if (get == null) {
          texts = [];
     } else {
          texts = JSON.parse(get)
     }
     texts.push(" " + txtara.value)
     localStorage.setItem('note', JSON.stringify(texts));
     txtara.value = "";
     myfun();
     // constxtara)
})

function myfun() {
     let get = localStorage.getItem('note');
     if (get == null) {
          texts = []
     }
     else {
          texts = JSON.parse(get);
     }
     // console.log(typeof get)
     let html = '';
     let k = 1;
     for (let j = 0; j < texts.length; j++,k++) {
          const element = texts[j]
          html += ` <div class="show-notes">
      <h3>Notes${k}</h3>
       <p id="para">${element}</p>
          <button id=${j} onclick="deletenote(this.id)">DELETE</button>
  </div> `
};
  let flex = document.getElementById('flex');
  if (texts.length != 0) {
       flex.innerHTML = html;
  }
  else{
       flex.innerHTML = `<h1 style="color: red; margin-left: 338px;">There is no notes :)</h1>`
  }
}

function deletenote(j) {
     console.log('This is deleting',j);
     let get = localStorage.getItem('note');
     if (get == null) {
          texts = []
     }
     else {
          texts = JSON.parse(get);
     }
     texts.splice(j,1)
     localStorage.setItem('note', JSON.stringify(texts));
     myfun()
}

let search = document.getElementById('search');
search.addEventListener('input',()=>{

     let shownotes = document.getElementsByClassName('show-notes')
     let searchval = search.value;
     console.log(searchval)
     Array.from(shownotes).forEach(function(element) {
          let text = element.getElementsByTagName('p')[0].innerText;
          if(text.includes(searchval)){
               element.style.display = 'block'
          }
          else{
               element.style.display = 'none'
          }
     })
})