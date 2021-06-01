function showTime() {
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let session = "AM";

    if(h == 0){
        h = 12;
    }

    if(h > 12){
        h = h - 12;
        session = "PM";
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    let time = h + ":" + m + ":" + s;

    document.getElementById("my-clock-display").innerHTML = time;
    document.getElementById("am-pm").innerHTML = session;

    document.getElementById("my-clock-display").textContent = time;
    document.getElementById("am-pm").textContent = session;


    
    setTimeout(showTime, 1000);
}

showTime();


// function to set given theme/color-scheme
function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}

// function to toggle between themes
function toggleTheme() {
    if(localStorage.getItem('theme') === 'theme-dark'){
        setTheme('theme-light');
    } else {
        setTheme('theme-dark');
    }
}

(function () {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-dark');
    } else {
        setTheme('theme-light');
    }
})();
