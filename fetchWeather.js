const apiKey="c0e184e891c630aa9e4e240491df4779";
const url="https://api.openweathermap.org/data/2.5/weather?q=${Chengdu}&appid=${apiKey}&units=metric";

const outputParagraph = document.getElementById("output");

fetch(url)
  .then(response=>{
    return response.json()
  })
  .then(data => {
      console.log(JSON.stringify(data,null,2));
      console.log(data.current.condition.text);
      console.log(data.current.wind_mph);
      outputParagraph.textContent = data.current.condition.text;
  })



