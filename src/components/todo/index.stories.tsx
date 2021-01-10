import React from 'react';

import ToDo from './';

export default {
  component: ToDo,
  title: 'ToDo',
};

const Template = (args: any) => <ToDo {...args} />;

export const Default: any = Template.bind({});
Default.args = {
  todo: {
    id: '1',
    title: 'Test ToDo',
    isDone: true,
    dateTime: new Date(2018, 0, 1, 9, 0)
  }
};