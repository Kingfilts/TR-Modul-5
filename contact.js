console.log("hej");
const btn = document.getElementById('btn')
const messageBox = document.getElementById("popup-besked");
const checkImg = document.getElementById("checkImg");
const okay = document.getElementById("confirm-btn");

btn.addEventListener("click", function () {
    const fname = document.getElementById('fname');
    const email = document.getElementById('email');
    const subject = document.getElementById('subject');
    const message = document.getElementById('message');
    const popup = document.getElementById("popup");

    //Tilføjer active class på pop up, og indsætter tekst efter inputs
    popup.classList.add("active");

    if (fname.value == "") {
        messageBox.innerText = "Indtast venligst dit fulde navn";
        fname.focus();
        return false;
    }

    if (email.value == "") {
        messageBox.innerText = "Indtast venligst e-mail";
        email.focus();
        return false;
    }

    if (subject.value == "") {
        messageBox.innerText = "Indtast venligst emne";
        contry.focus();
        return false;
    }

    if (message.value == "") {
        messageBox.innerText = "Indtast besked";
        message.focus();
        return false;
    }

    else {
        messageBox.innerText = "Vi har modtaget din besked";
        checkImg.style.visibility = "visible";
        okay.style.visibility = "hidden";
    }


    //Det nummer her fortæller hvor lang delayen er i ms
    setTimeout(function () {
        window.location.reload();
    }, 4000)
})

okay.addEventListener("click", function(){
    popup.classList.remove("active");
})