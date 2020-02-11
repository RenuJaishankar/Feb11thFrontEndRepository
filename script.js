const myFunc = () => {
    fetch('https://still-thicket-63557.herokuapp.com/data', { //restful endpoint
      
    })
    .then(response => response.json())
  //.then(json => console.log(json))
    .then(json => document.getElementById("apples").innerHTML = `there are ${json.amount} ${json.name}`)
}