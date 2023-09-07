import React, { useState, useEffect } from 'react';

interface ApiResponse {
  ages: {
    userId: string;
    originalAge: number;
    agePlusTwenty: number;
  }[];
  topColours: {
    colour: string;
    count: number;
  }[];
}

function App() {
  const [data, setData] = useState<ApiResponse | null>(null);
  const [error, setError] = useState(null);
  const [fetching, setFetching] = useState(false);

  // Function to fetch data from the API
  const fetchData = () => {
    setFetching(true); // Set fetching to true while waiting for the API response
    // Make the API call
    fetch('https://localhost:7125/api/Users/UserData')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok}',);
        }
        return response.json();
      })
      .then((responseData) => {
        // Handle the successful response data
        setData(responseData);
        setFetching(false); // Reset fetching after data is received
      })
      .catch((fetchError) => {
        // Handle fetch errors
        setError(fetchError.message);
        setFetching(false); // Reset fetching on error
      });
  };

  useEffect(() => {
    // This effect runs on component mount, you can put any other initial setup here.
  }, []);

  return (
    <div>
      <h1>Highfield Recruitment Task</h1>

      {/* Render the button only if data is not being fetched */}
      {!fetching && (
        <button onClick={fetchData}>Fetch Data</button>
      )}

      {/* Display an error message if there's an error */}
      {error && <p>Error: {error}</p>}

      {/* Display the data if it's available */}
      {data && (
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
        {data.ages.map((ageData, index) => (
          <tr key={index}>
            <td>{ageData.userId} &nbsp;</td>
            <td>{ageData.originalAge} &nbsp;</td>
            <td>{ageData.agePlusTwenty}</td>
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
        {data.topColours.map((colorData, index) => (
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
)}
</div>
  );
}

export default App;