import Icon from "Icons";
import { Sizes } from "Sizes";

export default {
  title: "Design System/Basics/Icons",
  component: Icon,
  argTypes: {
    name: {
      options: Icon.availableVariables,
      control: { type: "select" },
    },
    size: {
      options: Object.keys(Sizes),
      control: { type: "select" },
    },
    layout: {
      control: { type: "select" },
    },
  },
};

const Template = ({ name, size, layout }) => (
  <Icon name={name} size={size} layout={layout} />
);

export const Icons = Template.bind({});
Icons.args = {
  name: "AdjustmentsIcon",
  size: "sm",
  layout: "solid",
};
