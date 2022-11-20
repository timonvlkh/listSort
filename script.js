const input = document.querySelector('#input')
const btn = document.querySelector('#btn')
const list = document.querySelector('#list')
const icon = document.querySelector('#icon')
const icon2 = document.querySelector('#icon2')
const userForm = document.querySelector('.container')

let arr = []
let numbers = []
let strings = []

function addToList(){
    if(input.value != '' && !strings.includes(input.value) && !numbers.includes(+input.value)){
        list.style = 'display: block;'
        if(isNaN(input.value)){
            strings.push(input.value)
        }
        else{
            numbers.push(+input.value)
        }
        list.innerHTML += `<p class="list-item">${input.value}<iconify-icon class="close-btn" icon="mdi:close-circle-outline"></iconify-icon></p>`
    }
    let closeBtn = document.querySelectorAll('.close-btn')
    closeBtn.forEach(close)
    input.value = ''
    console.log(arr)
    console.log(closeBtn)
}

function close(item){
    item.addEventListener('click', (event) => {
        let removedItem = event.target.closest('p').innerText
        if(isNaN(removedItem)){
            let indexOfRemovedItem = strings.indexOf(removedItem)
            strings.splice(indexOfRemovedItem, 1)
            console.log(strings)
        }
        else{
            removedItem = +removedItem
            let indexOfRemovedItem = numbers.indexOf(removedItem)
            console.log(indexOfRemovedItem)
            numbers.splice(indexOfRemovedItem, 1)
        }
        arr = numbers.concat(strings)
        list.innerHTML = ''
        arr.forEach((item) => {
            list.innerHTML += `<p class="list-item">${item}<iconify-icon class="close-btn" icon="mdi:close-circle-outline"></iconify-icon></p>`
        })
        closeBtn = document.querySelectorAll('.close-btn')
        closeBtn.forEach(close)
        console.log(closeBtn)
        if(arr.length == 0) list.style = 'display: none;'
    })
}

function sortToUp(event){
    numbers.sort((a,b) => a - b)
    strings.sort()
    arr = numbers.concat(strings)
    list.innerHTML = ''
    arr.forEach((item) => {
        list.innerHTML += `<p class="list-item">${item}<iconify-icon class="close-btn" icon="mdi:close-circle-outline"></iconify-icon></p>`
    })
    event.target.style = 'display: none;'
    icon2.style = 'display: block;'
    closeBtn = document.querySelectorAll('.close-btn')
    closeBtn.forEach(close)
}

function sortToDown(event){
    numbers.sort((a,b) => b - a)
    strings.sort().reverse()
    arr = numbers.concat(strings)
    list.innerHTML = ''
    arr.forEach((item) => {
        list.innerHTML += `<p class="list-item">${item}<iconify-icon class="close-btn" icon="mdi:close-circle-outline"></iconify-icon></p>`
    })
    event.target.style = 'display: none;'
    icon.style = 'display: block;'
    closeBtn = document.querySelectorAll('.close-btn')
    closeBtn.forEach(close)
}

function removeListItem(event){
    console.log(12)
}

userForm.addEventListener('submit', (event) => {
    event.preventDefault();
});

btn.addEventListener('click', addToList)
userForm.addEventListener('enter', addToList)
icon.addEventListener('click', sortToUp)
icon2.addEventListener('click', sortToDown)