import React from "react";
import Home from "./pages/home";
/*
left the boilerplate useEffect just in case
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);
*/

function App() {

  return (

          <Home />
  );
}

export default App;