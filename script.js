//Tüm notların listelendiği divi seç.

//Yeni not şablonunu yaratma foksiyonu Title, Note, Image,Color değerlerini alacak. Div döndürecek.

// Yeni not divini tüm notlar divine append edecek fonksiyon.




const allNotes = document.querySelector(".allNotes");
const btnaddNote = document.querySelector(".btn-addNote");
let allColors = ["addWhite", "addRed", "addBlue", "addGreen", "addYellow", "addPurple", "addPink", "addBrown"];

let localNotesString = localStorage.getItem("notes");


let localNotes = localNotesString ? JSON.parse(localNotesString) : [];

let selectedColor = "black";

const baslik = document.querySelector(".noteAddTitle");
let baslikText = "";

baslik.innerText = baslikText;
baslik.addEventListener("input", (e) => {
    baslikText = e.target.innerText;
    console.log(baslikText);

})

const noteContent = document.getElementById("noteContent");
let contentText = "";

console.log(localNotes);


localNotes.forEach(data => {
    console.log(data);
    console.log(data._title);
    
    getNotes(data._title, data._note, data._color);



});

noteContent.addEventListener("input", (e) => {
    contentText = e.target.innerText;
})



allColors.forEach(element => {

    const newelement = document.getElementById(element).addEventListener("click", () => {
        selectedColor = element;
        let hamElement = element.split("add", 2)
        let upperElement = hamElement[1].toLowerCase();

        allColors.forEach(element => {
            let lineColor = document.getElementById(element);
            lineColor.classList.remove("borderLine");
        });

        console.log(element);

        let lineColor = document.getElementById(element);
        lineColor.classList.remove("borderLine");
        lineColor.classList.add("borderLine");
        console.log(lineColor);




        selectedColor = upperElement;
    });
});


console.table(localNotes);



function getNotes(title, note, color) {
    const noteDiv = document.createElement('div');
    noteDiv.className = (`note-card ${color}`);
    const headNote = document.createElement('div');
    headNote.className = ("headNote");

    const titleNote = document.createElement("p");
    titleNote.className = ("titleNote");
    titleNote.innerText = (title);

    headNote.appendChild(titleNote);

    noteDiv.appendChild(headNote);

    const contentNote = document.createElement("p");
    contentNote.className = ("contentNote");
    contentNote.innerText = note;
    noteDiv.appendChild(contentNote);

    const iconSet = document.createElement('div');
    iconSet.className = ("iconSet");
    noteDiv.appendChild(iconSet);

    const pinned = document.createElement("i");
    pinned.className = ("fas fa-thumbtack");

    const changeColor = document.createElement("i");
    changeColor.className = ("fas fa-palette changeColor");

    const addImage = document.createElement("i");
    addImage.className = ("fas fa-images");

    const deleteNote = document.createElement("i");
    deleteNote.className = ("fas fa-trash-alt trash");

    iconSet.appendChild(pinned);
    iconSet.appendChild(changeColor);
    iconSet.appendChild(addImage);
    iconSet.appendChild(deleteNote);


    allNotes.prepend(noteDiv);
}


console.table(localNotes);

btnaddNote.addEventListener("click", () => { createNote(baslikText, contentText, selectedColor) })

function createNote(title, note, color) {


    if (note != "") {
        const noteDiv = document.createElement('div');
        noteDiv.className = (`note-card ${selectedColor}`);


        const headNote = document.createElement('div');
        headNote.className = ("headNote");

        const titleNote = document.createElement("p");
        titleNote.className = ("titleNote");
        titleNote.innerText = (title);

        headNote.appendChild(titleNote);

        noteDiv.appendChild(headNote);

        const contentNote = document.createElement("p");
        contentNote.className = ("contentNote");
        contentNote.innerText = contentText;
        noteDiv.appendChild(contentNote);

        const iconSet = document.createElement('div');
        iconSet.className = ("iconSet");
        noteDiv.appendChild(iconSet);

        const pinned = document.createElement("i");
        pinned.className = ("fas fa-thumbtack");

        const changeColor = document.createElement("i");
        changeColor.className = ("fas fa-palette changeColor");

        const addImage = document.createElement("i");
        addImage.className = ("fas fa-images");

        const deleteNote = document.createElement("i");
        deleteNote.className = ("fas fa-trash-alt trash");

        iconSet.appendChild(pinned);
        iconSet.appendChild(changeColor);
        iconSet.appendChild(addImage);
        iconSet.appendChild(deleteNote);


        allNotes.prepend(noteDiv);
        selectedColor = "black";

        noteContent.innerText = "";
        baslik.innerText = "";

        console.log(titleNote.innerText);


        let newNote = {
            _title: title,
            _note: note,
            _color: color
        }

        console.log(newNote);
        console.table(newNote);


        //let jsonNote = JSON.stringify(newNote);


        console.table(newNote);




        localNotes.push(newNote);

        console.log(localNotes);
        console.table(localNotes);
        localStorage.setItem("notes", JSON.stringify(localNotes));


    } else {
        alert("Note can not be empty!")

    }





}


function saveToLS({ _title }) {



    //console.log(jsonNote);

    console.log("içerde", _title);

    let jsonNote = JSON.stringify(_title);
    localStorage.setItem("notes", jsonNote);

}