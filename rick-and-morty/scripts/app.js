const inputName = document.getElementById("input-name")
const characterName = document.getElementById("character-name")
const characterImage = document.getElementById("character-image")
const characterSpecies = document.getElementById("character-species")
const findBtn = document.getElementById("find-btn")

findBtn.addEventListener('click',async () => {
  try{
    const urls = `https://rickandmortyapi.com/api/character?name=${inputName.value}`
    const { response} = await(await fetch(urls)).json()
    
    if(!response.results){
        throw{ message: '${inputName.value} not found'}
    }

    const {results} = response
    if(!results.length){
        throw{ message: '${inputName.value} not found'}
    }
    const character = results[0]
    console.log({character})

    characterName.innerHTML = character.name    
    characterImage.src = character.image
    characterSpecies.innerHTML = character.species
  } catch(error){
    window.alert(`[ERROR] => ${error.message}`)
  } finally{
    inputName.value = ''
  }
})