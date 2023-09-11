import React, { useState, useEffect } from "react";
import ApiDataDisplay from "./Components/ApiDataDisplay";
import { AgeData, TopColourData } from "./Shared/DataTypes";

interface ApiResponse {
  ages: AgeData[];
  topColours: TopColourData[];
}

function App() {
  const [data, setData] = useState<ApiResponse | null>(null);
  const [error, setError] = useState(null);
  const [fetching, setFetching] = useState(false);

  // Function to fetch data from the API
  const fetchData = () => {
    setFetching(true); // Set fetching to true while waiting for the API response
    fetch("https://localhost:7125/api/Users/UserData")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
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
    !fetching && fetchData();
  }, []);

  return (
    <div>
      <h1>Highfield Recruitment Task</h1>

      {/*Display "loading" when fetching data*/}
      {fetching && (
        <div className="spinner-border text-info" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}

      {/* Display an error message if there's an error */}
      {error && (
        <div className="alert alert-danger" role="alert">
          Error: {error}
        </div>
      )}

      {/* Display the data if it's available */}
      {data && <ApiDataDisplay data={data} />}
    </div>
  );
}

export default App;
