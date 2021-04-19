// BURGER MENU
const navslide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click',()=>{
        //Toggle Nav
        nav.classList.toggle('nav-active');

        //Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            }else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        //Burger Animation
        burger.classList.toggle('toggle');
    });

};

navslide();


function changeImage() {

// Her bliver der lavet consts til vores forskellige billeder
// En const til det aktive billede og vores liste af billeder

const aktivBillede = document.querySelector(".product-hero-images .active");
const produktBillede = document.querySelectorAll(".product-image-list img");
// Herefter laves der en funktion som tager vores aktiv billede og skifter
// ud med det billede der er blevet trykket på
function skiftBillede(e) {
    aktivBillede.src = e.target.src;
}

// Når der bliver trykket på en af billederne på listen, vil der blive
// kaldt til en funktion der sørger for at billedet skifter

produktBillede.forEach(image =>
    image.addEventListener("click", skiftBillede));



// Vi laver en variabel til det samlede antal
var valueCount

// Increment at vores værdi når vi trykker på plus knappen. Der bliver
// Lyttet efter et klik som udfører følgende funktion og tilføjer 1
document.querySelector(".plus-but").addEventListener("click", function () {

    valueCount = document.getElementById("antal").value;

    valueCount++;

    document.getElementById("antal").value = valueCount;
});



    document.querySelector(".minus-but").addEventListener("click", function () {

        valueCount = document.getElementById("antal").value;

        valueCount--;

        document.getElementById("antal").value = valueCount;
});
    
    }






// CONTACT FORM
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











// Filtrering
function getSelectValue(obj) {
  var uid = obj.options[obj.selectedIndex].getAttribute('value');
  //alert(uid);

  var allProducts = document.querySelectorAll(".webshop-product")
  var showThis = document.querySelectorAll(".webshop-product." + uid)

// Gemmer alle produkter væk ved filtrering
  for (i = 0; i < allProducts.length; i++) {
    allProducts[i].classList.add("hidden");
  };

// fjerner hidden class fra valgt filter
  for (i = 0; i < showThis.length; i++) {
    showThis[i].classList.remove("hidden");
  }

// viser alle produkter når "alle" filtrering er valgt
  if (uid == "alle") {
    for (i = 0; i < allProducts.length; i++) {
      allProducts[i].classList.remove("hidden");
    };
  }

}


changeImage() 