import React from 'react';
import { useAppContext } from './AppProvider';
import AppDemandeur from './AppCopieDemandeur';
import AppResponsable from './AppCopieResponsable';
import AppTechnicien from './AppCopieTechnicien';
import AppAdministration from './AppCopieAdministration';

const SelectAppFromRole = () => {
  const { role } = useAppContext();

  return (
    <>
      {role === 'demandeur' && <AppDemandeur />}
      {role === 'administrateur' && <AppAdministration />}
      {role === 'technicien' && <AppTechnicien />}
      {role === 'responsable' && <AppResponsable />}
      {!role && <span>Role not found</span>}
    </>
  );
};

export default SelectAppFromRole;
