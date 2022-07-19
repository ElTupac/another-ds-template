import CodeExample, { CodeExamplePropTypes } from "../CodeExample";
import PropertiesTable, { PropertiesTablePropTypes } from "../PropertiesTable";

const StoryTemplate = ({
  propsInfo,
  children,
  className,
  name,
  additionalImport = "",
  exampleImplementation,
  subFolder,
}) => (
  <div>
    <CodeExample
      className={className}
      name={name}
      additionalImport={additionalImport}
      exampleImplementation={exampleImplementation}
      subFolder={subFolder}
    >
      {children}
    </CodeExample>
    <PropertiesTable propsInfo={propsInfo} />
  </div>
);

StoryTemplate.propTypes = {
  ...PropertiesTablePropTypes,
  ...CodeExamplePropTypes,
};

export default StoryTemplate;
