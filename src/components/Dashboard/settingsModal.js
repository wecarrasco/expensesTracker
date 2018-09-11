import React from 'react';
import ReactModal from 'react-modal';
import { connect } from 'react-redux';
import { compose } from 'ramda';

import validate from '../../helperFunctions/validateNewCategory';
import { addCategory } from '../../actions/settings.action';

class SettingsModal extends React.Component {
  defaultState = {
    category: ''
  };

  constructor(props) {
    super(props);
    this.state = { ...this.defaultState };
  }

  handleCategoryChange = (evt) => {
    this.setState({ category: evt.target.value });
  };

  emptyModal = () => {
    this.setState({ ...this.defaultState });
    this.props.onRequestClose();
  };

  dispatchCategory = (state) => {
    this.props.addCategory(state.category);
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    console.log({ categorias: this.props.categories });
    const isValid = validate({
      category: this.state.category,
      categories: this.props.categories
    });

    isValid.valid
      ? compose(
          this.emptyModal,
          this.dispatchCategory
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
        className="settingsModal settingsModal2 expenseModal"
        overlayClassName="Overlay"
      >
        <h1>SETTINGS</h1>
        <h2>Add categories</h2>
        <form className="cf">
          <div className="left cf">
            <input
              type="text"
              id="input-category"
              placeholder="Category"
              value={this.state.category}
              onChange={this.handleCategoryChange}
            />
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
  return {
    categories: settings.Categories
  };
}

export default connect(
  mapStateToProps,
  { addCategory }
)(SettingsModal);
