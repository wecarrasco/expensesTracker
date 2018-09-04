import React from 'react';
import { connect } from 'react-redux';

import './Wizard2.css';
import imageCash from './Assets/w-3.png';
import imageCard from './Assets/w-1.png';
import imagePay from './Assets/w-2.png';

import Steps from '../../../components/Wizard/steps';
import Line from '../../../components/Wizard/line';

import { setInductionSettings } from '../../../actions/induction.action';
import { newCard } from '../../../actions/bank.action';

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

class Wizard2 extends React.Component {
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
      this.props.setInductionSettings({
        initialBudget: this.state.initialValues.initialBudget,
        dailyAverage: this.state.initialValues.dailyAverage
      });
      newState.config = {
        active: 2,
        activeSlider: 'center slider-two-active',
        activeImage: imageCard
      };
    } else if (this.state.config.active === 2) {
      this.props.newCard({
        creditCardName: this.state.initialValues.name,
        cutoffDay: this.state.initialValues.cutoff_day,
        creditLimit: this.state.initialValues.limit
      });
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

  handleChange = (evt) => {
    console.log(evt.target.id);
    switch (evt.target.id) {
      case 'initialBudget':
        this.setState({
          ...this.state,
          initialValues: {
            ...this.state.initialValues,
            initialBudget: parseInt(evt.target.value, 10)
          }
        });
        break;

      case 'averageDaily':
        this.setState({
          ...this.state,
          initialValues: {
            ...this.state.initialValues,
            dailyAverage: parseInt(evt.target.value, 10)
          }
        });
        break;

      case 'creditCardName':
        this.setState({
          ...this.state,
          initialValues: {
            ...this.state.initialValues,
            name: evt.target.value
          }
        });
        break;

      case 'cutOffDay':
        this.setState({
          ...this.state,
          initialValues: {
            ...this.state.initialValues,
            cutoff_day: parseInt(evt.target.value, 10)
          }
        });
        break;

      case 'creditLimit':
        this.setState({
          ...this.state,
          initialValues: {
            ...this.state.initialValues,
            limit: parseInt(evt.target.value, 10)
          }
        });
        break;

      default:
        console.log('Nothing changed');
    }
  };

  render() {
    return (
      <div className={`container ${this.state.config.activeSlider}`}>
        <img
          className="stepImage"
          src={this.state.config.activeImage}
          alt="Step ilustration"
        />
        <Steps />
        <Line />

        <div className="slider-ctr">
          <div className="slider">
            <form className="slider-form slider-one">
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
            <form className="slider-form slider-two">
              <h2>Enter your Credit Card info</h2>
              <label className="input">
                <input
                  id="creditCardName"
                  type="text"
                  className="name"
                  placeholder="Whats the name of the Credit Card?"
                  onChange={this.handleChange}
                  value={this.state.initialValues.name}
                />
              </label>
              <label className="input">
                <input
                  id="cutOffDay"
                  type="text"
                  className="name"
                  placeholder="When is the Cut-Off day?"
                  onChange={this.handleChange}
                  value={
                    this.state.initialValues.cutoff_day === 0
                      ? ''
                      : this.state.initialValues.cutoff_day
                  }
                />
              </label>
              <label className="input">
                <input
                  id="creditLimit"
                  type="text"
                  className="name"
                  placeholder="Whats the credit limit?"
                  onChange={this.handleChange}
                  value={
                    this.state.initialValues.limit === 0
                      ? ''
                      : this.state.initialValues.limit
                  }
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

Wizard2.propTypes = {};

export default connect(
  null,
  {
    setInductionSettings,
    newCard
  }
)(Wizard2);
