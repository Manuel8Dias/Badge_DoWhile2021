

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

        // alert(li.children[0].href)
    }
}

changeSocialMedia()