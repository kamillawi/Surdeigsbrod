const starterInput = document.getElementById("starter");
const vannEl = document.getElementById("vann");
const melEl = document.getElementById("mel");
const saltEl = document.getElementById("salt");
const knapp = document.getElementById("knapp");

function visVerdi() {
    const gram = Number(starterInput.value) || 0;
    vannEl.textContent = Math.round(gram * 1.44) + " g vann";
    melEl.textContent = Math.round(gram * 2.5) + " g mel";
    saltEl.textContent = gram > 250 ? "og to klyper salt" : "og en klype salt";
}

starterInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") visVerdi();
});

knapp.addEventListener("click", visVerdi);
