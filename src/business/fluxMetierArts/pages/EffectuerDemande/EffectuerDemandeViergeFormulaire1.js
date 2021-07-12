import React from 'react';
import CheminDemandeVierge from  '../../components/CheminDemandeVierge'
import Formulaire1DemandeVierge from '../../components/Formulaire1DemandeVierge'
import ButtonBasic from '../../components/ButtonBasic'
import ButtonRejetAction from '../../components/ButtonRejetAction'
import ButtonValiderAction from '../../components/ButtonValiderAction'
function EffectuerDemandeViergeFormulaire1 () {

    return ( 
        <div>
        <CheminDemandeVierge/>
        <Formulaire1DemandeVierge/>   
        <ButtonRejetAction name="Annuler"/>
        <ButtonBasic name="Aperçu"/>
        <ButtonValiderAction name="Enregister"/>
      
      </div>
    );
}
export default EffectuerDemandeViergeFormulaire1;