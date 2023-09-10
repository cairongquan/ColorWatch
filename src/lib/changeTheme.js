import {
    themeMode
} from "../store/index";

let themeFlag = false

const themeDomList = ['.app', '.container', '.github', '.mode-change-btn', '.full-view']

const themeDomColorByList = [{
        'dark': '#000000',
        'light': '#ffffff',
    },
    {
        'dark': '#1a1a1a',
        'light': '#ffffff',
    },
    {
        dark: '#26292c',
        light: '#fff'
    },
    {
        dark: "#26292c",
        light: '#fff'
    }, {
        dark: "#26292c",
        light: '#fff'
    }
]

export function changeTheme() {
    const themeCode = themeFlag && 'light' || 'dark'
    themeMode.update(() => themeCode)
    themeFlag = !themeFlag
    renderViewByThemeCode(themeCode)
}

function renderViewByThemeCode(theme) {
    themeDomList.forEach((item, index) => {
        const dom = document.querySelector(item)
        if (dom !== null) {
            dom.style.transition = 'all ease 220ms'
            dom.style.backgroundColor = themeDomColorByList[index][theme]
        }
    })
}