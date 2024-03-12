// select movie poster original image
// let annab teada arvutile, et on vaja vahemälus ruumi teha
let moviePoster = document.querySelector(".movie-poster");  // kuna klassi nimi, siis panna punkt

// select modal-window layer
let modal = document.querySelector("#myModal");

//nupuke mis paneb akna kinni
let closeBtn= document.querySelector(".closeBTN");
console.log(closeBtn);

// valida modal window image
let modalImage = document.querySelector(".movie-poster-modal");


//et movieposter reageeriks klikile 
moviePoster.addEventListener("click", ()=> {
       modal.style.display = 'block';
       modalImage.src = moviePoster.src;

});

// et ristist kinni panna 
closeBtn.addEventListener("click", ()=> {
    modal.style.display = 'none';
});

//kui tahaks kinni panna alumise ala, ehk tumedama 
window.addEventListener ("click", (event)=> {
   if(event.target === modal) {
    modal.style.display = 'none';
   }
});
