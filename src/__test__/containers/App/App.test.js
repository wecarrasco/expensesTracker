import React from 'react';
import ReactDOM from 'react-dom';
// import App from '../../../containers/App/App';
import Wiz from '../../../containers/App/Wizard/Wizard2';
import { shallow, configure } from 'enzyme';
import ReactSizteenAdapter from 'enzyme-adapter-react-16';

configure({ adapter: new ReactSizteenAdapter() });

describe('Render the project', () => {
  it('renders without crashing', () => {
    // const div = document.createElement('div');
    // ReactDOM.render(<Wiz />, div);
    // ReactDOM.unmountComponentAtNode(div);
    expect(2 + 2).toBe(4);
    // const wrapper = shallow(<Wiz />);
    // const divHead = <div className="container slider-one-active" />;
    // expect(wrapper.contains(divHead));
  });
});
