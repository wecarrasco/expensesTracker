import React, { Component } from 'react';
import uniqid from 'uniqid';

import SettingsModal from './settingsModal';
import ExpenseModal from './expenseModal';
import IncomeModal from './incomeModal';
import Row from './Row';

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSettingsModal: false,
      showExpenseModal: false,
      showIncomeModal: false
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

  loadActions = () => {
    return this.props.actions.map((action) => {
      console.log(action);
      return (
        <Row
          key={uniqid(`${action.type}-`)}
          description={action.description}
          amount={action.amount}
          name={action.name}
          notes={action.notes}
          selectedCategory={action.selectedCategory}
          selectedMethod={action.selectedMethod}
          type={action.type}
          date={action.date}
        />
      );
    });
  };

  render() {
    return (
      <div className="dashboard-container actions">
        <div className="actions-inner">
          <header className="actions-header">
            <div className="title">Expenses / Incomes</div>
            <div className="count">| {this.props.actions.length} Movements</div>
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
            <tbody>{this.loadActions()}</tbody>
          </table>
        </div>
        <SettingsModal
          isOpen={this.state.showSettingsModal}
          contentLabel="onRequestClose Example"
          onRequestClose={this.closeSettingsModal}
          ariaHideApp={false}
        />
        <ExpenseModal
          isOpen={this.state.showExpenseModal}
          contentLabel="onRequestClose Example"
          onRequestClose={this.closeExpenseModal}
          ariaHideApp={false}
        />
        <IncomeModal
          isOpen={this.state.showIncomeModal}
          contentLabel="onRequestClose Example"
          onRequestClose={this.closeIncomeModal}
          ariaHideApp={false}
        />
      </div>
    );
  }
}

// Table.propTypes = {};

export default Table;
