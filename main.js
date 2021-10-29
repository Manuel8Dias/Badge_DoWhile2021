const linksSocialMedia = {
    github: "Manuel8Dias",
    youtube: "channel/UCc6E_MZ4L-L8fltEPzPM7Aw",
    facebook: "ManuelDias.Dev",
    instagram: "manueldias.dev",
    twitter: "ManuelDias_VFX"
}

function changeSocialMedia() {
    for(let li of socialLinks.children) {
        const social = li.getAttribute('class')

        li.children[0].href = `https://www.${social}.com/${linksSocialMedia[social]}`
    }
}

changeSocialMedia()

function getGithubProfileInfos() {
    const url = `https://api.github.com/users/${linksSocialMedia.github}`

    fetch(url)
        .then(response => response.json())
        .then(data => {
            userImage.src = data.avatar_url
            userName.textContent = data.name
            userLink.href = data.html_url
            userLogin.textContent = data.login
            userBio.textContent = data.bio
        })
}

getGithubProfileInfos()