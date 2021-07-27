import React, { useState } from 'react';
import Modal from '../components/Modal';

function Modale() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Modal open={isOpen} onclose={() => setIsOpen(false)} />
    </div>
  );
}
export default Modale;
