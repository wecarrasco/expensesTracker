import React from 'react';
import { connect } from 'react-redux';

const formatDate = (date) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];
  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();

  return `${day} / ${months[monthIndex]} / ${year}`;
};

const getDay = (date) => {
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ];
  return days[date.getDay()];
};

const incomeExpenseText = (type) => {
  if (type !== 'INCOME') {
    return ' expense-text';
  } else {
    return ' income-text';
  }
};

const Row = (props) => (
  <tr>
    <td>
      <p>{props.name}</p>
      <p>{props.description}</p>
    </td>
    <td>
      <p>{formatDate(props.date)}</p>
      <p className="day-text">{getDay(props.date)}</p>
    </td>
    <td className="member">
      <div className="member-info">
        <p>{props.selectedCategory}</p>
        <p>&nbsp;</p>
      </div>
    </td>
    <td>
      <p>{props.selectedMethod}</p>
      <p>
        {props.selectedMethod === 'Credit Card'
          ? props.card.creditCardName
          : ''}
      </p>
    </td>
    <td>
      <p className={`${incomeExpenseText(props.selectedCategory)}`}>
        L. {props.amount}
      </p>
      <p>Paid</p>
    </td>
    <td className="status">{props.notes}</td>
  </tr>
);

function mapStateToProps(state) {
  const bank = state.reducers.bank;
  return {
    card: bank[0]
  };
}

export default connect(
  mapStateToProps,
  null
)(Row);
