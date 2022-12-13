
var txtAnim = document.querySelector(".text-anim");

new Typewriter(txtAnim, {
   deleteSpeed: 30,
})

.changeDelay(70) 
.typeString('<span>Bienvenue</span>')
.pauseFor(200)
.typeString('<span> !</span>') 
.start() 