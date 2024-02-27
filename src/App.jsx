import "./App.css";
import Input from "./components/Input";
import { useState } from "react";

function App() {
  const [city, setCity] = useState("");
  return (
    <div>
      <Input city={city} setCity={setCity} />
    </div>
  );
}

export default App;
