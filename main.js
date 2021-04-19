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


  // Antal


  // Her sættes default attribute til at være "disabled"

  document.querySelector(".minus-but").setAttribute("disabled");

// Vi laver en variabel til det samlede antal
  var valueCount

  // Increment at vores værdi når vi trykker på plus knappen. Der bliver
  // Lyttet efter et klik som udfører følgende funktion og tilføjer 1
  document.querySelector(".plus-but").addEventListener("click", function() {

      valueCount = document.getElementById("antal").value;

      valueCount++;

      document.getElementById("antal").value = valueCount;
// Hvis værdien er over nul, så skal den fjerne classen "disabled"
// Det bliver nu muligt og bruge den disabled knap
      if (valueCount > 1) {
          document.querySelector(".minus-but").removeAttribute("disabled");
          document.querySelector(".minus-but").classList.remove("disabled")
      }
