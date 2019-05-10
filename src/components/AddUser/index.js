import React, { Component } from "react";
import Modal from "react-modal";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import { Creators as ModalActions } from "../../store/ducks/modal";
import { Creators as UserActions } from "../../store/ducks/users";
import "./styles.css";

Modal.setAppElement(document.getElementById("root"));

class AddUser extends Component {
  static propTypes = {
    hideModal: PropTypes.func.isRequired,
    modal: PropTypes.shape({
      visible: PropTypes.bool,
      cordinate: PropTypes.oneOfType([
        PropTypes.oneOf([null]),
        PropTypes.shape({
          latitude: PropTypes.number,
          longitude: PropTypes.number
        })
      ])
    }).isRequired
  };

  state = {
    userInput: ""
  };

  handleUserInputChange = e => this.setState({ userInput: e.target.value });

  handleFormSubmit = e => {
    e.preventDefault();

    const {
      addUserRequest,
      modal: { cordinates }
    } = this.props;
    const { userInput } = this.state;

    addUserRequest(userInput, cordinates);
    this.setState({ userInput: "" });
  };

  handleHideModal = () => {
    const { hideModal } = this.props;
    hideModal();
  };

  render() {
    const { modal } = this.props;
    const { userInput } = this.state;
    return (
      <Modal
        isOpen={modal.visible}
        contentLabel="Add User Modal"
        className="modal-container"
        overlayClassName="modal-overlay"
        onRequestClose={this.handleHideModal}
      >
        <h2>Adicionar novo usuário</h2>
        <form onSubmit={this.handleFormSubmit} className="form">
          <input
            placeholder="Usuário do Github"
            value={userInput}
            onChange={this.handleUserInputChange}
          />
          <div className="buttons-container">
            <button type="button" onClick={this.handleHideModal}>
              Cancelar
            </button>
            <button type="submit">Salvar</button>
          </div>
        </form>
      </Modal>
    );
  }
}

const mapStateToProps = state => ({
  modal: state.modal
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...ModalActions, ...UserActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddUser);
