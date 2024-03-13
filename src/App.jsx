import "./App.css";
import Form from "./components/Form.jsx";
import { background } from "./utils.jsx";
import { ResponseContext } from "./context/ResponseProvider.jsx";
import React, { useContext } from "react";

function App() {
  const { data } = useContext(ResponseContext);

  if (data && data.list && data.list[0] && data.list[0].weather[0].icon) {
    const iconUrl = background(data.list[0].weather[0].icon);
    document.body.style.backgroundImage = `url(${iconUrl})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";
  }

  return (
    <div>
      <Form />
    </div>
  );
}

export default App;
