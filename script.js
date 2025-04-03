const cards = [
    {
        title: 'Life Timer',
        pic: 'Assets/images/p1.jpg',
        website: 'Life_Timer/index.html',
        code: 'https://github.com/laxman-goud/Quick-Tools/tree/39304238d01c4cc75c0b97b13eb4c930ea9119c1/Life_Timer'
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
    },


]

const projectContainer = document.querySelector('.project-container');

const projectsFunction = (e) => {
    return `<div class="card">
                    <img src="${e.pic}" alt="" class="img">
                    <div class="links-card">
                        <a href="${e.website}"><h3 class="project-title-1 hide">live</h3></a>
                        <a href="${e.code}"><h3 class="project-title-2 hide">source code</h3></a>
                    </div>
                    <h3>${e.title}</h3>
                </div>`;
}

for (let card of cards) {
    projectContainer.innerHTML += projectsFunction(card);
}