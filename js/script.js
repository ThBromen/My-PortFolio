// let toggleButton = document.getElementById('button')


// let navBarLinks = document.getElementById('links')


// toggleButton.addEventListener("click",()=>{
//      navBarLinks.classList.toggle('active')
// })

// function myFunction() {
//   // Get the value of the input field with id="numb"
//   let x = document.getElementById("numb").value;
//   // If x is Not a Number or less than one or greater than 10
//   let text;
//   if (isNaN(x) || x < 1 || x > 10) {
//     text = "Input not valid";
//   } else {
//     text = "Input OK";
//   }
//   document.getElementById("demo").innerHTML = text;
// }
// mailto:hashimwimanatheogene34@gmail.com

const name = documen.getElementById('name')
const email = documen.getElementById('email');
const subject = documen.getElementById('subjct');
const msg = documen.getElementById('message');
const foam = documen.getElementById("foam");
const errorElement = document.getElementById('error')

foam.addEventListener('submit',(e)=>{
let messages =[]
if (name.value === ''|| name.value == null){
  messages.push('name is required')
}
if(messages.length > 0){
e.preventDefault()
errorElement.innerText=messages.join(',')
}
})