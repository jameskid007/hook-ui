import dayjs, { Dayjs } from "dayjs";
import Calendar from "./Calendar";


function App() {
  return (
    <div className="App">
      <Calendar value={dayjs("2021-01-01")} locale="en-US"></Calendar>
    </div>
  )
}
export default App;
