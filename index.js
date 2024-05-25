// const input = document.getElementById('input')
// const toList = document.getElementById("toList")
// document.getElementById("button-addon2").addEventListener("click", function () {

//  if (input.value === ''){
//     alert('please add an input')
//  } else {
//    // (input.value === "list")
//  const list = document.createElement('li')
//  list.textContent = input.value;
//  //list.classList.add()
//  toList.appendChild(list)
 
//  }
//  input.value =""

// })

// toList.addEventListener("click" , function (e) {
//     e.target.remove()
//  })
const input = document.getElementById('input')
const toList = document.getElementById("toList")
document.getElementById('button-addon2').addEventListener("click", function() {
    

if (input.value === ''){
    alert('please add an input')
}else {

    const list = document.createElement('li')
    list.textContent = input.value;
    list.classList.add()
    toList.appendChild(list)
   list.classList.add()
   save()
    //input.value = ''
 }
 input.value = ''
// const list = document.createElement('li')
//  list.textContent = input.value;
//  //list.classList.add()
//  toList.appendChild(list)
//input.value = ''
})

toList.addEventListener("click" , function (e) {
        e.target.style.textDecoration = "linethrough"
        save()
    })
   
    //class="list-group-numbered"

 input.addEventListener('keydown', function(e) {
   if( e.key === 'Enter' && input.value!== ""){
    const list = document.createElement('li')
    list.textContent = input.value;
    toList.appendChild(list)
   list.classList.add()
   input.value = '' 
   save()
}
//input.value = '' 
 })   

 function save() {
localStorage.setItem("data", toList.innerHTML )
 }

function read() {
  toList.innerHTML = localStorage.getItem("data")
}

 read()


// example 
//  function save1() {
//     localStorage.item("data",toList.innerhtml)
//  }

//  function read3() {
//     toList.innerhtml = localStorage.getItem("data")
//  }