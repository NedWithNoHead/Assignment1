
const DarkThemeButton = document.querySelector('.theme.button');
const AsideArea = document.querySelector('aside');
const CancelButton = document.querySelector('.cancel.button');
const SaveButton = document.querySelector('.save.button');
const CommentBox = document.querySelector('textarea');
const NewNote = document.querySelector('.newnote.button');
const AdditionalNotes = document.querySelector('.AdditionalNotes')

const notesArray = [
    {title: 'note one',
    body: 'this is my first note'},
    {title: 'note two',
    body: 'this is my second note'}
]

console.log(notesArray)

const TriggerDarkTheme = function(){
    document.body.classList.toggle('darktheme');
    AsideArea.classList.toggle('darkaside');
}

DarkThemeButton.addEventListener('click', TriggerDarkTheme);

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
}

NewNote.addEventListener('click', MakeNewNote)


const NewNoteAlert = function(){
    if(CommentBox.value != ""){
    const NewNoteName = document.createElement('li');
    NewNoteName.textContent = prompt('Input a name for your notes');
    AdditionalNotes.appendChild(NewNoteName);
    notesArray.push({title: NewNoteName.textContent, body:CommentBox.value});
    console.log(notesArray);
}
}

SaveButton.addEventListener('click', NewNoteAlert)