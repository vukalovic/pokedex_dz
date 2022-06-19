
const container = document.getElementsByClassName("container")[0]
const errorContainer = document.getElementsByClassName("error-container")[0]
const nameHeader = document.getElementById("name")
const imageContainer = document.getElementById("image")
const descriptionContainer = document.getElementById("description")


const pitanje = {
    pikachu: {
        name: "Pikachu",
        description: "Električni",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png"
    },
    raichu: {
        name: "Raichu",
        description: "Električni",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/026.png"
    },
    squirtle: {
        name: "Squirtle",
        description: "Vodeni",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png"
    },
}




function myFunction(selectedButton) {
    const selectedPokemon = pitanje[selectedButton]

    if (selectedPokemon == undefined) {
        container.classList.add("hidden");
        errorContainer.classList.remove("hidden")

    } else {
        container.classList.remove("hidden");
        errorContainer.classList.add("hidden")
        nameHeader.innerHTML = selectedPokemon.name
        descriptionContainer.innerHTML = selectedPokemon.description
        imageContainer.src = selectedPokemon.image
    }


}

const buttons = document.getElementsByClassName("addbutton")

