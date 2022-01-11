function exploreIndiaList() {

    // glide ul within Explore India
    let ul = document.getElementsByClassName('explore-india-glide')[0].getElementsByClassName("glide__slides")[0];

    // json call using xmlHttpRequest
    let jsonObj;
    let xmlhttp = new XMLHttpRequest();

    xmlhttp.overrideMimeType("application/json");
    xmlhttp.open('GET' , 'assets/data/exploreIndia.json' , false);
    xmlhttp.onreadystatechange = function() {
        xmlhttp.onload = function() {
            jsonObj = JSON.parse(this.responseText);

            // creating dom element node for each slide to be implemented
            for( var i = 0 ; i < jsonObj.length ; i++ ) {
                
                let li = document.createElement('li');
                li.classList.add('glide__slide');

                let glideWrapper = document.createElement('div');
                glideWrapper.classList.add('glide-wrapper');
                li.append(glideWrapper);

                let glideImage = document.createElement('div');
                glideImage.classList.add('glide-image');
                let glideContent = document.createElement('div');
                glideContent.classList.add('glide-content');
                glideWrapper.append(glideImage, glideContent);

                let image = document.createElement('img');
                image.alt = jsonObj[i].image.alt;
                image.title = jsonObj[i].image.title;
                image.src = "assets/img/"+jsonObj[i].image.name;
                glideImage.appendChild(image);

                let name = document.createElement('h3');
                name.innerHTML = jsonObj[i].name;
                let desc = document.createElement('p');
                desc.innerHTML = jsonObj[i].desc;
                let anchor = document.createElement('a');
                anchor.href = jsonObj[i].link.src;
                anchor.innerHTML = jsonObj[i].link.text;
                glideContent.append(name, desc, anchor);

                ul.append(li);
            }
        }
    }
    xmlhttp.send(null);
    // calling for glide slider
    exploreIndiaGlide();
}
// explore india glide function
function exploreIndiaGlide() {
    new Glide('.glide.explore-india-glide', {
        focusAt: 0,
        autoplay: 3000,
        perView: 3,
        bound: true,
        gap: 0,
        peek: {
            before: 50,
            after: 50
        }
    }).mount()
}

// event listener when document is loaded correctly
document.addEventListener('DOMContentLoaded', function(event){

    //dynamic slide load function for 'Explore India'
    exploreIndiaList();
});