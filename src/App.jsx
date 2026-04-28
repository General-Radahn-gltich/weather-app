import Card from "./components/Card";
import Input from "./components/Input";
import Button from "./components/Button";
import { WeatherProvider } from "./Context/Weather";
import "./App.css";

function App() {
  return (
    <WeatherProvider>
      <div className="App">
        <h1>Weather Forecast</h1>
        <Input />
        <Button value="Search" />
        <Card />
        <Button value="Refresh" />
      </div>
    </WeatherProvider>
  );
}

export default App;