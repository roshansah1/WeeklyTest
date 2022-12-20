let button = document.getElementById('button')
let countryInput = document.getElementById('country')
let stateInput = document.getElementById('state')

button.addEventListener('click', () => {
  getUniversities()
})

stateInput.addEventListener('keyup' , (event) => {
  if(event.keyCode == 13){
    getUniversities()
  }
})

function getUniversities() {
  let card = document.getElementById('cards');
  card.innerHTML = `<h1> LOADING.... </h1>`
    let country = countryInput.value
    let state = stateInput.value
    state = capitalizeFirstLetter(state)
    fetch(`http://universities.hipolabs.com/search?country=${country}`)
    .then(res => res.json())
    .then((data) => {
      //console.log(data)
      card.innerHTML = ""
      for(let i = 0; i < data.length; i++){
       
        if(data[i]["state-province"] == state || data[i].name.toLowerCase().includes(state.toLowerCase())){
          
          let stateName = data[i]["state-province"];
          if(stateName == null){
            stateName = stateInput.value
          }
           
           let UniversityName = data[i].name;
           let UniversitySiteUrl = data[i].web_pages[0];

           card.innerHTML += `<div class="box"> 
           <p class="state_name"> State Name : ${stateName}</p>
           <p> University Name : ${UniversityName} </p>
           <p> University site URL : ${UniversitySiteUrl}</p>
       </div>`
        }
      }
         
        
        let copyData = [...data]
        //console.log(copyData)
        //copyData = copyData.filter((currData) => {
          //console.log(currData["state-province"])
            //for(let i = 0 ; i < currData.length; i++){
            //console.log(currData)
            // let stateList = currData["state-province"]
            // if(stateList.includes(state)){
            //   let stateName = currData["state-province"];
            //   let UniversityName = currData.name;
              //let UniversitySiteUrl = currData.web_pages[0]
             // console.log(stateName, UniversityName)
            //}
        //}
            
       // })
    })
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

