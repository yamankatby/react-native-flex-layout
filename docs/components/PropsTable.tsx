import React from "react";

export interface PropsTableProps {
  props: any
}

const PropsTable: React.FC<PropsTableProps> = ({ props }) => {
  return (
    <table className="table-auto">
      <thead>
      <tr>
        <th>Prop</th>
        {/*<th>Description</th>*/}
        <th>Type</th>
      </tr>
      </thead>

      <tbody>
      {props.map(prop => (
        <tr key={prop.name}>
          <td>{prop.name}</td>
          {/*<td>{prop.description}</td>*/}
          <td>{prop.type}</td>
        </tr>
      ))}
      </tbody>
    </table>
  )
};

export default PropsTable;
