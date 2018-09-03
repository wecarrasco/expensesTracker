import React from 'react';

const initialBudget = (props) => (
  <form className="slider-form slider-one">
    <h2>Initial Budget</h2>
    <label className="input">
      <input
        type="text"
        className="name"
        placeholder="Whats your initial budget?"
      />
    </label>
    <label className="input">
      <input
        type="text"
        className="name"
        placeholder="How much do you spend approximately every day?"
      />
    </label>
    <button className="first next" onClick={props.changeActiveSlide}>
      {props.ButtonText}
    </button>
  </form>
);

export default initialBudget;
