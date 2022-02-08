import React from 'react';

function Header () {
    return(
        <header>
            <nav class="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3">
                <div class="container">
                    <a class="navbar-brand">
                        <img class="tamanho-imagem" src="../img/logo.png"/>
                    </a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="navbar-collapse collapse d-sm-inline-flex justify-content-between">
                        <ul class="navbar-nav justify-content-end flex-grow-1">

                            <li class="nav-item">
                                <a class="nav-link text-dark" href='http://localhost:3000/Home'>Home</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link text-dark" href='http://localhost:3000/Destinos'>Destinos</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link text-dark" href='http://localhost:3000/Promocoes'>Promoções</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link text-dark" href='http://localhost:3000/Contato'>Contato</a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;


