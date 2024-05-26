document.addEventListener("DOMContentLoaded", function() {

    const toList = document.getElementById("toList")
    const form = document.querySelector("form");
    form.addEventListener("submit", function (e){
        if ( e.target.input.value ===""){
        console.log("Please enter a valid");
        }
    
    //     else{
    // const list = document.createElement("li")
    //    list.textContent= input.value
    //    list.classList.add("list-group-item")
    //    toList.appendChild(list)
    //     save()
    //     }

    // function save() {
    //         localStorage.setItem("data",toList.innerHTML)
    //     }
    // function read(){
    //         toList.innerHTML = localStorage.getItem("data")
    //     }
    //     read()
     })

})

// document.addEventListener('DOMContentLoaded' , function () {
    

// const form =  document.querySelector('form')
// const toList = document.getElementById("toList")
// form.addEventListener("submit" , function(e) {
//    if (e.target.input.value ==="") {
//     alert('enter a value')
//    } else {

//     const list = document.createElement('li')
//     list.textContent = input.value;
//     list.classList.add()
//     toList.appendChild(list)
//    list.classList.add()

//     //input.value = ''
//  }
// })
    

// })


// document.addEventListener('DOMContentLoaded', function() {

//     const form = document.querySelector('form');
//     const toList = document.getElementById("toList");
  
//     form.addEventListener("submit", function(event) {
//       event.preventDefault(); // Prevent default form submission
  
//       const inputValue = event.target.elements[0].value; // Access input value
  
//       if (inputValue === "") {
//         alert('Please enter a value!');
//       } else {
//         const listItem = document.createElement('li');
//         listItem.textContent = inputValue;
//         listItem.classList.add('list-item'); // Add a class (assuming CSS)
  
//         toList.appendChild(listItem);
  
//         // Optionally clear input after successful submission
//         form.reset(); // Resets all form elements (including input)
//       }
//     });
   

let array = ["abdi", "ali", "khalid"]
array("kali")