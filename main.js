// her sætter vi vores "-" med en dafault attribute som disabled
document.querySelector(".minus-but").setAttribute("disabled", "disabled");

// Her Laver vi en variable til vores antal

var antalNummer

// Plus knap bliver aktiveret
document.querySelector(".plus-but").addEventListener("click", function()
{
  // Her tager vi værdien fra vores input
  antalNummer = document.getElementById("antal").value;
  // så skal der tillæges ++ hvis der trykkes på plus knappenn
  antalNummer++;
  document.getElementById("antal").value = antalNummer
})
