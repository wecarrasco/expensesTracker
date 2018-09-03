import React from 'react';
import { Formik, Field } from 'formik';

import './Wizard.css';
import budgetIMG from './Assets/wizardBudget.jpeg';
import creditCardIMG from './Assets/wizardCreditCard.jpeg';

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const required = (value) => (value ? undefined : 'Required');

const Error = ({ name }) => (
  <Field
    name={name}
    render={({ form: { touched, errors } }) =>
      touched[name] && errors[name] ? <span>{errors[name]}</span> : null
    }
  />
);

class Wizard extends React.Component {
  static Page = ({ children }) => children;

  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      values: props.initialValues
    };
  }

  next = (values) =>
    this.setState((state) => ({
      page: Math.min(state.page + 1, this.props.children.length - 1),
      values
    }));

  previous = () =>
    this.setState((state) => ({
      page: Math.max(state.page - 1, 0)
    }));

  validate = (values) => {
    const activePage = React.Children.toArray(this.props.children)[
      this.state.page
    ];
    return activePage.props.validate ? activePage.props.validate(values) : {};
  };

  handleSubmit = (values, bag) => {
    const { children, onSubmit } = this.props;
    const { page } = this.state;
    const isLastPage = page === React.Children.count(children) - 1;
    if (isLastPage) {
      return onSubmit(values, bag);
    } else {
      this.next(values);
      bag.setSubmitting(false);
    }
  };

  render() {
    const { children } = this.props;
    const { page, values } = this.state;
    const activePage = React.Children.toArray(children)[page];
    const isLastPage = page === React.Children.count(children) - 1;

    return (
      <Formik
        initialValues={values}
        enableReinitialize={false}
        validate={this.validate}
        onSubmit={this.handleSubmit}
        render={({ values, handleSubmit, isSubmitting, handleReset }) => (
          <form className="Wizard" onSubmit={handleSubmit}>
            <h1>Expenses Manager</h1>
            {activePage}
            <div className="buttons">
              {!isLastPage && (
                <button className="actionButton" type="submit">
                  Next »
                </button>
              )}
              {isLastPage && (
                <button
                  className="actionButton"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Submit
                </button>
              )}
            </div>
          </form>
        )}
      />
    );
  }
}

const Wiz = () => (
  <div className="Wiz">
    <Wizard
      className="Wizard"
      initialValues={{
        money: 1,
        cardName: '',
        creditLimit: 1,
        cutOffDay: 1
      }}
      onSubmit={(values, actions) => {
        sleep(300).then(() => {
          window.alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        });
      }}
    >
      <Wizard.Page>
        <img src={budgetIMG} alt="money" className="imagenWizard" />
        <div className="page1">
          <label htmlFor="money" className="field-label">
            Initial budget
          </label>
          <Field
            name="money"
            component="input"
            type="number"
            validate={required}
            className="field"
            id="money"
            min="0"
          />
          <Error name="money" />
        </div>
      </Wizard.Page>
      <Wizard.Page
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = 'Required';
          }
          if (!values.favoriteColor) {
            errors.favoriteColor = 'Required';
          }
          return errors;
        }}
      >
        <img src={creditCardIMG} alt="money" className="imagenWizard" />
        <div>
          <label htmlFor="bankName" className="field-label">
            Card name:{' '}
          </label>
          <Field
            name="bankName"
            component="input"
            type="text"
            className="field"
            placeholder="Ficohsa"
          />
          <Error name="bankName" />
        </div>
        <div>
          <label htmlFor="creditLimit" className="field-label">
            Credit limit:
          </label>
          <Field
            name="creditLimit"
            component="input"
            type="number"
            validate={required}
            className="field"
            id="creditLimit"
            min="1"
          />
          <Error name="creditLimit" />
        </div>
        <div>
          <label htmlFor="cutoffDay" className="field-label">
            Cut Off Day:
          </label>
          <Field
            name="cutoffDay"
            component="input"
            type="number"
            validate={required}
            className="field"
            id="cutoffDay"
            min="1"
            max="31"
          />
          <Error name="cutoffDay" />
        </div>
      </Wizard.Page>
    </Wizard>
  </div>
);

export default Wiz;
