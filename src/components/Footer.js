import React from "react";

function Footer(){
    return(
        <footer className="border-top footer text-muted bg-white">
            <div class="container">
                &copy; 2021 - Agência de Viagens LJ LTDA. - <a asp-area="" asp-controller="Home" asp-action="Contato">Contato</a>
            </div>
        </footer>
    );
}


export default Footer;