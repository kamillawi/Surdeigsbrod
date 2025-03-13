

let starterInput = document.getElementById("starter");

function visVerdi() {
    let gramSurdeigsstarter = starterInput.value;

    vann.textContent = Math.round(gramSurdeigsstarter * 1.44) + "g vann";
    mel.textContent = Math.round(gramSurdeigsstarter * 2.5) + "g mel";


    
}



starterInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        visVerdi(); // Kall på visVerdi-funksjonen når Enter trykkes
    }
});
