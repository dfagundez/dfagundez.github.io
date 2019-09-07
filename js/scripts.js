// Obtengo los elementos div con la clase empty que solo esta para utilizar el script
const i = document.querySelectorAll('div.empty');

// Agrego el eventos para parar e iniciar animacion
i.forEach((item) => { item.addEventListener('mouseover', offAnimation, true); })
i.forEach((item) => { item.addEventListener('mouseout', onAnimation, true); })

// Creo funciones para pausar o arranar la animacion
function offAnimation()
{
    i.forEach((item) => {item.style.animationPlayState = "paused";});
};
function onAnimation()
{
    i.forEach((item) => {item.style.animationPlayState = "running";});
};