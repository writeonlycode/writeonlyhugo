// document.addEventListener("DOMContentLoaded", () => {
//   if ( window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ) {
//     document.documentElement.setAttribute('data-bs-theme', 'dark')
//   } else if ( window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ) {
//     document.documentElement.setAttribute('data-bs-theme', 'light')
//   }

//   if ( localStorage.getItem("isDarkMode") === "true" ) {
//     document.documentElement.setAttribute('data-bs-theme', 'dark')
//     localStorage.setItem('isDarkMode', true);
//   } else if ( localStorage.getItem("isDarkMode") === "false" ) {
//     document.documentElement.setAttribute('data-bs-theme', 'light')
//     localStorage.setItem('isDarkMode', false);
//   }

//   const lightDarkToggler = document.getElementById("light-dark-toggler");

//   lightDarkToggler.addEventListener("click", (e) => {
//     e.preventDefault();
//     lightDarkToggle();
//   });
// });

// function lightDarkToggle() {

//   console.log(localStorage.getItem("isDarkMode"));

//   if ( localStorage.getItem("isDarkMode") === "true" ) {
//     document.documentElement.setAttribute('data-bs-theme', 'light')
//     localStorage.setItem('isDarkMode', false);
//   } else if ( localStorage.getItem("isDarkMode") === "false" ) {
//     document.documentElement.setAttribute('data-bs-theme', 'dark')
//     localStorage.setItem('isDarkMode', true);
//   } else {
//     document.documentElement.setAttribute('data-bs-theme', 'light')
//     localStorage.setItem('isDarkMode', false);
//   }
// }
