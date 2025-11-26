
function toggleMenu() {
    const menu = document.getElementById('menu');
    const hamburger = document.querySelector('.menu-secciones');
    
    if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
}

// Agregar evento al icono hamburguesa
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.menu-secciones');
    hamburger.addEventListener('click', toggleMenu);
});


document.querySelectorAll('.menu-secciones [data-target]').forEach(b=>{
    b.addEventListener('click',()=>{
        const t=document.querySelector(b.dataset.target);
        if(t) t.scrollIntoView({behavior:'smooth',block:'start'});
    });
});

document.querySelectorAll('.menu-secciones a[href^="#"]').forEach(link=>{
    link.addEventListener('click',e=>{
        const href=link.getAttribute('href');
        if(!href || href === '#') return;
        const target=document.getElementById(href.slice(1)) || document.querySelector(href);
        if(!target) return;
        e.preventDefault();
        const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        target.scrollIntoView({behavior: prefersReduced ? 'auto' : 'smooth', block:'start'});
    });
});
function filterProjects(category) {
    const projects = document.querySelectorAll('.projects-section .project-card"');
    projects.forEach(project => {
        if (project.dataset.category === category || category === 'all') {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    });
}
function openModal(imageSrc) {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-modal">&times;</span>
            <img src="${imageSrc}" alt="Imagen ampliada">
        </div>
    `;
    document.body.appendChild(modal);
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.className === 'close-modal') {
            closeModal(modal);
        }
    });
}

function closeModal(modal) {
    modal.style.opacity = '0';
    setTimeout(() => {
        document.body.removeChild(modal);
    }, 300);
}

document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.project-card img, .gallery img');
    images.forEach(img => {
        img.style.cursor = 'pointer';
        img.addEventListener('click', () => {
            openModal(img.src);
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const nombre = contactForm.querySelector('[name="name"]');
            const email = contactForm.querySelector('[name="email"]');
            const asunto = contactForm.querySelector('[name="subject"]');
            const mensaje = contactForm.querySelector('[name="message"]');
            
            let isValid = true;
            
            // Validar nombre
            if (!nombre || nombre.value.trim() === '') {
                alert('Por favor, ingrese su nombre');
                isValid = false;
                return;
            }
            
            // Validar email
            if (!email || email.value.trim() === '') {
                alert('Por favor, ingrese su email');
                isValid = false;
                return;
            }
            
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email.value)) {
                alert('Por favor, ingrese un email válido');
                isValid = false;
                return;
            }
            
            // Validar asunto
            if (!asunto || asunto.value.trim() === '') {
                alert('Por favor, ingrese el asunto');
                isValid = false;
                return;
            }
            
            // Validar mensaje
            if (!mensaje || mensaje.value.trim() === '') {
                alert('Por favor, ingrese su mensaje');
                isValid = false;
                return;
            }
            
            if (isValid) {
                alert('Formulario enviado correctamente');
                contactForm.reset();
            }
        });
    }
});