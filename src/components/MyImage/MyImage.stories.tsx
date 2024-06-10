import { StoryFn, Meta } from '@storybook/react';
import MyImage from './MyImage';

export default {
  title: "ReactComponentLibrary/MyImage",
  component: MyImage,
} as Meta<typeof MyImage>;

const Template: StoryFn<typeof MyImage> = (args) => <MyImage {...args} />;

export const MyImagePrimaryTest = Template.bind({});
MyImagePrimaryTest.args = {
  disabled: false,
  src: "https://via.placeholder.com/150",
};
