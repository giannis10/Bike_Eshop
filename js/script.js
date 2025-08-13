// Dark Mode Toggle Functionality
function initThemeToggle() {
    const themeToggle = document.querySelector('a[href="#"] img[alt="Theme"]').closest('a');
    
    // Πάντα προεπιλεγμένο το light theme
    const currentTheme = localStorage.getItem('theme') || 'light';
    
    // Set initial theme
    document.documentElement.setAttribute('data-theme', currentTheme);
    
    // Toggle theme function
    function toggleTheme(e) {
        e.preventDefault(); // Prevent the default link behavior
        const newTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    }
    
    // Add click event listener
    themeToggle.addEventListener('click', toggleTheme);
}

// Hamburger Menu Functionality
function initHamburgerMenu() {
    const hamburgerButton = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');
    
    hamburgerButton.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburgerButton.classList.toggle('active');
    });

    // Κλείσιμο του menu όταν κάνουμε κλικ σε κάποιο link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburgerButton.classList.remove('active');
        });
    });

    // Κλείσιμο του menu όταν αλλάζει το μέγεθος του παραθύρου
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            navLinks.classList.remove('active');
            hamburgerButton.classList.remove('active');
        }
    });
}

// Modal Functionality
function initModal() {
    const modal = document.querySelector('.bike-modal-js');
    const modalImg = document.getElementById('modal-bike-img-js');
    const modalTitle = document.getElementById('modal-bike-title-js');
    const modalSpecs = document.getElementById('modal-bike-specs-js');
    const closeBtn = document.querySelector('.close-modal-js');
    const productCards = document.querySelectorAll('.product-card');

    // Open modal when clicking on a product card
    productCards.forEach(card => {
        card.addEventListener('click', () => {
            const title = card.getAttribute('data-title');
            const imgSrc = card.getAttribute('data-img');
            const specs = card.querySelector('.bike-specs').innerHTML;

            modalImg.src = imgSrc;
            modalTitle.textContent = title;
            modalSpecs.innerHTML = specs;
            
            modal.classList.add('active');
            document.body.classList.add('modal-open');
        });
    });

    // Close modal when clicking the close button
    closeBtn.addEventListener('click', () => {
        modal.classList.remove('active');
        document.body.classList.remove('modal-open');
    });

    // Close modal when clicking outside the modal content
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
            document.body.classList.remove('modal-open');
        }
    });

    // Close modal when pressing Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            modal.classList.remove('active');
            document.body.classList.remove('modal-open');
        }
    });
}

// Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initThemeToggle();
    initModal();
    initHamburgerMenu();
}); 