import React, { useState } from "react";
import FormPage from "./FormPage";
import DisplayPage from "./DisplayPage";
import "./index.css";
function App() {
  const [userDetails, setUserDetails] = useState(null);

  return (
    <div>
      {userDetails ? (
        <DisplayPage userDetails={userDetails} />
      ) : (
        <FormPage setUserDetails={setUserDetails} />
      )}
    </div>
  );
}

export default App;
