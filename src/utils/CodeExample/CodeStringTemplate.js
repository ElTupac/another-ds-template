const CodeStringTemplate = ({
  name,
  additionalImport = "",
  exampleImplementation,
  subFolder = "",
}) => `import ${name} from "inventa-design-system${subFolder}";
${additionalImport}

const MyComponent = () => (
  ${exampleImplementation}
);
`;

export default CodeStringTemplate;
