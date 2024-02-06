var res = fetch("https://data.covid19india.org/v4/min/data.min.json");
   
res.then((data)=>data.json()).then((data1)=>{
    for (var i in data1){
        var div = document.createElement("div");

        div.innerHTML = `
        <div class="card">
        <div class="card-body ">
          <h5 class="card-title">Total confirmed :  ${data1[i].total.confirmed}</h5>
          <h5 class="card-title">total Recovered : ${data1[i].total.recovered}</h5>

        </div>
      </div>`;
        document.body.append(div);
    }

   
});