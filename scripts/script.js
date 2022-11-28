
const DarkThemeButton = document.querySelector('.theme.button');
const AsideArea = document.querySelector('aside');
const CancelButton = document.querySelector('.cancel.button');
const HideSave = document.querySelector('.save.button');
const HideText = document.querySelector('.myTextBox');
const NewNote = document.querySelector('.newnote.button')


const TriggerDarkTheme = function(){
    document.body.classList.toggle('darktheme');
    AsideArea.classList.toggle('darkaside');
}

DarkThemeButton.addEventListener('click', TriggerDarkTheme);

const HideTextArea = function (){
    HideSave.classList.toggle('DeleteAll');
    CancelButton.classList.toggle('DeleteAll');
    HideText.classList.toggle('DeleteAll');
}

CancelButton.addEventListener('click', HideTextArea);

const MakeNewNote = function(){
    HideSave.classList.toggle('DeleteAll');
    CancelButton.classList.toggle('DeleteAll');
    HideText.classList.toggle('DeleteAll');
}

NewNote.addEventListener('click', MakeNewNote)
