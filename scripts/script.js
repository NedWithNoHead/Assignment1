
const DarkThemeButton = document.querySelector('.theme.button')

const TriggerDarkTheme = function(){
    document.body.classList.add('darktheme');
}

DarkThemeButton.addEventListener('click', TriggerDarkTheme)