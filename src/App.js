import React from 'react';
import AppProvider from './AppProvider';
import SelectAppFromRole from './SelectAppFromRole';

const App = function () {
  return (
    <AppProvider>
      <SelectAppFromRole />
    </AppProvider>
  );
};

export default App;
