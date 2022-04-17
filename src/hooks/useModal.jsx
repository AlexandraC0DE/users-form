import { useState } from 'react';

const useModal = ( initialValue = false ) => {

    const [isOpenModal, setIsOpenmodal] = useState(initialValue);
   

    const openModal = () => {
      setIsOpenmodal(true);
    }
  
    const closeModal = () => {
      setIsOpenmodal(false);
    }

    return [isOpenModal, openModal, closeModal ];
    
}

export default useModal;