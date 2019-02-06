let $btnKnowMore = document.querySelector('main #profile section a button')
let $profile = document.querySelector('#profile div')
let $about = document.querySelector('main article')
let $year = document.getElementById('year')

let URL = window.location.href

if (URL.indexOf('/about') != -1) {
    if (window.innerWidth < 1000) {
        $profile.style.display = 'none'
        $about.style.width = '100%'
        $about.style.marginLeft = 0
    } else {
        $profile.style.display = 'flex'
        $profile.style.width = '25%'
        $about.style.width = '75%'
    }

    document.body.onresize = () => {
        if (window.innerWidth < 1000) {
            $profile.style.display = 'none'
            $about.style.width = '100%'
            $about.style.marginLeft = 0
        } else {
            $profile.style.display = 'flex'
            $profile.style.width = '25%'
            $about.style.width = '75%'
            $about.style.marginLeft = '25%'
        }     
    }
}

if ($year) year.innerHTML = new Date().getFullYear()