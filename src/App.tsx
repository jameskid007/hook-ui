import Space from "./Space";
import './App.css';
import { ConfigContext } from "./Space/ConfigProvider";

function App() {
  return (
    <div className="App">
      {
        <ConfigContext.Provider value={{ space: { size: 20 } }}>
          <Space direction="horizontal">
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
          </Space>
          <Space direction="vertical">
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
          </Space>
        </ConfigContext.Provider>
      }
    </div >
  )
}
export default App;
