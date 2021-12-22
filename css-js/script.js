window.onload = function () {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('./css-js/service-worker.js');
    }

    var laptop_div, mobile_div, isMobile, d, date, month, isd, username, more_days,ldwc, ldc, text1, text2, mlogo //declare vars

    laptop_div = ele_id("laptop") //getting divs
    mobile_div = ele_id("mobile")
    ldwc = ele_id("waitingforc")
    ldc = ele_id("Christmas")
    text1 = ele_id("text")
    text2 = ele_id("text2")
    mlogo = ele_id("icon-svg")

    d = new Date() //get the date
    date = d.getDate()
    month = d.getMonth()
    isd = (month === 11) ? true : false;
    isc = (date === 25) ? true : false
    more_days = `${date - 25}`

    isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent); //check if phone

    if (ls_g("username") == null) {
        username = prompt("what is your name?(this will be your username forever)")
        ls_s("username", username)
    } else {
        username = ls_g("username")
    }

    if (isMobile) {
        mobile_div.style.display = "block"
        alert(`welcome ${username}`)
        if (isd) {
            if (isc) {
                alert(`merry Christmas ${username}`)
                text1.style.display = "block"
                text2.style.display = "block"
                mlogo.src = "./images/santa.svg"
                mlogo.style.height  = "30vh"
                mlogo.classList.add = "center"
            } else if (date < 25) {
                alert(`${more_days.split("-")[1]} more days to Christmas ${username} are you waiting for Christmas`)
            }
        }
    } else {
        laptop_div.style.display = "block"
        notify(`welcome ${username}`)
        if (isd) {
            if (isc) {
                notify(`merry Christmas ${username}`)
                ldwc.style.display = "none"
                ldc.style.display = "block"
            } else if (date < 25) {
                notify(`${more_days.split("-")[1]} more days to Christmas ${username}. are you waiting for Christmas`)
            }
        }
    }
}