import { AgeData } from "../Shared/DataTypes";

interface Props {
  ageData: AgeData[];
}

const DisplayAgeData = ({ ageData }: Props) => {
  return (
    <>
      <h2>Age Data</h2>
      <table className="table table-striped">
        <thead className="table-primary">
          <tr>
            <th>User ID</th>
            <div>
              <th>Original Age</th>
            </div>
            <th>Age Plus Twenty</th>
          </tr>
        </thead>
        <tbody>
          {ageData.map((ageDataItem, index) => (
            <tr key={index}>
              <td>{ageDataItem.userId} </td>
              <td>{ageDataItem.originalAge} </td>
              <td>{ageDataItem.agePlusTwenty}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default DisplayAgeData;
