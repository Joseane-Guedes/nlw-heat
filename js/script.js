const LinksSocialMedia = {
  linkedin: "joseane_Guedes",
  github: "joseane",
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
