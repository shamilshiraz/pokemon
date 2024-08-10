// fetch()-used for making http requests to fetch resources
// used to interact with apis to retreive and send data asynchronously over the web.
// fetch(url, {options})

// fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
// .then(response => {
//     if(!response.ok){
//         throw new Error("Could not fetch resources")
//     }
//     return response.json()
// })
// .then(data => console.log(data))
// .catch(error => console.error(error))

fetchdata()

async function fetchdata(){
    try{
        const pokemonName=document.getElementById("pokemonName").value.toLowerCase()
        const response=await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)

        if(!response.ok){
            throw new Error("could not fetch resources")
        }
        const data=await response.json();
        const pokemonSprite=data.sprites.front_default;
        const imgelement= document.getElementById("pokemonSprite");

        imgelement.src=pokemonSprite;
        imgelement.style.display="block"

        console.log(data)


    }

    catch(error){
        console.error(error)
    }
}
 
