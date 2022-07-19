import PropTypes from "prop-types";

const PropertiesTable = ({ propsInfo = [] }) => (
  <div className="w-full flex flex-row md:justify-center">
    <table className="my-xxs">
      <thead className="border">
        <tr>
          <th className="border border-slate-300 p-milli">Property</th>
          <th className="border border-slate-300 p-milli">Type</th>
          <th className="border border-slate-300 p-milli">Default</th>
          <th className="border border-slate-300 p-milli">Description</th>
        </tr>
      </thead>
      <tbody>
        {propsInfo.map((prop) => (
          <tr
            className="odd:bg-slate-100 border border-slate-300"
            key={`${prop.name}-${prop.type}-${prop.default}`}
          >
            <td className="border border-slate-300 p-milli">{prop.name}</td>
            <td className="border border-slate-300 p-milli">{prop.type}</td>
            <td className="border border-slate-300 p-milli">{prop.default}</td>
            <td className="border border-slate-300 p-milli">
              {prop.description}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

PropertiesTable.propTypes = {
  propsInfo: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      default: PropTypes.string,
      description: PropTypes.string,
    })
  ),
};

export default PropertiesTable;
