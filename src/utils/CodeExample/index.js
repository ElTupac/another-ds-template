import PropTypes from "prop-types";
import CodeEditor from "@uiw/react-textarea-code-editor";
import CodeStringTemplate from "./CodeStringTemplate";

const CodeExample = ({
  children,
  className,
  name,
  additionalImport = "",
  exampleImplementation,
  subFolder,
}) => (
  <>
    <div className={`flex items-center justify-center ${className}`}>
      {children}
    </div>
    <div className="mt-20">
      <h3 className="col-span-4 lg:col-span-12">Example usage</h3>
      <CodeEditor
        className="col-span-4 lg:col-span-6"
        value={CodeStringTemplate({
          name,
          additionalImport,
          exampleImplementation,
          subFolder,
        })}
        language="jsx"
      />
    </div>
  </>
);

CodeExample.propTypes = {
  name: PropTypes.string,
  additionalImport: PropTypes.string,
  exampleImplementation: PropTypes.string,
  subFolder: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
};

export default CodeExample;
