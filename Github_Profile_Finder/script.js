const url = "https://api.github.com/users";
const btnEl = document.getElementById("btn");
const inputEl = document.getElementById("search");
const profileCardEl = document.getElementById("profileCard");
const loadingEl = document.getElementById("loading");

const generateProfile = (profile) => {
    return `
        <div class="profileCard">
            <div class="top">
                <img src="${profile.avatar_url}" alt="image" id="top-img">
                <div class="top-cont">
                    <p id="name">${profile.name || "No Name"}</p>
                    <h3 id="uName">@${profile.login}</h3>
                </div>
                <a href="${profile.html_url}" target="_blank">
                    <button id="checkProfile">Check Profile</button>
                </a>
            </div>
            <div class="mid">
                <h2>About</h2>
                <p id="bio">${profile.bio || "No bio available"}</p>
            </div>
            <div class="bottom">
                <div class="followers">
                    <h3>Followers</h3>
                    <h4>${profile.followers}</h4>
                </div>
                <div class="following">
                    <h3>Following</h3>
                    <h4>${profile.following}</h4>
                </div>
                <div class="repos">
                    <h3>Repos</h3>
                    <h4>${profile.public_repos}</h4>
                </div>
            </div>
        </div>`;
};

async function fetchData() {
    const username = inputEl.value.trim();

    if (!username) {
        loadingEl.innerText = "Please enter a GitHub username!";
        loadingEl.style.color = "red";
        profileCardEl.classList.add("hide"); // Hide profile card if no input
        return;
    }

    loadingEl.innerText = "Loading...";
    loadingEl.style.color = "white";
    profileCardEl.innerHTML = ""; // Clear previous profile before fetching

    try {
        const res = await fetch(`${url}/${username}`);
        const data = await res.json();

        if (res.ok) {
            loadingEl.innerText = "";
            profileCardEl.classList.remove("hide"); // Show profile card
            profileCardEl.innerHTML = generateProfile(data);
        } else {
            loadingEl.innerText = data.message || "User not found!";
            loadingEl.style.color = "red";
            profileCardEl.classList.add("hide"); // Hide profile card on error
        }
    } catch (error) {
        loadingEl.innerText = "Failed to fetch data. Please try again.";
        loadingEl.style.color = "red";
        profileCardEl.classList.add("hide"); // Hide profile card on fetch error
        console.error("Error fetching profile:", error);
    }
}

btnEl.addEventListener("click", fetchData);
