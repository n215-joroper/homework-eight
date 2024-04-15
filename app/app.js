var homeContent = ``;

var placesContent = ``;

var peopleContent = ``;

var contactContent = ``

function initListeners() {

    //(e = event) => arrowfunction
    $("nav a").on("click", (e) =>{
        let btnID = e.currentTarget.id;
        loadContent(btnID);
       //console.log(pageContent)
        //console.log("button id " + btnID)
        
    })
}

loadContent = (pageName) => {
    // let pageContent = pageName + "Content"   
    //.html means anything inside of app will get wiped out
    

    $.get(`pages/${pageName}.html`, (data) => {
       // console.log(data)
        $("#app").html(data);
    }).fail((error)=>{
        //console.log("error", error)
        alert(error.statusText)
    }); 

   
}


testButton = (pageName) => {
    loadContent(pageName);
}


 //makes sure that the document is READ
$(document).ready(function () {
    loadContent("home"); 
   
    
   
initListeners();
});



//Dynmaically created means it listens to what you click on and in one line of code it changes the variable automatically with the id.
//^Changes automatially
