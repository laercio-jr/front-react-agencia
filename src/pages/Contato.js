import React from 'react';

function Contato () {
    return(
        <section className="container glass text-center">

            <h1>Fale conosco</h1>

            <br/>
            <br/>

            <address>
                One Microsoft Way<br />
                Redmond, WA 98052-6399<br />
                <abbr title="Phone">P:</abbr>
                425.555.0100
            </address>

            <address>
                <strong>Support:</strong>   <a href="mailto:Support@example.com">Support@example.com</a><br />
                <strong>Marketing:</strong> <a href="mailto:Marketing@example.com">Marketing@example.com</a>
            </address>
        </section>
    );
}

export default Contato;