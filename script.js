var apikey = {
    key: '10624f92-c77d-4fac-96e1-268459c8506d'
}

fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY='+apikey.key)
    .then((reponse) =>{
        if(!reponse.ok) throw new Error('Erro ao executar a requisição, status ' + reponse.status);
        return reponse.json();
    }).then((api) => {
        var text = "";

        for(let i = 0; i< 10; i++){
            text += `
            <div class="media">
                <img src="coin.jpg" class="align-self-center mr-3" alt="coin" width="100" height="60">
                <div class="media-body">
                    <h5 class="mt-2">${api.data[i].name}</h5>
                    <p>${api.data[i].symbol}</p>
                    <p>${api.data[i].first_historical_data}</p>
                </div>
        
            </div>` ;

            document.getElementById("coins").innerHTML = text;
        }



    }).catch((error) =>{
        console.error(error.message);
    });


