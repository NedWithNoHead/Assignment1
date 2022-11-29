
const DarkThemeButton = document.querySelector('.theme.button');
const AsideArea = document.querySelector('aside');
const CancelButton = document.querySelector('.cancel.button');
const SaveButton = document.querySelector('.save.button');
const CommentBox = document.querySelector('textarea');
const NewNote = document.querySelector('.newnote.button');
const AdditionalNotes = document.querySelector('.AdditionalNotes')

const notesArray = [
    {title: 'Note one',
    body: 'this is my first note'},
    {title: 'Note two',
    body: 'this is my second note'}
]

const TriggerDarkTheme = function(){
    document.body.classList.toggle('darktheme');
    AsideArea.classList.toggle('darkaside');
    CommentBox.classList.toggle('darkaside');
}

function changeText()
{
    if (DarkThemeButton.textContent === "Dark Theme"){
    DarkThemeButton.textContent = "Light Theme"
}
    else if (DarkThemeButton.textContent ==="Light Theme"){
        DarkThemeButton.textContent = "Dark Theme"
    }
}


DarkThemeButton.addEventListener('click', TriggerDarkTheme);
DarkThemeButton.addEventListener('click', changeText);

const HideTextArea = function (){
    SaveButton.classList.toggle('DeleteAll');
    CancelButton.classList.toggle('DeleteAll');
    CommentBox.classList.toggle('DeleteAll');

}

CancelButton.addEventListener('click', HideTextArea);

const MakeNewNote = function(){
    SaveButton.classList.remove('DeleteAll');
    CancelButton.classList.remove('DeleteAll');
    CommentBox.classList.remove('DeleteAll');
    CommentBox.value = ""
}

NewNote.addEventListener('click', MakeNewNote)


const NewNoteAlert = function(){
    if(CommentBox.value != ""){
    const NewNoteName = document.createElement('li');
    NewNoteName.textContent = prompt('Input a name for your notes');
    AdditionalNotes.appendChild(NewNoteName);
    notesArray.push({title: NewNoteName.textContent, body:CommentBox.value});
}
}

SaveButton.addEventListener('click', NewNoteAlert)

const BubbleList = function(event){
    for(let note of notesArray)
    { 
        if(event.target.textContent === note.title){
            CommentBox.value = note.body
        }
    }
}

AdditionalNotes.addEventListener('click', BubbleList)