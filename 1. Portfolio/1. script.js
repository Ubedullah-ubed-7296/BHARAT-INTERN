console.log("Script running...")
document.querySelector('.cross').style.display = 'none';
document.querySelector('.hamburger').addEventListener("click", () => {
    document.querySelector('.sidebar').classList.toggle('sidebarGo');
    if (document.querySelector('.sidebar').classList.contains('sidebarGo')) {
        document.querySelector('.ham').style.display = 'inline'
        document.querySelector('.cross').style.display = 'none'
        document.querySelector('.left').style.visibility = 'visible'

    }
    else {
        document.querySelector('.ham').style.display = 'none'
        document.querySelector('.left').style.visibility = 'hidden';
        setTimeout(() => {
            document.querySelector('.cross').style.display = 'inline'
        }, 300);
    }

})

// document.addEventListener("DOMContentLoaded", function() {
//     var element = document.querySelector('.my-home');
//     element.style.transition = "transform 2s";
//     element.style.transform = "translateX(0)";
// });



// let menuIcon = document.querySelector("#menu-bar-icone");
// let navbar = document.querySelector(".navbar-container");

// menuIcon.onclick = () => {
//   menuIcon.classList.toggle("fa-xmark");
//   navbar.classList.toggle("active");
// };

// let sections = document.querySelectorAll("section");
// let navLinks = document.querySelectorAll("header nav a");

// window.onscroll = () => {
//   sections.forEach((sec) => {
//     let top = window.scrollY;
//     let offset = sec.offsetTop - 150;
//     let height = sec.offsetHeight;
//     let id = sec.getAttribute("id");

//     if (top >= offset && top < offset + height) {
//       navLinks.forEach((links) => {
//         links.classList.remove("active");
//         document
//           .querySelector(`header nav a[href*='${id}']`)
//           .classList.add("active");
//       });
//     }
//   });

//   let header = document.querySelector("header");
//   header.classList.toggle("sticky", window.scrollY > 100);

//   menuIcon.classList.remove("fa-xmark");
//   navbar.classList.remove("active");
// };

var typed = new Typed('#element', {
    strings: ['Front-End Developer', 'C Programmer', 'Python Programmer', 'Java Programmer', 'Web Designer'],
    typeSpeed: 75,
    loop: true,
});


document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.mainbar nav ul li a');

    function changeActiveLink() {
        let index = sections.length;

        while (--index && window.scrollY + 50 < sections[index].offsetTop) { }

        navLinks.forEach((link) => link.classList.remove('active'));
        navLinks[index].classList.add('active');
    }

    changeActiveLink();
    window.addEventListener('scroll', changeActiveLink);
});
