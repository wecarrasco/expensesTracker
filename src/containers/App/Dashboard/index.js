import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { expense, income } from '../../../actions/money.action';
import { decrementSavings } from '../../../actions/induction.action';
import { addCategory } from '../../../actions/settings.action';

import Table from '../../../components/Dashboard/Table';
import Box from '../../../components/Dashboard/Box';

import './Dashboard.css';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    axios
      .all([
        axios.get(
          'http://ec2-54-163-150-249.compute-1.amazonaws.com:8080/actions',
          {
            params: { user: this.props.user }
          }
        ),
        axios.get(
          'http://ec2-54-163-150-249.compute-1.amazonaws.com:8080/categories',
          {
            params: { user: this.props.user }
          }
        )
      ])
      .then(
        axios.spread((first_res, second_res) => {
          if (first_res.data.rowCount > 0) {
            first_res.data.rows.map((row) => {
              if (row.type === 'INCOME') {
                this.props.income({
                  name: row.name,
                  amount: row.amount,
                  description: row.description,
                  notes: row.notes,
                  selectedMethod: row.selectedmethod
                });
              } else if (row.type === 'EXPENSE') {
                this.props.expense({
                  amount: row.amount,
                  description: row.description,
                  name: row.name,
                  notes: row.notes,
                  selectedCategory: row.selectedcategory,
                  selectedMethod: row.selectedmethod
                });
              }
              return true;
            });
          }

          if (second_res.data.rowCount > 0) {
            second_res.data.rows.map((category) => {
              this.props.addCategory(category.category);
              return true;
            });
          }
        })
      );
  }

  render() {
    return (
      <div id="dashboard">
        <div className="dashboard-container card-list">
          <Box
            Category="Ingresos Totales"
            Color="green"
            icon="far fa-arrow-alt-circle-up"
            total={this.props.totalIncomes}
            lastAmount={this.props.actions}
          />
          <Box
            Category="Gastos Totales"
            Color="red"
            icon="far fa-arrow-alt-circle-down"
            total={this.props.totalExpenses}
            lastAmount={this.props.actions}
          />
          <Box
            Category="Presupuesto"
            Color="orange"
            icon="fas fa-wallet"
            total={this.props.money}
            lastAmount={this.props.actions}
          />
          <Box
            Category="Ahorro esta semana"
            Color="blue"
            icon="fas fa-hand-holding-usd"
            total={this.props.savings}
            lastAmount={this.props.actions}
          />
        </div>
        <Table
          income={this.props.income}
          decrementSavings={this.props.decrementSavings}
          addCategory={this.props.addCategory}
          rojo={this.state.rojo}
          verde={this.state.verde}
          azul={this.state.azul}
          colorOnClick={this.selectColor}
          actions={this.props.actions}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const induction = state.reducers.induction;
  const money = state.reducers.money;
  const user = state.reducers.user;

  return {
    initialBudget: induction.initialBudget,
    dailyAverage: induction.dailyAverage,
    money: money.money,
    totalIncomes: money.totalIncomes,
    totalExpenses: money.totalExpenses,
    savings: induction.savings,
    actions: money.actions,
    user: user.user
  };
}

export default connect(
  mapStateToProps,
  {
    income,
    expense,
    decrementSavings,
    addCategory
  }
)(Dashboard);
