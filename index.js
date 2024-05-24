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
    toList.appendChild(list)
    // list.classList.add()
    input.value = ''
 }
// const list = document.createElement('li')
//  list.textContent = input.value;
//  //list.classList.add()
//  toList.appendChild(list)
//  input.value = ''
})

toList.addEventListener("click" , function (e) {
        e.target.remove()
    })