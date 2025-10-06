const form =document.getElementById("formulaire");
form.addEventListener("submit", (e)=>{
e.preventDefault();

const email =document.getElementById("mail").value;
const photo =document.querySelector('input[name="nombre"]:checked').value;
let reponses = JSON.parse(localStorage.getItem("sondage")) || [];
reponses.push({email:email,photo:photo,date:new Date().toISOString});
localStorage.setItem("sondage",JSON.stringify(reponses));
alert("Merci pour votre réponse !");
form.reset();
});