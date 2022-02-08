import React from 'react';

function Promocoes () {
    return(
        <section class="text-center mb-5">
            <h1 class="display-4">Promoções na área!</h1>
            <br/>
            <div class="card mb-3">
                <img class="card-img-top" src="/img/natal.jpg" alt="Card image cap"></img>
                <div class="card-body">
                    <h5 class="card-title">Promoção de natal!</h5>
                    <p class="card-text">Agora fazer as compras de final de ano na AgênciaLJ, terá muito mais vantagens. A nossa Promoção de Natal para quem comprar a partir de 2 passagens dará direito a um sorteio de um bônus em viagens de até R$ 30 mil na AgênciaLJ.</p>
                </div>
            </div>
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">BlackFriday!</h5>
                    <p class="card-text">Confira na aba Destinos os nossos preços já com desconto de -R$ 50,00 aplicado!</p>
                </div>
                <img class="card-img-bottom" src="/img/black.jpg" alt="Card image cap"/>
            </div>
        </section>
    );
}

export default Promocoes;