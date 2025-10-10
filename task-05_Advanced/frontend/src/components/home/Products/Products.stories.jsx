import React from "react";
import { MemoryRouter } from "react-router-dom";
import Products from "./Products";

// ✅ Sample mock products
const sampleProducts = Array.from({ length: 6 }).map((_, idx) => ({
  id: idx + 1,
  title: `Product ${idx + 1}`,
  color: ["Blue", "Black", "Grey", "Pink", "White", "Brown"][idx % 6],
  img: `https://picsum.photos/200/220?random=${idx + 1}`,
  rating: (Math.random() * (5 - 3.5) + 3.5).toFixed(1),
}));

export default {
  title: "Components/Products",
  component: Products,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <div className="container mx-auto p-4">
          <Story />
        </div>
      </MemoryRouter>
    ),
  ],
  tags: ["autodocs"],
  argTypes: {
    viewType: {
      control: "select",
      options: ["grid", "carousel"],
      description: "Switch between grid and carousel layout",
    },
    title: { control: "text", description: "Main heading for product section" },
    subtitle: { control: "text", description: "Subheading text" },
  },
};

// ✅ Template format (clean & consistent)
const Template = (args) => <Products {...args} />;

// 🟦 Grid view story
export const GridView = Template.bind({});
GridView.args = {
  title: "Best Selling Products",
  subtitle: "Top rated by customers",
  products: sampleProducts,
  viewType: "grid",
};

// 🟩 Carousel view story
export const CarouselView = Template.bind({});
CarouselView.args = {
  title: "New Arrivals",
  subtitle: "Explore the latest trends",
  products: sampleProducts,
  viewType: "carousel",
};
