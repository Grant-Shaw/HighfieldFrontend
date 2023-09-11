import { TopColourData } from "../Shared/DataTypes";

interface Props {
  topColourData: TopColourData[];
}

const DisplayColourData = ({ topColourData }: Props) => {
  return (
    <>
      <h2>Top Colours</h2>
      <table className="table table-striped">
        <thead className="table-primary">
          <tr>
            <th>Colour</th>
            <th>Count</th>
            <th>Color Preview</th>
          </tr>
        </thead>
        <tbody>
          {topColourData.map((colorData, index) => (
            <tr key={index}>
              <td>{colorData.colour}</td>
              <td>{colorData.count}</td>
              <td>
                <div
                  style={{
                    width: "20px",
                    height: "20px",
                    backgroundColor: colorData.colour,
                    display: "inline-block",
                  }}
                ></div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default DisplayColourData;
