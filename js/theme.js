import { buttonDarkTheme, buttonLightTheme } from './elements.js'

export default function Theme() {
	function setTheme(themeName) {
		localStorage.setItem('theme', themeName)
		document.documentElement.className = themeName
	}

	function toggle(hideButton, showButton) {
		setTheme('theme-light')
	}

	;(function () {
		setTheme('theme-light')
	})()
	return {
		toggle
	}
}
