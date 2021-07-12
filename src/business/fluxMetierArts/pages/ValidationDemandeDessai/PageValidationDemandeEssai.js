import React from 'react';
import CheminValiderEssai from  '../../components/CheminValiderEssai'
import InformationDemandeEssai from './InformationDemandeEssai'
import ComposantValiderDemandeEssai from './ComposantValiderDemandeEssai'

function InformationValidationDemande () {

    return ( 
        <div>
        <CheminValiderEssai/>
        <InformationDemandeEssai/>   
        <ComposantValiderDemandeEssai/>
      </div>
    );
}
export default InformationValidationDemande;