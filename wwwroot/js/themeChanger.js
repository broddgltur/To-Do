// JavaScript Document

// Switch

var themeChanger = document.querySelector('#theme-changer'),
	root = document.querySelector(':root'),
	themeInput = document.querySelector('#theme'),
	currentTheme = localStorage.getItem("theme") || 'default',
	selectOption;


// show the theme changer
themeChanger.classList.remove('hidden');

// change colors and save to localStorage
themeInput.addEventListener('change', function (e) {

	// get selected option
	selectOption = this.options[this.selectedIndex];

	// change values to current theme
	currentTheme = selectOption.value;

	// change values of custom properties and save to localStorage
	root.className = currentTheme
	localStorage.setItem('theme', currentTheme);

});

// set theme to previous choosen one
window.onload = function (e) {

	// set option of current theme to selected
	document.querySelector('[value="' + currentTheme + '"]').selected = true;

	// get values of custom properties and apply
	root.className = currentTheme
}
