import "./App.css";
import { BarChart, Bar, XAxis, Tooltip } from "recharts";
const App = () => {
  var data = require("./data.json");
  return (
    <div className="app">
      <div className="container">
        <div className="wrapper">
          <div className="top">
            <div className="balance">
              <p className="mybalance">My balance</p>
              <p className="price">$921.48</p>
            </div>
            <div className="circle">
              <div className="hallowcircle"></div>
              <div className="fillcircle"></div>
            </div>
          </div>
          <div className="main">
            <div className="mainContainer">
              <div className="week">
                <h2 className="seven">Spending - Last 7 days</h2>
              </div>
              <div className="chartDiv">
                <BarChart width={380} height={200} data={data}>
                  <XAxis dataKey="day" />
                  <Tooltip />
                  <Bar
                    dataKey="amount"
                    fill="#EC775F"
                    barSize={40}
                    radius={5}
                  />
                </BarChart>
              </div>
              <hr style={{ marginTop: "10px", opacity: "0.3" }} />
            </div>
            <div className="bottom">
              <div className="monthly">
                <p className="total">Total this month</p>
                <h1 className="monthlyPrice">$478.33</h1>
              </div>
              <div className="profit">
                <p className="percentage">+2.4%</p>
                <p className="lastmonth">from last month</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
