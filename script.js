const myFunc = () => {
    //fetch('https://still-thicket-63557.herokuapp.com/data', { //restful endpoint
    //fetch('https://still-thicket-63557.herokuapp.com/fruits/type')
    fetch('http://localhost:3008/fruits/type')
    .then(response => response.json())
  //.then(json => console.log(json))
  //  .then(json => document.getElementById("apples").innerHTML = `there are ${json[0].name} ${json[0].type}`)
   .then(json => document.getElementById("fruits").innerHTML = `there are ${json[0].type} ${json[0].name}`)

}

// 
//        let elt = document.getElementById()
//  const mouseFunc= () => {
//        elt.addEventListener('click',(event) => console.log("You have clicked the mouse"))   
//  }
const otherFunc = () => {


  fetch('http://localhost:3008/data')
    .then(r => r.json())
    .then(data => console.log(data))

}
 const postFunc = () => {

  // this input maps to the value of my input tag 
  let input = document.getElementById("input").value
  // this creates a new object with the name value being my input 
  let newApple = { name: `${input}` }
  console.log(newApple)
  fetch('http://localhost:3008', {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    //this actually sends new apple object to the backend
    body: JSON.stringify(newApple),
  })
    // .then((response) => response.json())
    //this takes a response from the server and logs it 
    .then(response => console.log(response))
}