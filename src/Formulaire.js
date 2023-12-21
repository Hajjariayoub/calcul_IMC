import React, { useState } from 'react';
import Calcul from './calcul';


const Formulaire = () => {
    const [taille,setTaille]=useState()
    const [poids,setPoids]=useState()
    const [imc,setImc]=useState(0)
    const [message,setMessage]=useState('')
    const handleSubmit=e=>{
        e.preventDefault();
        setImc(poids / (taille**2))
        switch (imc) {
            case imc < 18.5:
              setMessage('Vous êtes en sous-poids');
              break;
            case imc >= 18.5 && imc < 25:
              setMessage('Votre poids est normal');
              break;
            case imc >= 25 && imc < 30:
              setMessage('Vous êtes en surpoids');
              break;
            case imc >= 30 && imc < 35:
              setMessage('Vous avez une obésité modérée');
              break;
            case imc >= 35 && imc < 40:
                setMessage('Vous avez une obésité sévère');
              break;
            default:
                setMessage('Vous avez une obésité massive');
              break;
          }
    }
    return (
        <div className='container'>
            <h1>IMC</h1>
            <form className='mt-4'>
        <div class="form-group mb-3">
            <label for="Poids">Poids</label>
            <input type="number" class="form-control"  placeholder="Enter poids" onChange={(e)=>{setPoids(e.target.value)}}/>
        </div>
        <div class="form-group">
            <label for="Taille">Taille</label>
            <input type="number" class="form-control"  placeholder="Enter taille"  onChange={(e)=>{setTaille(e.target.value)}}/>
        </div>
        <button type="submit" class="btn btn-primary" onClick={handleSubmit}>Submit</button>
        </form>
        <Calcul imc={imc} message={message}/>
        </div>
    );
}

export default Formulaire;
