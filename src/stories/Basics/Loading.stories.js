import LoadingComponent from "@/Loading";

export default {
  title: "Design System/Basics/Loading",
  component: LoadingComponent,
};

const Template = ({ label, icon }) => (
  <LoadingComponent label={label} icon={icon} />
);

export const Loading = Template.bind({});
Loading.args = {
  label: "Loading...",
  icon: "CubeIcon",
};
