import React from 'react';
import CheminDemandeCopieDessai from  '../../components/CheminDemandeCopieDessai'

import FormulaireCopieDessai from '../../components/FormulaireCopieDessai'
import ButtonRejetAction from '../../components/ButtonRejetAction'
import TableauStandard from '../../components/TableauStandard'

function EffectuerDemandeCopieDessai () {

    return ( 
        <div>
        <CheminDemandeCopieDessai/>
        <FormulaireCopieDessai/>
        <TableauStandard/>
        <br/> 
        <ButtonRejetAction name="Annuler"/> 
      </div>
    );
}
export default EffectuerDemandeCopieDessai;