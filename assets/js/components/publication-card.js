class PublicationCard extends HTMLElement {
    connectedCallback() {
        const title = this.getAttribute('title') || '';
        const journal = this.getAttribute('journal') || '';
        const year = this.getAttribute('year') || '';
        const authors = this.getAttribute('authors') || '';
        const doi = this.getAttribute('doi') || '';
        
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    margin-bottom: 1.5rem;
                }
                .publication {
                    background-color: #ffffff;
border-radius: 0.75rem;
                    padding: 1.5rem;
                    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
                    transition: all 0.3s ease;
                }
                
                .dark .publication {
                    background-color: rgb(31, 41, 55);
                }
                
                .publication:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
                }
                
                .title {
                    font-weight: 600;
                    font-size: 1.125rem;
                    margin-bottom: 0.5rem;
                    color: var(--gray-900);
                }
                
                .dark .title {
                    color: white;
                }
                
                .meta {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 1rem;
                    margin-bottom: 0.75rem;
                    font-size: 0.875rem;
                    color: var(--gray-600);
                }
                
                .dark .meta {
                    color: var(--gray-400);
                }
                
                .authors {
                    margin-bottom: 0.5rem;
                    font-style: italic;
                    color: var(--gray-600);
                }
                
                .dark .authors {
                    color: var(--gray-400);
                }
                
                .doi {
                    font-size: 0.875rem;
                    color: var(--primary-600);
                    display: flex;
                    align-items: center;
                }
                
                .doi i {
                    margin-right: 0.25rem;
                }
                
                .actions {
                    display: flex;
                    gap: 1rem;
                    margin-top: 1rem;
                }
                
                .action {
                    display: flex;
                    align-items: center;
                    font-size: 0.875rem;
                    color: var(--primary-600);
                }
                
                .action i {
                    margin-right: 0.25rem;
                }
            </style>
            
            <div class="publication card-hover fade-in">
                <h3 class="title">${title}</h3>
                <div class="meta">
                    <span>${journal}</span>
                    <span>•</span>
                    <span>${year}</span>
                </div>
                <p class="authors">${authors}</p>
                <a href="https://doi.org/${doi}" target="_blank" class="doi">
                    <i data-feather="external-link"></i>
                    DOI: ${doi}
                </a>
                <div class="actions">
                    <a href="#" class="action">
                        <i data-feather="download"></i>
                        Baixar PDF
                    </a>
                    <a href="#" class="action">
                        <i data-feather="bookmark"></i>
                        Citacao
                    </a>
</div>
            </div>
        `;
    }
}

customElements.define('publication-card', PublicationCard);