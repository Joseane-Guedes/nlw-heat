const LinksSocialMedia = {
  linkedin: "joseane_Guedes",
  github: "Joseane-Guedes",
  youtube: "joseane_Guedes",
  facebook: "josie",
  instagram: "josie_codes",
  twitter: "Josie.codes",
};

function insertSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute("class");

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`;
  }
}
insertSocialMediaLinks();



function getGithubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
  .then(response => response.json())
  .then(data => {
    userImage.src = data.avatar_url
    userName.textContent = data.name
    userLink.href = data.html_url 
    userBio.textContent = data.bio
    userLogin.textContent = data.login
     })
}

getGithubProfileInfos()

