import React from "react";
import { MemoryRouter } from "react-router-dom";
import Navbar from "./Navbar";

export default {
  title: "Components/Navbar",
  component: Navbar,
  decorators: [(Story) => <MemoryRouter><Story /></MemoryRouter>],
};

const Template = (args) => <Navbar {...args} />;

export const Default = Template.bind({});
Default.args = {
  handleOrderPopup: () => alert("Cart clicked!"),
};
