// Datos de las flores
const floresData = {
    orquidea: {
        title: "Orquídea Cattleya Trianae",
        subtitle: "Flor Nacional de Colombia",
        description: `
            <p>La <strong>Cattleya trianae</strong>, conocida como "Flor de Mayo" o "Lirio de Mayo", es la flor nacional de Colombia desde 1936. Esta magnífica orquídea debe su nombre al botánico José Jerónimo Triana.</p>
            
            <h4>Características:</h4>
            <ul>
                <li><strong>Tamaño:</strong> Puede alcanzar hasta 15 cm de diámetro</li>
                <li><strong>Colores:</strong> Pétalos blancos o rosados con labelo púrpura intenso</li>
                <li><strong>Hábitat:</strong> Bosques húmedos de los Andes colombianos</li>
                <li><strong>Altitud:</strong> Entre 1,500 y 2,000 metros sobre el nivel del mar</li>
                <li><strong>Floración:</strong> Principalmente en mayo, de ahí su nombre popular</li>
            </ul>
            
            <h4>Importancia Cultural:</h4>
            <p>Representa la belleza, la elegancia y la diversidad de Colombia. Es símbolo de respeto y admiración en la cultura colombiana.</p>
        `,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Cattleya_trianae_-_Flickr_-_Dick_Culbert.jpg/800px-Cattleya_trianae_-_Flickr_-_Dick_Culbert.jpg"
    },
    heliconia: {
        title: "Heliconia",
        subtitle: "Ave del Paraíso Tropical",
        description: `
            <p>Las <strong>Heliconias</strong> son plantas tropicales conocidas por sus vibrantes colores y formas exóticas. Son nativas de las regiones tropicales de América y están estrechamente relacionadas con las plantas de banano.</p>
            
            <h4>Características:</h4>
            <ul>
                <li><strong>Colores:</strong> Rojos, naranjas, amarillos y verdes brillantes</li>
                <li><strong>Forma:</strong> Brácteas en forma de pico de ave</li>
                <li><strong>Altura:</strong> Pueden crecer entre 1 y 7 metros</li>
                <li><strong>Hábitat:</strong> Selvas húmedas tropicales</li>
                <li><strong>Polinización:</strong> Principalmente por colibríes</li>
            </ul>
            
            <h4>Especies en Colombia:</h4>
            <p>Colombia alberga más de 90 especies de heliconias, siendo uno de los países con mayor diversidad de estas plantas en el mundo.</p>
        `,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Heliconia_rostrata_BotGardBln1105a.jpg/800px-Heliconia_rostrata_BotGardBln1105a.jpg"
    },
    mayo: {
        title: "Flor de Mayo",
        subtitle: "Cattleya Mossiae",
        description: `
            <p>La <strong>Cattleya mossiae</strong>, comúnmente llamada "Flor de Mayo", es una orquídea epífita nativa de Venezuela y Colombia, muy apreciada por su gran tamaño y belleza.</p>
            
            <h4>Características:</h4>
            <ul>
                <li><strong>Tamaño:</strong> Una de las orquídeas más grandes, hasta 20 cm</li>
                <li><strong>Colores:</strong> Pétalos rosados con labelo púrpura y amarillo</li>
                <li><strong>Fragancia:</strong> Posee un aroma dulce y delicado</li>
                <li><strong>Época de floración:</strong> Principalmente en mayo</li>
                <li><strong>Duración:</strong> Las flores pueden durar hasta 6 semanas</li>
            </ul>
            
            <h4>Cultivo:</h4>
            <p>Requiere alta humedad, buena ventilación y luz filtrada. Es muy valorada en la orquideología mundial.</p>
        `,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Cattleya_mossiae.jpg/800px-Cattleya_mossiae.jpg"
    },
    anthurium: {
        title: "Anthurium",
        subtitle: "Flor de Corazón",
        description: `
            <p>El <strong>Anthurium</strong>, conocido como "Flor de Flamingo" o "Flor de Corazón", es una planta tropical originaria de las selvas de Colombia y otros países de América tropical.</p>
            
            <h4>Características:</h4>
            <ul>
                <li><strong>Forma:</strong> Bráctea en forma de corazón</li>
                <li><strong>Colores:</strong> Rojo brillante, rosa, blanco, verde</li>
                <li><strong>Textura:</strong> Superficie cerosa y brillante</li>
                <li><strong>Duración:</strong> Las flores pueden durar hasta 3 meses</li>
                <li><strong>Hábitat:</strong> Bosques húmedos tropicales</li>
            </ul>
            
            <h4>Simbolismo:</h4>
            <p>Representa el amor, la hospitalidad y la abundancia. En Colombia es muy utilizada en arreglos florales y decoración.</p>
            
            <h4>Uso comercial:</h4>
            <p>Colombia es uno de los principales exportadores de anthurium en el mundo, especialmente desde la región de Cundinamarca.</p>
        `,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Anthurium_andraeanum_001.JPG/800px-Anthurium_andraeanum_001.JPG"
    },
    passiflora: {
        title: "Passiflora",
        subtitle: "Flor de la Pasión",
        description: `
            <p>La <strong>Passiflora</strong> o "Flor de la Pasión" es una planta trepadora nativa de América tropical. Colombia posee una gran diversidad de especies de passiflora.</p>
            
            <h4>Características:</h4>
            <ul>
                <li><strong>Estructura:</strong> Forma radial compleja y simétrica</li>
                <li><strong>Colores:</strong> Azul, púrpura, blanco, rosa</li>
                <li><strong>Componentes:</strong> Corona de filamentos coloridos</li>
                <li><strong>Fruto:</strong> Maracuyá (en algunas especies)</li>
                <li><strong>Crecimiento:</strong> Planta trepadora que puede alcanzar varios metros</li>
            </ul>
            
            <h4>Diversidad en Colombia:</h4>
            <p>Colombia alberga más de 160 especies de Passiflora, siendo el país con mayor diversidad de estas plantas en el mundo.</p>
            
            <h4>Usos:</h4>
            <p>Además de su valor ornamental, muchas especies producen frutos comestibles como la maracuyá, curuba y cholupa.</p>
        `,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Passiflora_caerulea_close.jpg/800px-Passiflora_caerulea_close.jpg"
    }
};

// Variables globales
let currentModal = null;

// Función de inicialización
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeFlowerCards();
    initializeModal();
    initializeScrollAnimations();
    initializeGallery();
    addLoadingAnimations();
});

// Navegación suave y activa
function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remover clase activa de todos los enlaces
            navLinks.forEach(nl => nl.classList.remove('active'));
            
            // Agregar clase activa al enlace clickeado
            this.classList.add('active');
            
            // Scroll suave al elemento
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Actualizar navegación activa en scroll
    window.addEventListener('scroll', updateActiveNavigation);
}

function updateActiveNavigation() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentSection = '#' + section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentSection) {
            link.classList.add('active');
        }
    });
}

// Funcionalidad de las tarjetas de flores
function initializeFlowerCards() {
    const flowerCards = document.querySelectorAll('.flower-card');
    
    flowerCards.forEach(card => {
        // Efecto hover mejorado
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
        
        // Click en tarjeta para abrir modal
        card.addEventListener('click', function() {
            const flowerType = this.getAttribute('data-flower');
            openFlowerModal(flowerType);
        });
        
        // Click en botón "Conocer más"
        const learnMoreBtn = card.querySelector('.learn-more-btn');
        if (learnMoreBtn) {
            learnMoreBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                const flowerType = card.getAttribute('data-flower');
                openFlowerModal(flowerType);
            });
        }
    });
}

// Sistema de modal
function initializeModal() {
    const modal = document.getElementById('flower-modal');
    const closeBtn = modal.querySelector('.close');
    
    closeBtn.addEventListener('click', closeModal);
    
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && currentModal) {
            closeModal();
        }
    });
}

function openFlowerModal(flowerType) {
    const modal = document.getElementById('flower-modal');
    const modalBody = document.getElementById('modal-body');
    const flowerData = floresData[flowerType];
    
    if (!flowerData) return;
    
    modalBody.innerHTML = `
        <div class="modal-flower-content">
            <div class="modal-image">
                <img src="${flowerData.image}" alt="${flowerData.title}" />
            </div>
            <div class="modal-text">
                <h2>${flowerData.title}</h2>
                <h3>${flowerData.subtitle}</h3>
                <div class="modal-description">
                    ${flowerData.description}
                </div>
            </div>
        </div>
    `;
    
    // Agregar estilos CSS para el modal si no existen
    addModalStyles();
    
    modal.style.display = 'block';
    currentModal = modal;
    document.body.style.overflow = 'hidden';
    
    // Animación de entrada
    setTimeout(() => {
        modal.style.opacity = '1';
    }, 10);
}

function closeModal() {
    const modal = document.getElementById('flower-modal');
    modal.style.opacity = '0';
    
    setTimeout(() => {
        modal.style.display = 'none';
        currentModal = null;
        document.body.style.overflow = 'auto';
    }, 300);
}

function addModalStyles() {
    const existingStyles = document.getElementById('modal-dynamic-styles');
    if (existingStyles) return;
    
    const style = document.createElement('style');
    style.id = 'modal-dynamic-styles';
    style.textContent = `
        .modal-flower-content {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 30px;
            align-items: start;
        }
        
        .modal-image img {
            width: 100%;
            height: 300px;
            object-fit: cover;
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        }
        
        .modal-text h2 {
            font-family: 'Playfair Display', serif;
            color: #333;
            margin-bottom: 5px;
            font-size: 1.8rem;
        }
        
        .modal-text h3 {
            color: #667eea;
            margin-bottom: 20px;
            font-size: 1.1rem;
            font-weight: 400;
        }
        
        .modal-description h4 {
            color: #333;
            margin: 20px 0 10px 0;
            font-size: 1.1rem;
        }
        
        .modal-description ul {
            margin: 10px 0;
            padding-left: 20px;
        }
        
        .modal-description li {
            margin-bottom: 5px;
            line-height: 1.6;
        }
        
        .modal-description p {
            margin-bottom: 15px;
            line-height: 1.6;
        }
        
        @media (max-width: 768px) {
            .modal-flower-content {
                grid-template-columns: 1fr;
                gap: 20px;
            }
            
            .modal-image img {
                height: 200px;
            }
        }
    `;
    document.head.appendChild(style);
}

// Animaciones de scroll
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, observerOptions);
    
    // Aplicar animaciones a elementos específicos
    const animatedElements = document.querySelectorAll('.flower-card, .gallery-item, .hero-content');
    animatedElements.forEach(el => {
        el.classList.add('scroll-reveal');
        observer.observe(el);
    });
}

// Galería interactiva
function initializeGallery() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach((item, index) => {
        item.addEventListener('click', function() {
            const img = this.querySelector('img');
            showImagePreview(img.src, img.alt);
        });
        
        // Animación escalonada
        item.style.animationDelay = `${index * 0.1}s`;
    });
}

function showImagePreview(src, alt) {
    const previewModal = document.createElement('div');
    previewModal.className = 'image-preview-modal';
    previewModal.innerHTML = `
        <div class="image-preview-content">
            <span class="image-preview-close">&times;</span>
            <img src="${src}" alt="${alt}" />
            <p>${alt}</p>
        </div>
    `;
    
    // Estilos para el preview
    previewModal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.9);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 3000;
        opacity: 0;
        transition: opacity 0.3s ease;
    `;
    
    const content = previewModal.querySelector('.image-preview-content');
    content.style.cssText = `
        max-width: 90vw;
        max-height: 90vh;
        text-align: center;
        position: relative;
    `;
    
    const img = content.querySelector('img');
    img.style.cssText = `
        max-width: 100%;
        max-height: 80vh;
        object-fit: contain;
        border-radius: 10px;
    `;
    
    const closeBtn = content.querySelector('.image-preview-close');
    closeBtn.style.cssText = `
        position: absolute;
        top: -40px;
        right: 0;
        color: white;
        font-size: 30px;
        cursor: pointer;
    `;
    
    const caption = content.querySelector('p');
    caption.style.cssText = `
        color: white;
        margin-top: 15px;
        font-size: 1.1rem;
    `;
    
    document.body.appendChild(previewModal);
    document.body.style.overflow = 'hidden';
    
    setTimeout(() => {
        previewModal.style.opacity = '1';
    }, 10);
    
    // Cerrar modal
    const closePreview = () => {
        previewModal.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(previewModal);
            document.body.style.overflow = 'auto';
        }, 300);
    };
    
    closeBtn.addEventListener('click', closePreview);
    previewModal.addEventListener('click', function(e) {
        if (e.target === previewModal) {
            closePreview();
        }
    });
}

// Función para el botón CTA
function scrollToFlores() {
    const floresSection = document.getElementById('flores');
    const offsetTop = floresSection.offsetTop - 80;
    
    window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
    });
}

// Animaciones de carga
function addLoadingAnimations() {
    // Agregar animación de carga a las imágenes
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        
        // Placeholder mientras carga
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease';
    });
}

// Efectos de paralaje suave
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const header = document.querySelector('.header');
    
    if (header) {
        const rate = scrolled * -0.5;
        header.style.transform = `translateY(${rate}px)`;
    }
});

// Función para manejar errores de carga de imágenes
document.addEventListener('error', function(e) {
    if (e.target.tagName === 'IMG') {
        e.target.style.background = 'linear-gradient(45deg, #f0f0f0, #e0e0e0)';
        e.target.style.display = 'flex';
        e.target.style.alignItems = 'center';
        e.target.style.justifyContent = 'center';
        e.target.innerHTML = '<span style="color: #999;">Imagen no disponible</span>';
    }
}, true);

// Optimización de rendimiento
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Aplicar debounce a eventos de scroll
window.addEventListener('scroll', debounce(updateActiveNavigation, 10));
