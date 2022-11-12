let seriesList = document.getElementById(`seriesList`);
seriesList.style.listStyleType = `square`;
seriesList.style.color = `magenta`;

let seasons = document.getElementsByClassName(`seasons`);
for(i=0;i<seasons.length;i++){
    seasons[i].innerHTML += ` is really good!`
}

let images = document.querySelectorAll(`img`);
for(i=0;i<images.length;i++){
    images[i].setAttribute(`src`, `https://tvsourcemagazine.com/wp-content/uploads/2018/10/CAOS_Vertical_TeenageDream_PRE_US.jpg?is-pending-load=1`);
}

// 'for of' loop
// this is for instances when we don't care about the Index/what order the elements are in
// this is the same as the For loop we just don't care about the index counter in this case - adding something to all P Tags doesnt matter order
// use FOR OF loop unless you care specifically about the individual iterations
let allPTags = document.querySelectorAll(`p`);
for (const paragraph of allPTags) {
    //looking at const/variable 'paragraph', checking if paragraph.innertext contains something   
    if(paragraph.innerText.includes(`link`)){
        paragraph.insertAdjacentHTML(`beforeend`, 
                                    `<a href="https://www.imdb.com">IMDB</a>`);
    }
}

// the multiple selectors will always return(be wrapped in) an ARRAY
// the single selectors will return an OBJECT
// here is an example to see how it shows the same ID Gallery in the debugger
// I don't actually have an ID of gallery in this code but this is an example
// galleryALL shows an ARRAY and the other is an Object
// let galleryAll = document.querySelectorAll(`#gallery`);
// let galleryQuery = document.querySelector(`#gallery`);