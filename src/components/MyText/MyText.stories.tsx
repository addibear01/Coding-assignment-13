import { StoryFn, Meta } from '@storybook/react';
import MyText from './myText';
import { MyTextProps } from './MyText.types';
import '../MyText.css';

export default {
  title: "ReactComponentLibrary/MyText",
  component: MyText,
  argTypes: {
    text: { control: 'text', defaultValue: 'Label Text' },
    disabled: { control: 'boolean' },
    backgroundColor: { control: 'color' }, // Add background color control
  },
} as Meta<typeof MyText>;

const Template: StoryFn<MyTextProps> = (args) => <MyText {...args} />;

export const MyTextPrimaryTest = Template.bind({});
MyTextPrimaryTest.args = {
  text: 'Label Text',
  disabled: false,
  backgroundColor: '', // Default background color to empty, will be yellow in component
};

export const Disabled = Template.bind({});
Disabled.args = {
  text: 'Label Text',
  disabled: true,
  backgroundColor: '', // Default background color to empty, will be yellow in component
};
