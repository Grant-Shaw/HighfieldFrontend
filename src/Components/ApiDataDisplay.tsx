import React from 'react';

interface AgeData {
  userId: string;
  originalAge: number;
  agePlusTwenty: number;
}

interface TopColourData {
  colour: string;
  count: number;
}

interface Props {
  ageData: AgeData[];
  topColourData: TopColourData[];
}

const ApiDataDisplay: React.FC<Props> = ({ ageData, topColourData }) => {
  return (
    <div>
      <h2>Age Data</h2>
      <table>
        <thead>
          <tr>
            <th>User ID &nbsp;</th>
            <th>Original Age &nbsp;</th>
            <th>Age Plus Twenty</th>
          </tr>
        </thead>
        <tbody>
          {ageData.map((ageDataItem, index) => (
            <tr key={index}>
              <td>{ageDataItem.userId} &nbsp;</td>
              <td>{ageDataItem.originalAge} &nbsp;</td>
              <td>{ageDataItem.agePlusTwenty}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Top Colours</h2>
      <table>
        <thead>
          <tr>
            <th>Colour</th>
            <th>Count &nbsp;</th>
            <th>Color Preview</th> {/* Add the third column for color preview */}
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
                    width: '20px', // Set the width and height as needed
                    height: '20px',
                    backgroundColor: colorData.colour,
                    display: 'inline-block',
                  }}
                ></div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ApiDataDisplay;
