import React from "react";
import Modal from "react-modal";

const OptionModal = props => (
  <Modal
    closeTimeoutMS={2000}
    isOpen={props.showModal}
    contentLabel="Remove Expense"
    onRequestClose={props.handleCloseModal}
    className="modal"
  >
    <h3 className="modal__title">Are you sure to delete this expense?</h3>
    <div className="ReactModal__Content">
      <button className="button m-b" onClick={props.onRemove}>
        Delete
      </button>
      <button
        className="button button--secondary"
        onClick={props.handleCloseModal}
      >
        Cancel
      </button>
    </div>
  </Modal>
);

export default OptionModal;
