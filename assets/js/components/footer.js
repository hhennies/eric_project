class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    background-color: var(--gray-100);
                    padding: 4rem 0;
                    margin-top: 4rem;
                }
                
                .dark :host {
                    background-color: var(--gray-800);
                }
                
                .footer-container {
                    max-width: 1280px;
                    margin: 0 auto;
                    padding: 0 2rem;
                }
                
                .footer-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                    gap: 3rem;
                    padding-bottom: 3rem;
                    border-bottom: 1px solid var(--gray-200);
                }
                
                .dark .footer-grid {
                    border-bottom-color: var(--gray-700);
                }
                .footer-logo {
                    font-size: 1.25rem;
                    font-weight: 700;
                    color: #ec4899;
                    margin-bottom: 1rem;
                    display: inline-block;
                }
                
                .dark .footer-logo {
                    color: #f9a8d4;
}
                
                .footer-description {
                    color: var(--gray-600);
                    margin-bottom: 1.5rem;
                    line-height: 1.625;
                }
                
                .dark .footer-description {
                    color: var(--gray-400);
                }
                
                .footer-heading {
                    font-weight: 600;
                    font-size: 1.125rem;
                    margin-bottom: 1.5rem;
                    color: var(--gray-900);
                }
                
                .dark .footer-heading {
                    color: var(--gray-100);
                }
                
                .footer-links {
                    display: flex;
                    flex-direction: column;
                    gap: 0.75rem;
                }
                
                .footer-link {
                    color: var(--gray-600);
                    transition: color 0.2s;
                }
                
                .dark .footer-link {
                    color: var(--gray-400);
                }
                .footer-link:hover {
                    color: #ec4899;
                }
                
                .dark .footer-link:hover {
                    color: #f9a8d4;
}
                
                .footer-bottom {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-top: 3rem;
                    padding-top: 2rem;
                }
                
                .footer-copyright {
                    color: var(--gray-500);
                    font-size: 0.875rem;
                }
                
                .dark .footer-copyright {
                    color: var(--gray-500);
                }
                
                .footer-social {
                    display: flex;
                    gap: 1rem;
                }
                
                .social-icon {
                    color: var(--gray-500);
                    transition: color 0.2s;
                }
                
                .social-icon:hover {
                    color: var(--primary-600);
                }
                
                .dark .social-icon {
                    color: var(--gray-400);
                }
                
                .dark .social-icon:hover {
                    color: var(--primary-400);
                }
            </style>
            
            <div class="footer-container">
                <div class="footer-grid">
                    <div>
                        <a href="#" class="footer-logo">Fotografia Social</a>
                        <p class="footer-description">
                            onde a fotografia move a dialética social
</p>
                    </div>
                    
                    <div>
                        <h4 class="footer-heading">Pesquisa</h4>
                        <div class="footer-links">
                            <a href="#" class="footer-link">Fotografia de Casamento</a>
                            <a href="#" class="footer-link">Sessões de Retrato</a>
                            <a href="#" class="footer-link">Cobertura de Eventos</a>
                            <a href="#" class="footer-link">Trabalho Comercial</a>
</div>
                    </div>
                    
                    <div>
                        <h4 class="footer-heading">Recursos</h4>
                        <div class="footer-links">
                            <a href="#" class="footer-link">Publicações</a>
                            <a href="#" class="footer-link">Artigos</a>
                            <a href="#" class="footer-link">Repositórios</a>
                            <a href="#" class="footer-link">Dados</a>
</div>
                    </div>
                    
                    <div>
                        <h4 class="footer-heading">Conecte-se</h4>
                        <div class="footer-links">
                            <a href="#" class="footer-link">Twitter</a>
                            <a href="#" class="footer-link">LinkedIn</a>
                            <a href="#" class="footer-link">GitHub</a>
                            <a href="contact.html" class="footer-link">E-mail</a>
</div>
                    </div>
                </div>
                
                <div class="footer-bottom">
                    <p class="footer-copyright">© 2023 Fotografia Social. Todos os direitos reservados.</p>
<div class="footer-social">
                        <a href="#" class="social-icon">
                            <i data-feather="twitter"></i>
                        </a>
                        <a href="#" class="social-icon">
                            <i data-feather="github"></i>
                        </a>
                        <a href="#" class="social-icon">
                            <i data-feather="linkedin"></i>
                        </a>
                        <a href="#" class="social-icon">
                            <i data-feather="youtube"></i>
                        </a>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('custom-footer', CustomFooter);