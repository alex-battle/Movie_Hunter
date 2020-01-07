

let newSubmit= document.querySelector('.submitButton')
newSubmit.addEventListener('click', getMov)

function getMov(event){
    event.preventDefault()
    let search= document.querySelector(".searchBar").value
    console.log(search)

    let url= (`http://www.omdbapi.com/?t=${search}&apikey=9ef749a4`)
    console.log(url)


    let movieData= axios.get(url).then(res =>{
        console.log(res.data)

        let appendMovie= document.querySelector('.movie-info')
        appendMovie.append(res.data["Title"]);
        appendMovie.append(res.data["Year"]);
        appendMovie.append(res.data["Genre"]);       
        appendMovie.append(res.data["Runtime"]);
        appendMovie.append(res.data["Plot"]);
    })

}