import React from 'react';
import { shallow } from '../enzyme';

import Form from './Form';

describe('Form Component', () => {
  it('should show text', () => {
    const wrapper = shallow(<Form />);
    const text = wrapper.find('form p p');

    console.log(wrapper.debug());

    expect(text).toBeDefined();
  });
});
