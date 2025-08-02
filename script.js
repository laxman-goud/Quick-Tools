// Array of project objects, each containing information about a tool/card
const cards = [
    {
        title: 'Life Timer', // Project title
        pic: 'Assets/images/p1.jpg', // Thumbnail image path
        website: 'Life_Timer/index.html', // Link to live demo
        code: 'https://github.com/laxman-goud/Quick-Tools/tree/39304238d01c4cc75c0b97b13eb4c930ea9119c1/Life_Timer' // GitHub repo
    },
    {
        title: 'Github Profile Finder',
        pic: 'Assets/images/p2.png',
        website: 'Github_Profile_Finder/index.html',
        code: 'https://github.com/laxman-goud/Quick-Tools/tree/39304238d01c4cc75c0b97b13eb4c930ea9119c1/Github_Profile_Finder'
    },
    {
        title: 'Marks Calculator',
        pic: 'Assets/images/p3.png',
        website: 'Marks_Calculator/index.html',
        code: 'https://github.com/laxman-goud/Quick-Tools/tree/39304238d01c4cc75c0b97b13eb4c930ea9119c1/Marks_Calculator'
    },
    {
        title: 'Simple Calculator',
        pic: 'Assets/images/p4.png',
        website: 'Calculator/index.html',
        code: 'https://github.com/laxman-goud/Quick-Tools/tree/39304238d01c4cc75c0b97b13eb4c930ea9119c1/Calculator'
    },
    {
        title: 'Stop Watch',
        pic: 'Assets/images/p5.png',
        website: 'Stopwatch/index.html',
        code: 'https://github.com/laxman-goud/Quick-Tools/tree/39304238d01c4cc75c0b97b13eb4c930ea9119c1/Stopwatch'
    },
    {
        title: 'Color Palette Generator',
        pic: 'Assets/images/p6.png',
        website: 'Color_Palette_Generator/index.html',
        code: 'https://github.com/laxman-goud/Quick-Tools/tree/39304238d01c4cc75c0b97b13eb4c930ea9119c1/Color_Palette_Generator'
    },
    {
        title: 'QR Code Generator',
        pic: 'Assets/images/p7.png',
        website: 'QR_Code_Generator/index.html',
        code: 'https://github.com/laxman-goud/Quick-Tools/tree/39304238d01c4cc75c0b97b13eb4c930ea9119c1/QR_Code_Generator'
    },
    {
        title: 'To Do List',
        pic: 'Assets/images/p8.png',
        website: 'To_Do_List/index.html',
        code: 'https://github.com/laxman-goud/Quick-Tools/tree/39304238d01c4cc75c0b97b13eb4c930ea9119c1/To_Do_List'
    },
    {
        title: 'Password Generator',
        pic: 'Assets/images/p9.png',
        website: 'Password_Generator/index.html',
        code: 'https://github.com/laxman-goud/Quick-Tools/tree/39304238d01c4cc75c0b97b13eb4c930ea9119c1/Password_Generator'
    }
];

// Select the container where all project cards will be displayed
const projectContainer = document.querySelector('.project-container');

// Function to generate HTML for a single project card
const projectsFunction = (e) => {
    return `<div class="card">
                <!-- Project thumbnail -->
                <img src="${e.pic}" alt="" class="img">
                
                <!-- Links to live demo and GitHub repo -->
                <div class="links-card">
                    <a href="${e.website}"><p class="project-title-1 hide">Live Demo</p></a>
                    <a href="${e.code}"><p class="project-title-2 hide">Github</p></a>
                </div>

                <!-- Project title -->
                <h3>${e.title}</h3>
            </div>`;
}

// Loop through each project in the cards array and append the generated HTML to the container
for (let card of cards) {
    projectContainer.innerHTML += projectsFunction(card);
}