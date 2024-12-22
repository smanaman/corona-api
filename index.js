let searchbtn = document.getElementById('search');
let searchBar = document.getElementById('searchBar');
let body = document.getElementById('root');
let carddiv = document.getElementById('cardsection');
let mapdata;  // Make mapdata globally accessible

let totalCon = document.getElementById('total-Confirmed');
let confirmedindian = document.getElementById('confirmed-CasesIndian');
let Discharged = document.getElementById('Discharged');
let Deaths = document.getElementById('Deaths');
let cityname = document.getElementById('ststename');
let photos = document.getElementById('photos');
let headingone = document.getElementById('infotext');
let headingtwo = document.getElementById('infotext-two');
let headingthree = document.getElementById('infotext-three');

// Fetch data from db.json
fetch('db.json')
  .then((res) => res.json())
  .then((data) => {
  mapdata = data.data.regional;  
console.log(data.data.summary);

  let topdata=data.data.summary


 headingone.textContent=topdata.total
 headingtwo.textContent=topdata.discharged
 headingthree.textContent=topdata.deaths


// console.log(ele);




searchbtn.addEventListener('click', (event) => {
  event.preventDefault();


  let userInput = searchBar.value.toLowerCase();
  console.log(userInput);

  let result = mapdata.filter(val => val.loc.toLowerCase().includes(userInput));
  console.log(result);

  if (result.length === 0) {
    body.innerHTML = `<span style="color: red"> Not Found </span>`;
  } else {
    result.forEach((e)=>{
      photos.src=e.img
      cityname.textContent=e.loc
      totalCon.textContent=`totalConfirmed${e.totalConfirmed}`
      confirmedindian.textContent=`Confirmed ${e.confirmedCasesIndian}`
      Discharged.textContent=`Discharged:${e.discharged}`
      Deaths.textContent=`Deaths:${e.deaths}`

    })  
  }
});
});