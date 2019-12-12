
 //Fetch Aegon

 fetch('https://www.anapioficeandfire.com/api/characters/38')
 .then(result => result.json())
 .then((res) => {
 displayAegon(res);
 })
 .catch(err => console.log(err))
 
 function displayAegon(result){
 

     
     var charName = document.getElementById('aegonMod');
     charName.innerHTML += "<span> " + result.name + "</span>"; 

     var chartitle = document.getElementById('aegonTitle');
     chartitle.innerHTML += "<span> Title: " + result.titles[0] + "</span>";
     
     var charBorn = document.getElementById('aegonBorn');
     charBorn.innerHTML += "<span> Born: " + result.born + "</span>";  
 
     var charAlias = document.getElementById('aegonAlias');
     charAlias.innerHTML += "<span> Alias: " + result.aliases[0] + "</span>";

     }

    
 //Fetch Arya

 fetch('https://anapioficeandfire.com/api/characters/148')
 .then(result => result.json())
 .then((res) => {
 displayArya(res);
 })
 .catch(err => console.log(err))
 
 function displayArya(result){
 
    

     var charName = document.getElementById('aryaMod');
     charName.innerHTML += "<span> " + result.name + "</span>"; 
     
    var chartitle = document.getElementById('aryaTitle');
    chartitle.innerHTML += "<span> Title: " + result.titles[0] + "</span>";

    var charBorn = document.getElementById('aryaBorn');
    charBorn.innerHTML += "<span> Born: " + result.born + "</span>";    

    var charAlias = document.getElementById('aryaAlias');
    charAlias.innerHTML += "<span> Alias: " + result.aliases[1] + "</span>";
     
     }


 //Fetch Cersei

 fetch('https://anapioficeandfire.com/api/characters/238')
 .then(result => result.json())
 .then((res) => {
 displayCersei(res);
 })
 .catch(err => console.log(err))
 
 function displayCersei(result){
 
     
     var charName = document.getElementById('cerseiMod');
     charName.innerHTML += "<span> " + result.name + "</span>";
     
    var chartitle = document.getElementById('cerseiTitle');
    chartitle.innerHTML += "<span> Title: " + result.titles[0] + "</span>";

    var charBorn = document.getElementById('cerseiBorn');
    charBorn.innerHTML += "<span> Born: " + result.born + "</span>";    

    var charAlias = document.getElementById('cerseiAlias');
    charAlias.innerHTML += "<span> Alias: " + result.aliases + "</span>"; 
     }


// Fetch Daenerys
fetch ('https://anapioficeandfire.com/api/characters/1303')
.then(result => result.json())
.then((res) => {
displayDany(res);
})
.catch(err => console.log(err))

function displayDany(result){


    var charName = document.getElementById('danyMod');
    charName.innerHTML += "<span> " + result.name + "</span>";

    var chartitle = document.getElementById('danyTitle');
    chartitle.innerHTML += "<span> Title: " + result.titles[1] + "</span>";

    var charBorn = document.getElementById('danyBorn');
    charBorn.innerHTML += "<span> Born: " + result.born + "</span>";    

    var charAlias = document.getElementById('danyAlias');
    charAlias.innerHTML += "<span> Alias: " + result.aliases[1] + "</span>";
     

    }


//Fetch Eddard

fetch('https://anapioficeandfire.com/api/characters/339')
.then(result => result.json())
.then((res) => {
displayEddard(res);
})
.catch(err => console.log(err))

function displayEddard(result){


    var charName = document.getElementById('eddardMod');
    charName.innerHTML += "<span> " + result.name + "</span>";

    var chartitle = document.getElementById('eddardTitle');
    chartitle.innerHTML += "<span> Title: " + result.titles[1] + "</span>"; 

    var charBorn = document.getElementById('eddardBorn');
    charBorn.innerHTML += "<span> Born: " + result.born + "</span>";  
    
    var charAlias = document.getElementById('eddardAlias');
    charAlias.innerHTML += "<span> Alias: " + result.aliases[0] + "</span>";
    }


 //Fetch Jaime

 fetch('https://anapioficeandfire.com/api/characters/529')
 .then(result => result.json())
 .then((res) => {
 displayJaime(res);
 })
 .catch(err => console.log(err))
 
 function displayJaime(result){
 
    
     var charName = document.getElementById('jaimeMod');
     charName.innerHTML += "<span> " + result.name + "</span>"; 
     
     var chartitle = document.getElementById('jaimeTitle');
     chartitle.innerHTML += "<span> Title: " + result.titles[1] + "</span>";

     var charBorn = document.getElementById('jaimeBorn');
     charBorn.innerHTML += "<span> Born: " + result.born + "</span>";  
 
     var charAlias = document.getElementById('jaimeAlias');
     charAlias.innerHTML += "<span> Alias: " + result.aliases[1] + "</span>";
     }


//Fething Jon
fetch('https://anapioficeandfire.com/api/characters/583')
.then(result => result.json())
.then((res) => {
displayJon(res);
})
.catch(err => console.log(err))


function displayJon(result){


var charName = document.getElementById('jonMod');
charName.innerHTML += "<span> " + result.name + "</span>";

var chartitle = document.getElementById('jonTitle');
chartitle.innerHTML += "<span> TITLE: " + result.titles + "</span>";

var charBorn = document.getElementById('jonBorn');
charBorn.innerHTML += "<span> Born: " + result.born + "</span>";

var charAlias = document.getElementById('jonAlias');
charAlias.innerHTML += "<span> Alias: " + result.aliases[1] + "</span>";

}



    //Fetch Stannis
    fetch('https://anapioficeandfire.com/api/characters/1963')
.then(result => result.json())
.then((res) => {
displayStannis(res);
})
.catch(err => console.log(err))

function displayStannis(result){

    
    var charName = document.getElementById('stannisMod');
   charName.innerHTML += "<span> " + result.name + "</span>";

   var chartitle = document.getElementById('stannisTitle');
   chartitle.innerHTML += "<span> TITLE: " + result.titles[1] + "</span>";
   
   var charBorn = document.getElementById('stannisBorn');
   charBorn.innerHTML += "<span> Born: " + result.born + "</span>";
   
   var charAlias = document.getElementById('stannisAlias');
   charAlias.innerHTML += "<span> Alias: " + result.aliases[0] + "</span>";   
    }

  

    //Fetch Theon

    fetch('https://anapioficeandfire.com/api/characters/1022')
    .then(result => result.json())
    .then((res) => {
    displayTheon(res);
    })
    .catch(err => console.log(err))
    
    function displayTheon(result){
    
        
        var charName = document.getElementById('theonMod');
        charName.innerHTML += "<span> " + result.name + "</span>";
        
        var chartitle = document.getElementById('theonTitle');
        chartitle.innerHTML += "<span> Title: " + result.titles[0] + "</span>";
    
        var charBorn = document.getElementById('theonBorn');
        charBorn.innerHTML += "<span> Born: " + result.born + "</span>";    
    
        var charAlias = document.getElementById('theonAlias');
        charAlias.innerHTML += "<span> Alias: " + result.aliases[1] + "</span>";
        
        }


       //Fetch Tyrion

 fetch('https://anapioficeandfire.com/api/characters/1052')
 .then(result => result.json())
 .then((res) => {
 displayTyrion(res);
 })
 .catch(err => console.log(err))
 
 function displayTyrion(result){
 

     var charName = document.getElementById('tyrionMod');
     charName.innerHTML += "<span> " + result.name + "</span>"; 
     
     var chartitle = document.getElementById('tyrionTitle');
    chartitle.innerHTML += "<span> Title: " + result.titles[0] + "</span>";

    var charBorn = document.getElementById('tyrionBorn');
    charBorn.innerHTML += "<span> Born: " + result.born + "</span>";    

    var charAlias = document.getElementById('tyrionAlias');
    charAlias.innerHTML += "<span> Alias: " + result.aliases[0] + "</span>"; 
     
     }






     


    