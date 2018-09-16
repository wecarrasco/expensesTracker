import React from 'react';
import ReactModal from 'react-modal';
import { connect } from 'react-redux';
import { compose } from 'ramda';
import uniqid from 'uniqid';
import axios from 'axios';

import { expense } from '../../actions/money.action';
import { decrementSavings } from '../../actions/induction.action';
import { addCategory } from '../../actions/settings.action';
import validate from '../../helperFunctions/validateIncomeExpense';

class ExpenseModal extends React.Component {
  defaultState = {
    name: '',
    description: '',
    selectedCategory: '',
    selectedMethod: 'Credit Card',
    amount: 0,
    notes: ''
  };

  constructor(props) {
    super(props);
    this.state = { ...this.defaultState };
  }

  componentDidMount() {}

  handleNameChange = (evt) => {
    this.setState({ ...this.state, name: evt.target.value });
  };

  handleDescriptionChange = (evt) => {
    this.setState({ ...this.state, description: evt.target.value });
  };

  handleAmountChange = (evt) => {
    const amount = parseInt(evt.target.value, 10);
    this.setState({ ...this.state, amount });
  };

  handleNoteChange = (evt) => {
    this.setState({ ...this.state, notes: evt.target.value });
  };

  handleselectedCategoryChange = (evt) => {
    this.setState({ ...this.state, selectedCategory: evt.target.value });
  };

  handleselectedMethodChange = (evt) => {
    this.setState({ ...this.state, selectedMethod: evt.target.value });
  };

  emptyModal = () => {
    this.setState({ ...this.defaultState });
    this.props.onRequestClose();
  };

  dispatchExpense = (state) => {
    if (this.props.money >= state.amount) {
      this.props.expense(state);
      axios
        .post('http://ec2-54-163-150-249.compute-1.amazonaws.com:8080/action', {
          ...[...this.props.actions].pop(),
          user: this.props.user
        })
        .then((res) => {
          this.props.decrementSavings(state.amount);
          if (this.props.savings <= 0) {
            axios.post(
              'http://ec2-54-163-150-249.compute-1.amazonaws.com:8080/notificationsaving'
            );
          }
        });
    } else {
      alert("You don't have enough budget to make that expense");
    }
  };

  handleSubmit = (evt) => {
    evt.preventDefault();

    const isValid = validate(this.state);

    isValid.valid
      ? compose(
          this.emptyModal,
          this.dispatchExpense
        )(this.state)
      : alert(isValid.error);
  };

  render() {
    return (
      <ReactModal
        isOpen={this.props.isOpen}
        contentLabel="onRequestClose Example"
        onRequestClose={this.props.onRequestClose}
        ariaHideApp={this.props.ariaHideApp}
        className="settingsModal expenseModal"
        overlayClassName="Overlay"
      >
        <h1>NEW EXPENSE</h1>
        <form className="cf">
          <div className="half left cf">
            <input
              type="text"
              id="input-name"
              placeholder="Name"
              value={this.state.name}
              onChange={this.handleNameChange}
            />
            <textarea
              type="text"
              id="input-description"
              placeholder="Description"
              value={this.state.description}
              onChange={this.handleDescriptionChange}
            />
            <input
              type="number"
              id="input-amount"
              placeholder="Amount"
              value={this.state.amount}
              onChange={this.handleAmountChange}
            />
          </div>
          <div className="half right cf">
            <textarea
              name="notes"
              type="text"
              id="input-notes"
              placeholder="Notes"
              value={this.state.notes}
              onChange={this.handleNoteChange}
            />
            <select
              value={this.state.selectedCategory}
              onChange={this.handleselectedCategoryChange}
              className="select"
              name="Categories"
              id="asd"
            >
              {this.props.categories.map((category) => {
                return (
                  <option
                    key={uniqid(`${category.name}-`)}
                    value={category.name}
                  >
                    {category.name}
                  </option>
                );
              })}
            </select>
            <select
              value={this.state.selectedMethod}
              onChange={this.handleselectedMethodChange}
              className="select"
              name="Methods"
              id="asd"
            >
              <option value="Credit Card">Credit Card</option>
              <option value="Cash">Cash</option>
            </select>
          </div>
          <button onClick={this.handleSubmit} id="input-submit">
            Submit
          </button>
        </form>
      </ReactModal>
    );
  }
}

function mapStateToProps(state) {
  const settings = state.reducers.settings;
  const money = state.reducers.money;
  const user = state.reducers.user;
  const induction = state.reducers.induction;
  return {
    categories: settings.Categories,
    actions: money.actions,
    user: user.user,
    savings: induction.savings,
    money: money.money
  };
}

export default connect(
  mapStateToProps,
  { expense, decrementSavings, addCategory }
)(ExpenseModal);
