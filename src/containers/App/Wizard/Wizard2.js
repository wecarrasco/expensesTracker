import React from 'react';

import initialBudget from '../../../components/initialBudget';

import './Wizard2.css';
import imageCash from './Assets/w-3.png';
import imageCard from './Assets/w-1.png';
import imagePay from './Assets/w-2.png';

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default class Wizard2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initialValues: {
        initialBudget: 0,
        dailyAverage: 0,
        name: '',
        limit: 0,
        cutoff_day: 0
      },
      config: {
        ButtonText: 'Next Step',
        active: 1,
        activeSlider: 'slider-one-active',
        activeImage: imageCash
      }
    };
  }

  changeActiveSlide = (evt) => {
    evt.preventDefault();
    this.setState({
      ...this.state,
      config: {
        ...this.state.config,
        ButtonText: 'Saving...'
      }
    });

    let newState = this.state;
    if (this.state.config.active === 1) {
      newState.config = {
        active: 2,
        activeSlider: 'center slider-two-active',
        activeImage: imageCard
      };
    } else {
      newState.config = {
        active: 3,
        activeSlider: 'full slider-three-active',
        activeImage: imagePay
      };
    }
    sleep(900).then(() => {
      this.setState({
        ...this.state,
        config: {
          ButtonText: 'Next Step',
          ...newState.config
        }
      });
    });
  };

  render() {
    return (
      <div className={`container ${this.state.config.activeSlider}`}>
        <img
          className="stepImage"
          src={this.state.config.activeImage}
          alt="image"
        />
        <div className="steps">
          <div className="step step-one">
            <div className="liner" />
            <span>Budget</span>
          </div>
          <div className="step step-two">
            <div className="liner" />
            <span>Credit</span>
          </div>
          <div className="step step-three" />
          <div className="liner" />
        </div>

        <div className="line">
          <div className="dot-move" />
          <div className="dot zero" />
          <div className="dot center" />
          <div className="dot full" />
        </div>
        <div className="slider-ctr">
          <div className="slider">
            <initialBudget
              buttonText={this.state.config.ButtonText}
              onClick={this.changeActiveSlide}
            />
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
              <button className="first next" onClick={this.changeActiveSlide}>
                {this.state.config.ButtonText}
              </button>
            </form>
            <form className="slider-form slider-two">
              <h2>Enter your Credit Card info</h2>
              <label className="input">
                <input
                  type="text"
                  className="name"
                  placeholder="Whats the name of the Credit Card?"
                />
              </label>
              <label className="input">
                <input
                  type="text"
                  className="name"
                  placeholder="When is the Cut-Off day?"
                />
              </label>
              <label className="input">
                <input
                  type="text"
                  className="name"
                  placeholder="Whats the credit limit?"
                />
              </label>
              <button className="second next" onClick={this.changeActiveSlide}>
                {this.state.config.ButtonText}
              </button>
            </form>
            <div className="slider-form slider-three">
              <h2>Hello,</h2>
              <h3>Welcome to your new Expenses Manager!</h3>
              <a className="reset" href="https://codepen.io/balapa/pen/XbXVRg">
                Go to the Dashboard
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
