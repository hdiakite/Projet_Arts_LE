import React from 'react';
import { useAppContext } from './AppProvider';
import Applicant from './Applicant';
import Responsible from './Responsible';
import Technician from './Technician';
import Administrator from './Administrator';

const SelectAppFromRole = () => {
  const { role } = useAppContext();

  return (
    <>
      {role === 'demandeur' && <Applicant />}
      {role === 'administrateur' && <Administrator />}
      {role === 'technicien' && <Technician />}
      {role === 'responsable' && <Responsible />}
      {!role && <span>Role not found</span>}
    </>
  );
};

export default SelectAppFromRole;
