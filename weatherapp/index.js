const http = require("http");
const fs = require("fs");
const requests = require("requests");
const homeFile = fs.readFileSync("home.html", "utf-8");

const replaceVal = (tempVal, orgVal) => {
  let temperature = tempVal.replace("{%tempval%}", orgVal.main.temp);
  temperature = temperature.replace("{%tempmin%}", orgVal.main.temp_min);
  temperature = temperature.replace("{%tempmax%}", orgVal.main.temp_max);
  temperature = temperature.replace("{%location%}", orgVal.name);
  temperature = temperature.replace("{%country%}", orgVal.sys.country);
  temperature = temperature.replace("{%tempstatus%}", orgVal.weather[0].main);
  return temperature;
};

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    requests(
      "https://api.openweathermap.org/data/2.5/weather?q=Pune&appid=4749b6c36d5d72b64fddf269713c4033"
    )
      .on("data", (chunk) => {
        const objData = JSON.parse(chunk);
        const arrData = [objData];
        // console.log(arrData);
        // console.log(arrData[0].main.temp)
        const realTimeData = arrData
          .map((val) => replaceVal(homeFile, val))
          .join("");
        console.log(realTimeData);
        res.write(realTimeData);
      })
      .on("error", (err) => {
        console.error("Error:", err.message);
        res.end();
      });
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Server is listening on port 8000");
});
