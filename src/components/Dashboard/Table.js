import React, { Component } from 'react';
import ReactModal from 'react-modal';

import Row from './Row';

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSettingsModal: false,
      showExpenseModal: false,
      showIncomeModal: false,
      rojo: 'grande',
      verde: '',
      azul: ''
    };
  }

  openSettingsModal = () => {
    this.setState({ ...this.state, showSettingsModal: true });
  };
  openExpenseModal = () => {
    this.setState({ ...this.state, showExpenseModal: true });
  };
  openIncomeModal = () => {
    this.setState({ ...this.state, showIncomeModal: true });
  };

  closeSettingsModal = () => {
    this.setState({ ...this.state, showSettingsModal: false });
  };
  closeExpenseModal = () => {
    this.setState({ ...this.state, showExpenseModal: false });
  };
  closeIncomeModal = () => {
    this.setState({ ...this.state, showIncomeModal: false });
  };

  selectColor = (evt) => {
    let colors = {
      rojo: '',
      azul: '',
      verde: ''
    };
    if (evt.target.id === 'buttonColorRojo') {
      colors.rojo = 'grande';
    } else if (evt.target.id === 'buttonColorVerde') {
      colors.verde = 'grande';
    } else {
      colors.azul = 'grande';
    }

    this.setState({ ...this.state, ...colors });
  };

  render() {
    return (
      <div className="dashboard-container actions">
        <div className="actions-inner">
          <header className="actions-header">
            <div className="title">Expenses / Incomes</div>
            <div className="count">| 32 Movements</div>
            <button onClick={this.openSettingsModal}>
              <i className="fas fa-cog" />
            </button>
            <button onClick={this.openExpenseModal}>
              <i className="fas fa-minus" />
            </button>
            <button onClick={this.openIncomeModal}>
              <i className="fas fa-plus" />
            </button>
          </header>
          <table className="actions-table">
            <thead>
              <tr>
                <th>Expense/Income</th>
                <th className="">Date</th>
                <th>Category</th>
                <th>Payment Method</th>
                <th>Amount</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              <Row />
              <Row />
              <Row />
              <Row />
              <Row />
              <Row />
              <Row />
              <Row />
              <Row />
              <Row />
            </tbody>
          </table>
        </div>
        <ReactModal
          isOpen={this.state.showSettingsModal}
          contentLabel="onRequestClose Example"
          onRequestClose={this.closeSettingsModal}
          ariaHideApp={false}
          className="settingsModal"
          overlayClassName="Overlay"
        >
          <h1>SETTINGS</h1>
          <br />
          <h2>Add categories</h2>
          <div className="form__group">
            <input
              type="text"
              id="newCategory"
              className="form__input"
              placeholder="New Category"
              required
            />
            <label htmlFor="newCategory" className="form__label">
              New Category
            </label>
          </div>
          <h2>Select Color</h2>
          <div className="form__group">
            <button
              className={`color colorRojo ${this.state.rojo}`}
              id="buttonColorRojo"
              onClick={this.selectColor}
            />
            <button
              className={`color colorVerde ${this.state.verde}`}
              id="buttonColorVerde"
              onClick={this.selectColor}
            />
            <button
              className={`color colorAzul ${this.state.azul}`}
              id="buttonColorAzul"
              onClick={this.selectColor}
            />
          </div>
          <div className="form__group">
            <button className="buttonAddSettings">
              <span>Add</span>
              <div className="icon">
                <i className="fa fa-plus" />
                <i className="fa fa-check" />
              </div>
            </button>
          </div>
        </ReactModal>
        <ReactModal
          isOpen={this.state.showExpenseModal}
          contentLabel="onRequestClose Example"
          onRequestClose={this.closeExpenseModal}
          ariaHideApp={false}
        >
          <p>EXPENSES</p>
        </ReactModal>
        <ReactModal
          isOpen={this.state.showIncomeModal}
          contentLabel="onRequestClose Example"
          onRequestClose={this.closeIncomeModal}
          ariaHideApp={false}
        >
          <p>INCOMES</p>
        </ReactModal>
      </div>
    );
  }
}

// Table.propTypes = {};

export default Table;
