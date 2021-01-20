// src/components/Button.stories.js

//import React from 'react';

import Button from './Button';

export default {
  component: Button,
  title: 'Button',
};

const Template = args => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  button: {
    id: '1',
    title: 'My Button',
    state: 'Button_Default',
    },
};

export const Hover = Template.bind({});
Hover.args = {
  button: {
    ...Default.args.button,
    state: 'Button_Hover',
  },
};

export const Pressed = Template.bind({});
Pressed.args = {
  button: {
    ...Default.args.button,
    state: 'Button_Pressed',
  },
};
