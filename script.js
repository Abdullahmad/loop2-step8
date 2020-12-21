const toggles = Array.from(document.getElementsByClassName('toggle'))

toggles.forEach(toggle => {
    toggle.addEventListener('click', (e) => {
        console.log("i'm hereee")
        if (Array.from(e.target.classList).includes('on')) {
            e.target.classList.remove('on')
        } else {
            e.target.classList.add('on')
        }

    })
})