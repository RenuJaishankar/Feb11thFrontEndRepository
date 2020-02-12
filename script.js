const myFunc = () => {
    //fetch('https://still-thicket-63557.herokuapp.com/data', { //restful endpoint
    fetch('https://still-thicket-63557.herokuapp.com/fruits/type')
    .then(response => response.json())
  //.then(json => console.log(json))
   // .then(json => document.getElementById("apples").innerHTML = `there are ${json.amount} ${json.name}`)
    .then(json => document.getElementById("fruits").innerHTML = `there are ${json.type} ${json.name}`)

}

 const myNewFunc = () => {
  fetch('https://still-thicket-63557.herokuapp.com/hi')
   .then(response => response.json())
 .then(json => document.getElementById().innerHTML = `says hi`)
   }