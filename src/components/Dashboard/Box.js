import React, { Component } from 'react';

class Box extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { Category, Color, icon, total, lastAmount } = this.props;
    return (
      <div className={`card ${Color}`}>
        <div className="title">{Category}</div>
        <i className={icon} />
        <div className="value">L. {total}</div>
      </div>
    );
  }
}

// Box.propTypes = {
//   Category: PropTypes.string.isRequired
// };

export default Box;
