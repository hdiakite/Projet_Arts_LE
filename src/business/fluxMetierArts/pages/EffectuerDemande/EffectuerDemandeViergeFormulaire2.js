import React from 'react';
import CheminDemandeVierge from  '../../components/CheminDemandeVierge'
import Formulaire2DemandeVierge from '../../components/Formulaire2DemandeVierge'
import ButtonBasic from '../../components/ButtonBasic'
import ButtonRejetAction from '../../components/ButtonRejetAction'
import ButtonValiderAction from '../../components/ButtonValiderAction'

function EffectuerDemandeViergeFormulaire2 () {

    return ( 
        <div>
        <CheminDemandeVierge/>
        <Formulaire2DemandeVierge/>      
        <ButtonRejetAction name="Annuler"/>
        <ButtonBasic name="Aperçu"/>
        <ButtonValiderAction name="Enregister"/>
      
      </div>
    );
}
export default EffectuerDemandeViergeFormulaire2;