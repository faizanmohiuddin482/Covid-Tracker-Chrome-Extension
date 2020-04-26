fetch('https://corona.lmao.ninja/v2/all')
.then(response=>{
   return response.json()
})
.then(data =>{
    console.log(data);
    document.getElementById('totalDeaths').textContent += data.deaths
    document.getElementById('totalcases').textContent += data.cases
    document.getElementById('recovered').textContent += data.recovered
})
