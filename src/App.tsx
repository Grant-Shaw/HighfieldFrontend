import React, { useState, useEffect } from 'react';
import ApiDataDisplay from './Components/ApiDataDisplay'; // Adjust the path as needed

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
          throw new Error('Network response was not ok');
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
      {data && <ApiDataDisplay ageData={data.ages} topColourData={data.topColours} />}
    </div>
  );
}

export default App;
