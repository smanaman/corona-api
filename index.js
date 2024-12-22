let searchbtn = document.getElementById('search');
let searchBar = document.getElementById('searchBar');
let body = document.getElementById('root');

let mapdata;  // Make mapdata globally accessible

// Fetch data from db.json
fetch('db.json')
  .then((res) => res.json())
  .then((data) => {
  mapdata = data.data.regional;  

   Cards(mapdata);  
  });

function Cards(data) {
  body.innerHTML = '';  

  data.forEach((e) => {
    body.innerHTML += `
      <div class="map">
        <div class="stateimg">
          <img src="${e.img}" alt="${e.loc}" width="90%" height="80%">
        </div>
        <div id="state_name">
          <h2>${e.loc}</h2>
        </div>
        <div class="About">
        <div class="aboutsecond">
          <div id="total-Confirmed">Total Confirmed: ${e.totalConfirmed}</div>
          <div id="confirmed-CasesIndian">Confirmed (Indian): ${e.confirmedCasesIndian}</div>
          <div id="Discharged">Discharged: ${e.discharged}</div>
          <div id="Deaths">Deaths: ${e.deaths}</div>
        </div>
        </div>
      </div>`;
  });
}

searchbtn.addEventListener('click', (event) => {
  event.preventDefault();

  let userInput = searchBar.value.toLowerCase();
  console.log(userInput);

  let result = mapdata.filter(val => val.loc.toLowerCase().includes(userInput));
  console.log(result);

  if (result.length === 0) {
    body.innerHTML = `<span style="color: red"> Not Found </span>`;
  } else {
    Cards(result);  
  }
});
