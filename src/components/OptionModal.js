import React from 'react';
import Modal from 'react-modal';

//contentLabel is only shown to users with accessibility settings turned on
const OptionModal = () => (
        <Modal
        isOpen={true}
        contentLabel={"Selected Option"}
        >
            <h3>Selected Option</h3>
        </Modal>
);

export default OptionModal;