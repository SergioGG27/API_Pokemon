function consumo_pokemon_api(api_pokemon_nombreUrl){
    
    //let api_pokemon_nombreUrl = 'https://pokeapi.co/api/v2/pokemon/'
    let consumoApi = fetch(api_pokemon_nombreUrl)
    consumoApi.then(nomAndUrl => nomAndUrl.json())
        .then((nombre_url) => {
            for (const nomPersonaje of nombre_url.results) {
                let consumoApi2 = fetch(nomPersonaje.url)
                consumoApi2.then(abilidadesAndImg => abilidadesAndImg.json())
                    .then((abilidadImg) => {
                        let vida = abilidadImg.stats[0].base_stat
                        let ataque = abilidadImg.stats[1].base_stat
                        let defensa = abilidadImg.stats[2].base_stat
                        let estadistica_hp = abilidadImg.stats[0].stat.name
                        let estadistica_ataque = abilidadImg.stats[1].stat.name
                        let estadistica_defensa = abilidadImg.stats[2].stat.name
                        let cualidad = ''
                        for (const cualidadImg1 of abilidadImg.abilities) {
                            cualidad += cualidadImg1.ability.name
                        }
                        
                        document.querySelector('#cartas-personajes').innerHTML += `
                    <div class="col" >
                    <div class="card">
                        <img src="${abilidadImg.sprites.other.dream_world.front_default}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${abilidadImg.name}</h5>
                            <div class="row">
                                <div class= "col-3">
                                    <label>${estadistica_hp}</label>
                                </div>
                                <div class="col-9">
                                    <div class="progress">
                                        <div class="progress-bar" role="progressbar"        aria-label="Success example" style="width: ${vida}%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">${vida}%
                                        </div>
                                    </div>    
                                </div>
                            </div>
                            <div class="row">
                            <div class= "col-3">
                                <label>${estadistica_ataque}</label>
                            </div>
                            <div class="col-9">
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar"        aria-label="Example with label" style="width: ${ataque}%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">${ataque}%
                                    </div>
                                </div>    
                            </div>
                        </div>
                        <div class="row">
                        <div class= "col-3">
                            <label>${estadistica_defensa}</label>
                        </div>
                        <div class="col-9">
                            <div class="progress">
                                <div class="progress-bar" role="progressbar"        aria-label="Example with label" style="width: ${defensa}%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">${defensa}%
                                </div>
                            </div>    
                        </div>
                    </div>
                            <p class="card-text"> Cualidad: ${cualidad}</p>
                        </div>
                    </div>
                </div>
    
                    `
    
                    }
                    )
            }
            crear_botones_api(nombre_url.next, nombre_url.previous)
        })
}

function crear_botones_api(url_pagina_siguiente, url_pagina_anterior){
    let div_paginacion = document.querySelector('#paginacion')
    div_paginacion.innerHTML = ''
    // boton página anterior
    let btn_anterior = document.createElement('button')
    btn_anterior.setAttribute('onclick', `consumo_pokemon_api('${url_pagina_anterior}')`)
    btn_anterior.classList.add('btn', 'btn-dark')
    btn_anterior.innerText = 'Pagina anterior'
    div_paginacion.appendChild(btn_anterior)

    // boton página siguiente
    let btn_siguiente = document.createElement('button')
    btn_siguiente.setAttribute('onclick', `consumo_pokemon_api('${url_pagina_siguiente}')`)
    btn_siguiente.classList.add('btn', 'btn-dark')
    btn_siguiente.innerText = 'Pagina siguiente'
    div_paginacion.appendChild(btn_siguiente)

}

consumo_pokemon_api('https://pokeapi.co/api/v2/pokemon/')



