import React from 'react';
import Modal from 'react-modal';

//contentLabel is only shown to users with accessibility settings turned on
const OptionModal = (props) => (
    <Modal
        isOpen={!!props.selectedOption}
        contentLabel={"Selected Option"}
    >
        <h3>Selected Option</h3>
        {props.selectedOption && <p>{props.selectedOption}</p>}
        <button onClick={props.handleClearSelectedOption}>
            Okay
        </button>
    </Modal>
);

export default OptionModal;