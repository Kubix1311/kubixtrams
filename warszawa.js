async function buyTicket() {
  const nickname = document.getElementById("nickname").value.trim().toLowerCase();
  const line = document.getElementById("line").value;
  const error = document.getElementById("error");
  const ticketDiv = document.getElementById("ticket");

  error.textContent = "";
  ticketDiv.classList.add("hidden");

  // wczytaj nicki i kody
  const nicknames = await fetch("nicknames.json").then(res => res.json());
  const codes = await fetch("codes.json").then(res => res.json());

  if (!nicknames.includes(nickname)) {
    error.textContent = "❌ Twój nick nie jest uprawniony do zakupu biletu.";
    return;
  }

  const randomCode = codes[Math.floor(Math.random() * codes.length)];
  ticketDiv.innerHTML = `
    <h2>🎟️ Twój bilet</h2>
    <p>Linia: <strong>${line}</strong></p>
    <p>Kod: <strong>${randomCode}</strong></p>
  `;
  ticketDiv.classList.remove("hidden");
}
