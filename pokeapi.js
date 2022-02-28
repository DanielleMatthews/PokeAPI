var pokeName = document.getElementById("pokeName")
var pokeType = document.getElementById("pokeType")
var pokeNum = document.getElementById("pokeNum")
var pokeW = document.getElementById("pokeWeight")
var pokeH = document.getElementById("pokeHeight")
var pokeA1 =  document.getElementById("pokeAbilities1")
var pokeA2 = document.getElementById("pokeAbilities2")
var pokeImg = document.getElementById("pokeImg")
var input = document.getElementById("input")
var pokeF = document.getElementById("pokeF")
var pokeB = document.getElementById("pokeB")

function pokeInfo(){
    fetch('https://pokeapi.co/api/v2/pokemon/'+input.value)
    .then((res)=>{
        return res.json()
    })
    .then((data)=>{
        pokeName.textContent ="Name: " +      data.name
        pokeType.textContent = "Type: " + data.types[0].type.name 
        pokeNum.textContent = "Number: " + data.id
        pokeW.textContent = "Weight: " + data.weight
        pokeH.textContent = "Height: " + data.height
  
    if(data.abilities.length > 1){ 
        pokeA1.textContent = ("Ability 1: " + data.abilities[0].ability.name)
        pokeA2.textContent = ("Ability 2: " +  data.abilities[1].ability.name)
    }
    else{
        pokeA1.textContent = ("Ability 1: " +    data.abilities[0].ablility.name)
        pokeA2.textContent = ("Ability 2: none")
    }
  pokeF.setAttribute('src', `${data.sprites.front_default}`)
  pokeB.setAttribute('src', `${data.sprites.back_default}`)
    })
    .catch(()=>{
        alert("Please enter valid name or number!!!")
    })
}
search.addEventListener("click", pokeInfo)