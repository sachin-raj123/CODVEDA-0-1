import React from "react";
import { MemoryRouter } from "react-router-dom";
import Navbar from "./Navbar";

export default {
  title: "Components/Navbar/Dark",
  component: Navbar,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <div className="dark">
          <Story />
        </div>
      </MemoryRouter>
    ),
  ],
};

const Template = (args) => <Navbar {...args} />;

export const DarkMode = Template.bind({});
DarkMode.args = {
  handleOrderPopup: () => alert("Cart clicked!"),
};
