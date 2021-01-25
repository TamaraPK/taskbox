// src/components/ButtonPF.stories.js

//import React from 'react';

import Button from './ButtonPF';

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
    },
};

export const Default_Disabled = Template.bind({});
Default_Disabled.args = {
  button: {
    ...Default.args.button,
    disabled: 'disabled'
    },
};

export const Secondary = Template.bind({});
Secondary.args = {
  button: {
    ...Default.args.button,
    state: 'secondary',
  },
};

export const Secondary_Disabled = Template.bind({});
Secondary_Disabled.args = {
  button: {
    ...Secondary.args.button,
    disabled: 'disabled',
    },
};

export const Success = Template.bind({});
Success.args = {
  button: {
    ...Default.args.button,
    state: 'success',
  },
};

export const Success_Disabled = Template.bind({});
Success_Disabled.args = {
  button: {
    ...Success.args.button,
    disabled: 'disabled',
  },
};


