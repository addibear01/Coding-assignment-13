import { StoryFn, Meta } from '@storybook/react';
import MyButton from './MyButton';
import { MyButtonProps } from './MyButton.types';
import '../MyButton.css';
import { within } from '@testing-library/react';
import { userEvent } from '@storybook/testing-library'; // Correct import for userEvent

export default {
  title: "ReactComponentLibrary/MyButton",
  component: MyButton,
  argTypes: {
    label: { control: 'text', defaultValue: 'Button' },
    disabled: { control: 'boolean' },
    backgroundColor: { control: 'color' }, // Add background color control
  },
} as Meta<typeof MyButton>;

const Template: StoryFn<MyButtonProps> = (args) => <MyButton {...args} />;

export const MyButtonPrimary = Template.bind({});
MyButtonPrimary.args = {
  label: 'Button',
  disabled: false,
  backgroundColor: '', // Default background color to empty, will be blue in component
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Button',
  disabled: true,
  backgroundColor: '', // Default background color to empty, will be blue in component
};

export const MyButtonPrimaryWithPlay: StoryFn = Template.bind({});
MyButtonPrimaryWithPlay.args = {
  primary: true,
  label: 'Button',
};
MyButtonPrimaryWithPlay.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.click(canvas.getByTestId('TestButton')); 
};
