import Icon from "@/Icons";
import { Sizes } from "@/Sizes";
import StoryTemplate from "../../utils/StoryTemplate";

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

const IconProperties = [
  {
    name: "name",
    type: "string",
    default: "",
    description: "The name of the icon to select",
  },
  {
    name: "size",
    type: "string",
    default: "md",
    description: "The size of the icon, must be of the defined in the Sizes",
  },
  {
    name: "layout",
    type: "string",
    default: "solid",
    description:
      "The icon layout, this would be defined by the different icons used.",
  },
];

const Template = ({ name, size, layout }) => (
  <StoryTemplate
    propsInfo={IconProperties}
    name="Icon"
    subFolder="/Icons"
    exampleImplementation={`<Icon
    name="${name}"
    size="${size}"
    layout="${layout}"
/>`}
  >
    <Icon name={name} size={size} layout={layout} />
  </StoryTemplate>
);

export const Icons = Template.bind({});
Icons.args = {
  name: "AdjustmentsIcon",
  size: "sm",
  layout: "solid",
};
