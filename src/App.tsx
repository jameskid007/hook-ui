import dayjs from "dayjs";
import Calendar from "./Calendar";

function App() {
  return (
    <div className="App">
      <Calendar value={dayjs("2021-01-01")}></Calendar>
    </div>
  )
}
export default App;
