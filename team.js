console.log('Hello world')

let btn = document.getElementById('btn')
btn.addEventListener('click',function () {
    let select = document.getElementById('type');
    let array = []
    array.push(String(select.value))
    let save = localStorage.setItem('text',JSON.stringify(array))
    // JSON.parse(localStorage.getItem('text'))
})