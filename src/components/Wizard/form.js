import React from 'react';

const Form = () =>{
  console.log(this.props)
  return (
   
      <h2>Initial Budget</h2>
      <label className="input">
        <input
          id="initialBudget"
          type="text"
          className="name"
          placeholder="Whats your initial budget?"
          onChange={this.handleChange}
          value={
            this.state.initialValues.initialBudget === 0
              ? ''
              : this.state.initialValues.initialBudget
          }
        />
      </label>
      <label className="input">
        <input
          id="averageDaily"
          type="text"
          className="name"
          placeholder="How much do you spend approximately every day?"
          onChange={this.handleChange}
          value={
            this.state.initialValues.dailyAverage === 0
              ? ''
              : this.state.initialValues.dailyAverage
          }
        />
      </label>
      <button className="first next" onClick={this.changeActiveSlide}>
        {this.state.config.ButtonText}
      </button>
    </form>
  )
}

export default Form;