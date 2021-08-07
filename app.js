fetch('https://rickandmortyapi.com/api/character')
            .then(response => response.json())
            .then(function (json) {

                var bxs = document.querySelector('.bxs');

                json.results.map((results) => {

                    bxs.innerHTML += `
                    <div class="bx">
                        <img src = `+results.image+`>
                        <p>`+results.name+`</p>
                        <p>specie: `+results.species+`</p>
                    </div>
                `;
                })

            })