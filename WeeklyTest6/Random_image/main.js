let button = document.getElementById('button');

button.addEventListener('click', () => {
    getImages()
})
getImages()
function getImages(){
    
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(res => res.json())
    .then((data) => {
        console.log(data)
        let content = document.getElementById('content')
        
        content.innerHTML = `<img src="${data.message}">`
        
    })
}