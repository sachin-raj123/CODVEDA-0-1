// Footer.stories.jsx
import React from "react";
import Footer from "./Footer";

// This default export determines where your story goes in the Storybook sidebar
export default {
  title: "Components/Footer",
  component: Footer,
};

// Template for creating multiple stories
const Template = (args) => <Footer {...args} />;

// Default story
export const Default = Template.bind({});
Default.args = {
  // You can pass props if Footer accepts any in future
};
