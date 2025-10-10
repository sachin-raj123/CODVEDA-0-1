// LoginButton.stories.jsx
import React from "react";
import { MemoryRouter } from "react-router-dom"; // if routing needed
import LoginButton from "./LoginButton";

export default {
  title: "Components/LoginButton",
  component: LoginButton,
  decorators: [
    (Story) => (
      <div className="p-4">
        <MemoryRouter>
          <Story />
        </MemoryRouter>
      </div>
    ),
  ],
};

const Template = (args) => <LoginButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  onClick: () => alert("Login clicked!"),
};
