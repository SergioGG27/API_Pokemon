let api_pokemon_nombreUrl = 'https://pokeapi.co/api/v2/pokemon/'
let consumoApi = fetch(api_pokemon_nombreUrl)
consumoApi.then(nomAndUrl => nomAndUrl.json())
        .then((nombre_url) => {
            for (const nomPersonaje of nombre_url.results) {
                let consumoApi2 = fetch(nombre_url.url)
                consumoApi2.then(abilidadesAndImg => abilidadesAndImg.json)
                .then((abilidadImg) => {
                    for (const cualidadImg of abilidadImg.abilities) {
                        
                        for (const cualidadImg of abilidadImg.forms){

                        }
                    }
                }
                )
            }
        })