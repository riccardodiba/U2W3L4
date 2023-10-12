fetch ("https://api.pexels.com/v1/search?query=value",{
    headers:{
     Authorization:["IlULXLqTyrWkKuEXwiM5DcqVX8upmqUKEaFAbkWJnvrJNjveKwKvlPV7"]
    }
})
.then ((api) => {
    if(api.ok) {
        console.log("api success",api)
        return api.json ()
    }else{
        console.log("errore ")
    }
    })

    .catch((errore) => {
        console.log("errore",errore)
    })


    fetch ("https://api.pexels.com/v1/search?query=montagna",{
    headers:{
     Authorization:["IlULXLqTyrWkKuEXwiM5DcqVX8upmqUKEaFAbkWJnvrJNjveKwKvlPV7"]
    }
})
.then ((api) => {
    if(api.ok) {
        console.log("api success",api)
        return api.json ()
    }else{
        console.log("errore ")
    }
    })

    .catch((errore) => {
        console.log("errore",errore)
    })

const btnLoadImg = document.getElementById ("load");

const loadImg = function(images) {
    const imgContainer = document.getElementById("img-container")
    images.photos.forEach((photo) => {
    const newCol = document.createElement('div')
        newCol.innerHTML = `
    <div class="card">
        <img src="${photo.src.small}" class="card-img-top" alt="${photo.alt}">
        <div class="card-body">
            <h5 class="card-title">${photo.alt}</h5>
            
        </div>
    </div>
    `
    imgContainer.appendChild(col)
    });
        
    };


