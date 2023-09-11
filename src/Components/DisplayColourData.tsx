import { TopColourData } from "../Shared/DataTypes";

interface Props {
  topColourData: TopColourData[];
}

const DisplayColourData = ({ topColourData }: Props) => {
  return (
    <>
      <h2>Top Colours</h2>
      <table>
        <thead>
          <tr>
            <th>Colour</th>
            <th>Count &nbsp;</th>
            <th>Color Preview</th>
          </tr>
        </thead>
        <tbody>
          {topColourData.map((colorData, index) => (
            <tr key={index}>
              <td>{colorData.colour}</td>
              <td>{colorData.count}</td>
              <td>
                &nbsp;
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
