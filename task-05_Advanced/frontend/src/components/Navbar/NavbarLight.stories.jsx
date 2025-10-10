import React from "react";
import { MemoryRouter } from "react-router-dom";
import Navbar from "./Navbar";

export default {
  title: "Components/Navbar/Light",
  component: Navbar,
  decorators: [
    (Story) => (
      <MemoryRouter>
        {/* Force light mode by not adding 'dark' class */}
        <div className="bg-white text-gray-900">
          <Story />
        </div>
      </MemoryRouter>
    ),
  ],
};

const Template = (args) => <Navbar {...args} />;

export const LightMode = Template.bind({});
LightMode.args = {
  handleOrderPopup: () => alert("Cart clicked!"),
};
