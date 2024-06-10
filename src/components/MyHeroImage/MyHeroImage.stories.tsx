import { StoryFn, Meta } from '@storybook/react';
import MyHeroImage from './MyHeroImage';
import { MyHeroImageProps } from './MyHeroImage.types';

export default {
  title: "ReactComponentLibrary/MyHeroImage",
  component: MyHeroImage,
  argTypes: {
    src: { control: 'text', defaultValue: 'https://via.placeholder.com/150' },
    disabled: { control: 'boolean' },
    backgroundColor: { control: 'color' }, // Add background color control
  },
} as Meta<typeof MyHeroImage>;

const Template: StoryFn<MyHeroImageProps> = (args) => <MyHeroImage {...args} />;

export const MyHeroImagePrimaryTest = Template.bind({});
MyHeroImagePrimaryTest.args = {
  src: 'https://via.placeholder.com/150',
  disabled: false,
  backgroundColor: '', // Default background color to empty, will be yellow in component
};

export const Disabled = Template.bind({});
Disabled.args = {
  src: 'https://via.placeholder.com/150',
  disabled: true,
  backgroundColor: '', // Default background color to empty, will be yellow in component
};
