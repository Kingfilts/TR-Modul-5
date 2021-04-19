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
