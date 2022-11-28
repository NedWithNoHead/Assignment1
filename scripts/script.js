
const DarkThemeButton = document.querySelector('.theme.button')
const AsideArea = document.querySelector('aside')

const TriggerDarkTheme = function(){
    document.body.classList.toggle('darktheme');
    AsideArea.classList.toggle('darkaside')
}

DarkThemeButton.addEventListener('click', TriggerDarkTheme)
