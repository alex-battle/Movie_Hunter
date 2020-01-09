

let newSubmit= document.querySelector('.submitButton')
newSubmit.addEventListener('click', getMov)


function getMov(event){
    event.preventDefault()
    let search= document.querySelector(".searchBar").value
    console.log(search)
    

    let url = (`https://www.omdbapi.com/?t=${search}&apikey=9ef749a4`)
    console.log(url)
    

    let movieData= axios.get(url).then(res =>{
        console.log(res.data)

        let titleMovie= document.querySelector('#title')
        titleMovie.innerHTML=""
        titleMovie.append(res.data["Title"]);
    
        let yearMovie= document.querySelector('#year')
        yearMovie.innerHTML=""
        yearMovie.append(res.data["Year"]);
        let genreMovie= document.querySelector('#genre')
        genreMovie.innerHTML=""
        genreMovie.append(res.data["Genre"]);      
        let runtimeMovie= document.querySelector('#runtime')
        runtimeMovie.innerHTML="" 
        runtimeMovie.append(res.data["Runtime"]);
        let plotMovie= document.querySelector('#plot')
        plotMovie.innerHTML=""
        plotMovie.append(res.data["Plot"]);
        let poster= res.data["imdbID"]
        let url2 = (`https://img.omdbapi.com/?i=${poster}&h=350&apiKey=9ef749a4`)
        
        let moviePoster= document.querySelector('.poster')
        moviePoster.innerHTML=`
        <img src=${url2} />
        `
        // moviePoster.append(url2);

    })
}

