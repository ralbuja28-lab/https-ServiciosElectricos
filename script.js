// Redirección a WhatsApp
function contactWhatsApp() {
    const phoneNumber = "593963612347";
    const message = encodeURIComponent("Hola, me gustaría solicitar información sobre sus servicios.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
}

// Envío del formulario
document.getElementById("contactForm")?.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const service = document.getElementById("service").value;
    const message = document.getElementById("message").value;

    const whatsappMessage = encodeURIComponent(
        `*Nueva Consulta Web*\n\n👤 *Nombre:* ${name}\n📞 *Teléfono:* ${phone}\n🛠 *Servicio:* ${service}\n💬 *Mensaje:* ${message}`
    );

    const phoneNumber = "593963612347";
    window.open(`https://wa.me/${phoneNumber}?text=${whatsappMessage}`, "_blank");
});

// Lógica del Menú Móvil
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle?.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Cerrar menú al hacer clic en móvil
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Sombra en Navbar al hacer scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 20) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Animaciones Intersection Observer
const revealElements = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
});

revealElements.forEach(element => revealObserver.observe(element));