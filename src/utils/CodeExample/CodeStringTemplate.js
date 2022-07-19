const CodeStringTemplate = ({
  name,
  additionalImport = "",
  exampleImplementation,
  subFolder = "",
}) => `import ${name} from "my-package-name${subFolder}";
${additionalImport}

const MyComponent = () => (
  ${exampleImplementation}
);
`;

export default CodeStringTemplate;
