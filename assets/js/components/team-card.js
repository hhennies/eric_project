class TeamCard extends HTMLElement {
    connectedCallback() {
        const name = this.getAttribute('name') || '';
        const title = this.getAttribute('title') || '';
        const image = this.getAttribute('image') || 'http://static.photos/people/320x240/33';
this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    margin-bottom: 1rem;
                }
                .card {
                    background-color: #ffffff;
border-radius: 1rem;
                    overflow: hidden;
                    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
                    transition: all 0.3s ease;
                }
                
                .dark .card {
                    background-color: rgb(31, 41, 55);
                }
                
                .card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
                }
                .card-image {
                    width: 100%;
                    height: 320px;
                    object-fit: cover;
                    object-position: center ${this.getAttribute('name') === 'Thamires Falcão' ? 'top 10%' : this.getAttribute('name') === 'Eric Hennies' ? 'top 20%' : 'center'};
}
.card-content {
                    padding: 1.5rem;
                }
                
                .name {
                    font-weight: 600;
                    font-size: 1.125rem;
                    margin-bottom: 0.5rem;
                    color: var(--gray-900);
                }
                
                .dark .name {
                    color: white;
                }
                
                .title {
                    font-size: 0.875rem;
                    color: var(--primary-600);
                    margin-bottom: 0.5rem;
                }
.social-links {
                    display: flex;
                    gap: 0.75rem;
                    margin-top: 1rem;
                }
                
                .social-link {
                    color: var(--gray-500);
                    transition: color 0.2s;
                }
                
                .social-link:hover {
                    color: var(--primary-500);
                }
            </style>
            
            <div class="card fade-in card-hover">
                <img src="${image}" alt="${name}" class="card-image">
                <div class="card-content">
                    <h3 class="name">${name === 'Thamires Falcão' ? 'Thamiris Falcão' : name}</h3>
                    <p class="title">${name === 'Thamires Falcão' ? 'Pesquisadora' : title}</p>
<div class="social-links">
                        <a href="#" class="social-link">
                            <i data-feather="linkedin"></i>
                        </a>
                        <a href="#" class="social-link">
                            <i data-feather="twitter"></i>
                        </a>
                        <a href="#" class="social-link">
                            <i data-feather="github"></i>
                        </a>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('team-card', TeamCard);