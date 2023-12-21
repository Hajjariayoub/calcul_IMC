import React from 'react';

function Calcul({imc,message}) {
    return (
        <div>
            {
            imc === 0 ? ''
                :
                <>
                <h1>Calculatrice de Imc</h1>
                <p>IMC : {imc}</p>
                <p>Avis du medecin : {message}</p>
                </>
            }
            
        </div>
    );
}

export default Calcul;
