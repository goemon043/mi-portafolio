alert("Gracias por entrar a mi página");
document.querySelector('h1').addEventListener('click', () => {
    alert("¡Qué curioso que eres!");
});
document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("¡Gracias por enviar tus datos!");
});
