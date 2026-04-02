

let starterInput = document.getElementById("starter");

function visVerdi() {
    let gramSurdeigsstarter = starterInput.value;

    vann.textContent = Math.round(gramSurdeigsstarter * 1.44) + "g vann";
    mel.textContent = Math.round(gramSurdeigsstarter * 2.5) + "g mel";
    salt.textContent = gramSurdeigsstarter > 250 ? "og to klyper salt <3" : "og en klype salt <3";


    
}



starterInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        visVerdi(); // Kall på visVerdi-funksjonen når Enter trykkes
    }
});

knapp.addEventListener("click", function() {
    visVerdi(); // Call visVerdi when the button is clicked
});

