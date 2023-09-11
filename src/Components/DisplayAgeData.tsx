import {AgeData} from '../Shared/DataTypes';

interface Props {
    ageData: AgeData[]
}

const DisplayAgeData = ({ageData} : Props) => {
  return (
    <>
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
      </>
  )
}

export default DisplayAgeData