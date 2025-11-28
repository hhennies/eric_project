class CustomNavbar extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    z-index: 50;
                    backdrop-filter: blur(16px) saturate(180%);
                    -webkit-backdrop-filter: blur(16px) saturate(180%);
                    background-color: rgba(255, 255, 255, 0.4);
                    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
                    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
                }
                .dark :host {
                    backdrop-filter: blur(16px) saturate(180%);
                    -webkit-backdrop-filter: blur(16px) saturate(180%);
                    background-color: rgba(17, 24, 39, 0.5);
                    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                }
.nav-container {
                    max-width: 1280px;
                    margin: 0 auto;
                    padding: 1rem 2rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                .nav-logo {
                    font-weight: 700;
                    font-size: 1.25rem;
                    color: rgba(0, 0, 0, 0.8);
                    display: flex;
                    align-items: center;
                    text-shadow: 0 1px 2px rgba(255, 255, 255, 0.5);
                }
                .dark .nav-logo {
                    color: rgba(255, 255, 255, 0.9);
                    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
                }
.nav-menu {
                    display: flex;
                    gap: 1.5rem;
                }
                .nav-link {
                    font-weight: 500;
                    color: rgba(0, 0, 0, 0.7);
                    transition: all 0.3s ease;
                    text-shadow: 0 1px 2px rgba(255, 255, 255, 0.5);
                }
                
                .dark .nav-link {
                    color: rgba(255, 255, 255, 0.8);
                    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
                }
                
                .nav-link:hover {
                    color: var(--primary-600);
                    transform: translateY(-1px);
                }
                
                .dark .nav-link:hover {
                    color: var(--primary-400);
                    transform: translateY(-1px);
                }
.mobile-menu-button {
                    display: none;
                }
                
                @media (max-width: 768px) {
                    .nav-menu {
                        display: none;
                    }
                    
                    .mobile-menu-button {
                        display: block;
                    }
                }
            </style>
            
            <div class="nav-container">
                <a href="#" class="nav-logo text-gray-700/70 dark:text-gray-300/70">
                    Fotografia Social
                </a>
<div class="hidden md:flex nav-menu">
                    <a href="#about" class="nav-link">Sobre</a>
                    <a href="#team" class="nav-link">Equipe</a>
                    <a href="#research" class="nav-link">Pesquisa</a>
                    <a href="#attributes" class="nav-link">Atributos</a>
                    <a href="contact.html" class="nav-link">Contato</a>
</div>
<button class="md:hidden mobile-menu-button text-gray-600 dark:text-gray-300">
                    <i data-feather="menu"></i>
                </button>
            </div>
        `;
        
        // Mobile menu toggle functionality would be added here
    }
}

customElements.define('custom-navbar', CustomNavbar);