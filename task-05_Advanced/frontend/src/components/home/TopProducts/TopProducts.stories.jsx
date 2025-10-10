// TopProducts.stories.jsx
import React from "react";
import { MemoryRouter } from "react-router-dom";
import TopProducts from "./TopProducts";

// Sample mock products for the story
const sampleProducts = Array.from({ length: 6 }).map((_, idx) => ({
  id: idx + 1,
  title: `Product ${idx + 1}`,
  img: `https://via.placeholder.com/150?text=Product+${idx + 1}`,
  description: "This is a sample description for the product.",
}));

export default {
  title: "Components/TopProducts",
  component: TopProducts,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <div className="container mx-auto p-4">
          <Story />
        </div>
      </MemoryRouter>
    ),
  ],
};

const Template = (args) => <TopProducts {...args} />;

export const GridView = Template.bind({});
GridView.args = {
  products: sampleProducts,
  viewType: "grid",
  handleOrderPopup: () => alert("Order clicked!"),
};

export const CarouselView = Template.bind({});
CarouselView.args = {
  products: sampleProducts,
  viewType: "carousel",
  handleOrderPopup: () => alert("Order clicked!"),
};
