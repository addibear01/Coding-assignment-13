import { Meta, StoryFn } from '@storybook/react';
import MyLabel from './myLabel';
import { MyLabelProps } from './MyLabel.types';

export default {
    title: "ReactComponentLibrary/MyLabel",
    component: MyLabel,
    argTypes: {
      text: { control: 'text', defaultValue: 'Label' },
      disabled: { control: 'boolean' },
      backgroundColor: { control: 'color' }, // Add background color control
    },
  } as Meta<typeof MyLabel>;
  
  const Template: StoryFn<MyLabelProps> = (args) => <MyLabel {...args} />;
  
  export const MyLabelPrimaryTest = Template.bind({});
  MyLabelPrimaryTest.args = {
    text: 'Label Text',
    disabled: false,
    backgroundColor: '', // Default background color to empty, will be purple in component
  };
  
  export const Disabled = Template.bind({});
  Disabled.args = {
    text: 'Label Text',
    disabled: true,
    backgroundColor: '', // Default background color to empty, will be purple in component
  };
