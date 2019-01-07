const modal = document.getElementById('myModal');


const el = document.getElementById("scroll-down-intro");

const button = document.getElementsByClassName("myBtn");


if(el){
  el.addEventListener('click', scrollDown, false);
}



function scrollDown(event) {
  window.scrollBy({
  top: 910,
  left: 0,
  behavior: 'smooth'
});
}


function templater(strings, ...keys) {
    return function(data) {
        let temp = strings.slice();
        keys.forEach((key, i) => {
            temp[i] = temp[i] + data[key];
        });
        return temp.join('');
    }
};


const modalTemplate = templater`
  <div id="myModal" class="modal">
  <div class="modal-content">
    <span id="close-modal">&times;</span>
    <p>${'name'}</p>
    <ul>
    <li>${'song1'}</li>
    <li>${'song2'}</li>
    <li>${'song3'}</li>
    <li>${'song4'}</li>
    <li>${'song5'}</li>
    </ul>
  </div>
</div>`;










const savage = {
    name: "21 Savage",
    song1: "Bank Account",
    song2: "X",
    song3: "No Heart",
    song4: "Savage Mode",
    song5: "Ocean Drive"
}

const asap = {
    name: "A$AP Rocky",
    song1: "RAF",
    song2: "A$AP Forever",
    song3: "Yamborghini High",
    song4: "Crazy Hair",
    song5: "Fashion Guy"
}

const cardi = {
    name: "Cardi B",
    song1: "Gold on Me",
    song2: "Motorsport",
    song3: "Run Run",
    song4: "Cardi Cardi",
    song5: "Ice Ice"
}

const drake = {
    name: "Drake",
    song1: "Know Yourself",
    song2: "KMT",
    song3: "Nonstop",
    song4: "Jumpman",
    song5: "Look Alive"
}

const giggs = {
    name: "Giggs",
    song1: "Active",
    song2: "Swingin in the Whip",
    song3: "Ultimate Gangsta",
    song4: "Whippen Excursion",
    song5: "Lock Doh"
}

const kodak = {
    name: "Kodak Black",
    song1: "Tunnel Vision",
    song2: "Roll in Peace",
    song3: "ZEZE",
    song4: "Lock Jaw",
    song5: "Drowning"
}

const wayne = {
    name: "Lil Wayne",
    song1: "A Milli",
    song2: "I'm on one",
    song3: "Uproar",
    song4: "Mona Lisa",
    song5: "Scared of the Dark"
}

const meek = {
    name: "Meek Mill",
    song1: "Litty",
    song2: "Going Bad",
    song3: "On Me",
    song4: "What's Free",
    song5: "Uptown Vibes"
}

const minaj = {
    name: "Nicki Minaj",
    song1: "Woman Like Me",
    song2: "Familia",
    song3: "Dip",
    song4: "Barbie Dreams",
    song5: "Run & Hide"
}

const rich = {
    name: "Rich the Kid",
    song1: "Plug Walk",
    song2: "Splashin",
    song3: "Talk to Me",
    song4: "Crazy Guy",
    song5: "On the Run"
}

const tory = {
    name: "Tory Lanez",
    song1: "Here I am",
    song2: "Over There",
    song3: "Milestone",
    song4: "Broken Sneaks",
    song5: "Top Runner"
}

const travis = {
    name: "Travis Scott",
    song1: "Through the Late Night",
    song2: "Butterfly Effect",
    song3: "Antidote",
    song4: "Beibs in the Trap",
    song5: "Sweet Sweet"
}





const startModal = function() {
    
    let myArtist = this.getAttribute("data-id"); 
    
    
    
    
    // Popup Boxes (DOM Manipulation) 
    if(myArtist == "savage"){ 
        
            const myModal = modalTemplate(savage); 
        
            document.getElementById('modal-holder').innerHTML = myModal;
            const closeModal = document.getElementById("close-modal");
            if(closeModal){
                closeModal.addEventListener('click', modalClose, false);
            }  
    }
   
    
     // Popup Boxes (DOM Manipulation)
    if(myArtist == "asap"){ 
        
            const myModal = modalTemplate(asap); 
        
            document.getElementById('modal-holder').innerHTML = myModal;
            const closeModal = document.getElementById("close-modal");
            if(closeModal){
                closeModal.addEventListener('click', modalClose, false);
            }  
    }
     
    
    
    
    // Popup Boxes (DOM Manipulation) 
    if(myArtist == "cardi"){  
        
            const myModal = modalTemplate(cardi); 
        
            document.getElementById('modal-holder').innerHTML = myModal;
            const closeModal = document.getElementById("close-modal");
            if(closeModal){
                closeModal.addEventListener('click', modalClose, false);
                
            } 
    }
   
    
     // Popup Boxes (DOM Manipulation) 
    if(myArtist == "drake"){ 
        
            const myModal = modalTemplate(drake); 
        
            document.getElementById('modal-holder').innerHTML = myModal;
            const closeModal = document.getElementById("close-modal");
            if(closeModal){
                closeModal.addEventListener('click', modalClose, false);
            }  
    }
   
    

     // Popup Boxes (DOM Manipulation) 
    if(myArtist == "drake"){ // change artist name here 
        
            const myModal = modalTemplate(drake); // change name to artist in these brackets!
        
            document.getElementById('modal-holder').innerHTML = myModal;
            const closeModal = document.getElementById("close-modal");
            if(closeModal){
                closeModal.addEventListener('click', modalClose, false);
            }  
    }
    
    
    
     // Popup Boxes (DOM Manipulation) 
    if(myArtist == "giggs"){ 
        
            const myModal = modalTemplate(giggs); 
        
            document.getElementById('modal-holder').innerHTML = myModal;
            const closeModal = document.getElementById("close-modal");
            if(closeModal){
                closeModal.addEventListener('click', modalClose, false);
            }  
    }
    
    
     // Popup Boxes (DOM Manipulation) 
    if(myArtist == "kodak"){ 
        
            const myModal = modalTemplate(kodak); 
        
            document.getElementById('modal-holder').innerHTML = myModal;
            const closeModal = document.getElementById("close-modal");
            if(closeModal){
                closeModal.addEventListener('click', modalClose, false);
            }  
    }
   
    
     // Popup Boxes (DOM Manipulation)
    if(myArtist == "wayne"){ 
        
            const myModal = modalTemplate(wayne); 
        
            document.getElementById('modal-holder').innerHTML = myModal;
            const closeModal = document.getElementById("close-modal");
            if(closeModal){
                closeModal.addEventListener('click', modalClose, false);
            }  
    }
    
    
     // Popup Boxes (DOM Manipulation)
    if(myArtist == "meek"){ 
        
            const myModal = modalTemplate(meek); 
        
            document.getElementById('modal-holder').innerHTML = myModal;
            const closeModal = document.getElementById("close-modal");
            if(closeModal){
                closeModal.addEventListener('click', modalClose, false);
            }  
    }
   

     // Popup Boxes (DOM Manipulation) 
    if(myArtist == "minaj"){
        
            const myModal = modalTemplate(minaj); 
        
            document.getElementById('modal-holder').innerHTML = myModal;
            const closeModal = document.getElementById("close-modal");
            if(closeModal){
                closeModal.addEventListener('click', modalClose, false);
            }  
    }
   
    
   // Popup Boxes (DOM Manipulation)
    if(myArtist == "rich"){ 
        
            const myModal = modalTemplate(rich); 
        
            document.getElementById('modal-holder').innerHTML = myModal;
            const closeModal = document.getElementById("close-modal");
            if(closeModal){
                closeModal.addEventListener('click', modalClose, false);
            }  
    }
    
    
  // Popup Boxes (DOM Manipulation)
    if(myArtist == "tory"){ 
        
            const myModal = modalTemplate(tory); 
        
            document.getElementById('modal-holder').innerHTML = myModal;
            const closeModal = document.getElementById("close-modal");
            if(closeModal){
                closeModal.addEventListener('click', modalClose, false);
            }  
    }
    
    
     // Popup Boxes (DOM Manipulation)
    if(myArtist == "travis"){ 
        
            const myModal = modalTemplate(travis); 
        
            document.getElementById('modal-holder').innerHTML = myModal;
            const closeModal = document.getElementById("close-modal");
            if(closeModal){
                closeModal.addEventListener('click', modalClose, false);
            }  
    }
 
    
    
    

    
    

}; 

Array.from(button, c => c.addEventListener('click', startModal));


function modalClose (event){
    document.getElementById("myModal").remove();
}


/*JSON API CODE*/

"use strict";

(function(){
  // creates a new object called xhr
  // which will handle the API call
  let xhr = new XMLHttpRequest();
  // console.log(`Current readyState: ${xhr.readyState}`);

  let queryBox = document.getElementById("wikiQuery");
  let searchForm = document.getElementById("searchForm");
  let demoJSON = document.getElementById("demo");

  // constructs the base for the request url
  let baseURL = "https://en.wikipedia.org/w/api.php? \
                format=json& \
                action=query& \
                generator=search& \
                gsrnamespace=0& \
                gsrlimit=10& \
                prop=info|extracts|langlinks|pageimages& \
                inprop=url& \
                exintro& \
                explaintext& \
                exsentences=1& \
                exlimit=max& \
                llprop=url& \
                lllimit=max& \
                piprop=thumbnail|name& \
                origin=*& \
                gsrsearch=";

/*
API Sandbox url
https://en.wikipedia.org/wiki/Special:ApiSandbox#action=query&format=json&generator=search&prop=extracts%7Clanglinks%7Cpageimages&gsrlimit=10&gsrnamespace=0&exintro&explaintext&exsentences=1&exlimit=max&llprop=url&lllimit=max&piprop=thumbnail|name&origin=*&gsrsearch=kittens

Request url
https://en.wikipedia.org/w/api.php?action=query&format=json&generator=search&prop=extracts%7Clanglinks%7Cpageimages&gsrlimit=10&gsrnamespace=0&exintro&explaintext&exsentences=1&exlimit=max&llprop=url&lllimit=max&piprop=thumbnail|name&origin=*&gsrsearch=kittens
*/

  function gatherData(data) {
     console.log(data);
    // initialise some variables
    let theData = "";
    let langLinks = "";
    let img = "<img>";
    const languages = ["en", "de", "zh", "fr", "es", "ja", "ar", "ko", "el"];
    let k;
    let key;
    // loop through the result pages by pageid
    for(key in data.query.pages) {
      let tmp = data.query.pages[key];
      if (tmp.thumbnail) {
        img = `<img src="${tmp.thumbnail.source}" alt="${tmp.title}"> `;
      }
      let title = `<strong><a href="${tmp.fullurl}" target="_blank">${tmp.title}</a></strong>`;
      let extract = `<span class="txt">${tmp.extract}</span>`;
      let langLinks = "";
      for (k in tmp.langlinks) {
        if (languages.includes(tmp.langlinks[k].lang)) {
          langLinks += `<a href=${tmp.langlinks[k].url}>${tmp.langlinks[k].lang}</a> `;
        }
      }
      theData += `<li>${img} ${title} ${extract} <span class="langs">${langLinks}</span></li>`;
    }
    demoJSON.innerHTML = theData;
    var listOfLi = document.getElementById("demo").getElementsByTagName("li");
    if(listOfLi.length != 0) {
        listOfLi[0].scrollIntoView();
    }
  }

  // the API call is triggered once the user submits a query
  searchForm.addEventListener("submit", function(ev){
    // complete the request url
    let wiki = baseURL + queryBox.value;
    // open a connection to the requested API url
    xhr.open("GET", wiki, true);
    // be polite to Wikipedia
    xhr.setRequestHeader('Api-User-Agent', 'Example/1.0');
    // send off that request
    xhr.send();
    // if the response was ok, handle the response data using the gatherData function
    xhr.onreadystatechange = function() {
      // console.log(`Current readyState: ${xhr.readyState}`);
      if (xhr.readyState === 4 && xhr.status === 200) {
        // parse the response JSON
        let response = JSON.parse(xhr.responseText);
        // deal with the parsed JSON data
        gatherData(response);
      }
    };
    // clear the search box
    queryBox.value = "";
    ev.preventDefault();
  }, false);

}());


/*END OF JSON API CODE*/
