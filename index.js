function getAQIData ()
{
let cityname = document.getElementById("cityname").value
let data = {
      token: '1da9dce8ae71f6bc76a023695e8c1ffc4e5f41c9',
      callback: "processData"
}
let url = `https://api.waqi.info/feed/${encodeURIComponent(cityname)}/`;
webServiceRequest(url,data);
}


 function processData(result)
 {
   if(result.status == "error" || typeof  result.data.aqi === "undefined"|| typeof result.data.iaqi.pm25 === "undefined")
   {
     alert("API call is unsuccessful or there is no data available on the input you provided")
 }
 else{
   //getting outputarea
let outputarearef = document.getElementById("output");
//conditions to set color of table
let color ="white";
if(result.data.aqi>=0 && result.data.aqi<=50)
{color = "green";}
else if (result.data.aqi>=51 && result.data.aqi<=100)
{color = "yellow";}
else if (result.data.aqi>=101  && result.data.aqi<=150)
{color = "orange";}
else if (result.data.aqi>=151   && result.data.aqi<=200)
{color = "red";}
else if (result.data.aqi>=201  && result.data.aqi<=300)
{color = "purple";}
else if (result.data.aqi>=301  && result.data.aqi<=500)
{color = "maroon";}


//printing table in html
  let output =`          <table class="mdl-data-table mdl-js-data-table" style="background-color: ${color}">
              <thead>
                <tr>
                  <th class="mdl-data-table__cell--non-numeric">AQI (Air Quality Index)</th>
                  <th>PM2.5</th>
              </thead>
              <tbody>
              </tr>
              <tr>
                <td>${result.data.aqi}</td>
                <td>${result.data.iaqi.pm25.v}</td>
              </tr>
              </tbody>
            </table>`
outputarearef.innerHTML = output;
 }
}
