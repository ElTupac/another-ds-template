import LoadingComponent from "@/Loading";
import StoryTemplate from "../../utils/StoryTemplate";

export default {
  title: "Design System/Basics/Loading",
  component: LoadingComponent,
};

const LoadingProperties = [
  {
    name: "label",
    type: "string",
    default: "",
    description: "The label to be displayed in the component",
  },
  {
    name: "icon",
    type: "string",
    default: "",
    description: `Name of the icon to be displayed inside of the loading. See ${(
      <a href="design-system-basics-icons--icons">Icons</a>
    )} to see the possible options.`,
  },
];

const Template = ({ label, icon }) => (
  <StoryTemplate
    propsInfo={LoadingProperties}
    name="Loading"
    subFolder="/Loading"
    exampleImplementation={`<Loading
  label="${label}"
  icon="${icon}"
  />`}
  >
    <LoadingComponent label={label} icon={icon} />
  </StoryTemplate>
);

export const Loading = Template.bind({});
Loading.args = {
  label: "Loading...",
  icon: "CubeIcon",
};
