// Foto perfil + interacciones portfolio (sin sonido, iconos Lucide)
const photo = document.getElementById('profilePhoto');
const scene = document.getElementById('photoScene');
let jumping = false;

function jump(){
  if(jumping) return;
  jumping = true;
  photo.classList.remove('jumping');
  scene.classList.remove('jumping');
  void photo.offsetWidth; // reiniciar animación
  photo.classList.add('jumping');
  scene.classList.add('jumping');
  setTimeout(()=>{
    photo.classList.remove('jumping');
    scene.classList.remove('jumping');
    jumping = false;
  }, 920);
}

photo.addEventListener('mouseenter', jump);
photo.addEventListener('click', jump);
photo.addEventListener('touchstart', jump, {passive:true});

// Activar animación automáticamente al entrar a la web
window.addEventListener('load', ()=> setTimeout(jump, 600));

// Contadores hero
document.querySelectorAll('[data-count]').forEach(el=>{
  const target = +el.dataset.count;
  let v = 0;
  const step = ()=>{
    v += 1;
    if(v >= target) v = target;
    el.textContent = v;
    if(v < target) setTimeout(step, 120);
  };
  step();
});

// Reveal on scroll
const io = new IntersectionObserver(es=>es.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('visible'); }),{threshold:.15});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

// Menú móvil
const burger = document.getElementById('burger');
const links = document.getElementById('navLinks');
burger.addEventListener('click', ()=>links.classList.toggle('open'));

// Formulario contacto: envía el mensaje a tu email vía FormSubmit (AJAX)
const form = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');
const sendBtn = document.getElementById('sendBtn');
if(form){
  form.addEventListener('submit', async (e)=>{
    e.preventDefault();
    formStatus.textContent = 'Enviando...';
    sendBtn.disabled = true;
    try{
      const data = Object.fromEntries(new FormData(form).entries());
      const res = await fetch(form.action, {
        method: 'POST',
        headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
        body: JSON.stringify(data)
      });
      if(!res.ok) throw new Error('Error de red');
      formStatus.textContent = 'Mensaje enviado. Te contactaré pronto.';
      form.reset();
    }catch(err){
      // Si falla el servicio, abrir el mail directamente
      formStatus.textContent = 'No se pudo enviar. Escríbeme a dante.s.j.2004@gmail.com';
    }finally{
      sendBtn.disabled = false;
    }
  });
}

// Año + iconos Lucide
document.getElementById('year').textContent = new Date().getFullYear();
if(window.lucide) lucide.createIcons();
