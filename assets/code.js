let api_pokemon_nombreUrl = 'https://pokeapi.co/api/v2/pokemon/'
let consumoApi = fetch(api_pokemon_nombreUrl)
consumoApi.then(nomAndUrl => nomAndUrl.json())
        .then((nombre_url) => {
            for (const nomPersonaje of nombre_url.results) {
                let consumoApi2 = fetch(nomPersonaje.url)
                consumoApi2.then(abilidadesAndImg => abilidadesAndImg.json())
                .then((abilidadImg) => {
                    let cualidad = ''
                    for (const cualidadImg1 of abilidadImg.abilities) {                       
                        cualidad += cualidadImg1.ability.name
                        }

                document.querySelector('#cartas-personajes').innerHTML += `
                <div class="col">
                <div class="card">
                    <img src="${abilidadImg.sprites.other.dream_world.front_default}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${abilidadImg.name}</h5>
                        <p class="card-text">${cualidad}</p>
                    </div>
                </div>
            </div>

                `
                    
                }
                )  
            }
        })