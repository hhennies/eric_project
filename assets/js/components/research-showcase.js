class ResearchShowcase extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                }
                
                .section-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 2rem;
                }
                
                .section-title {
                    font-size: 1.875rem;
                    font-weight: 700;
                    color: var(--gray-900);
                }
                
                .dark .section-title {
                    color: white;
                }
                .projects-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                    gap: 2rem;
                }
.project-card {
                    background-color: #ffffff;
border-radius: 1rem;
                    overflow: hidden;
                    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
                    transition: all 0.3s ease;
                }
                
                .dark .project-card {
                    background-color: rgb(31, 41, 55);
                }
                
                .project-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
                }
                .project-image {
                    width: 100%;
                    height: 240px;
                    object-fit: cover;
                }
.project-content {
                    padding: 1.5rem;
                }
                
                .project-title {
                    font-weight: 600;
                    font-size: 1.125rem;
                    margin-bottom: 0.5rem;
                    color: var(--gray-900);
                }
                
                .dark .project-title {
                    color: white;
                }
                
                .project-description {
                    color: var(--gray-600);
                    margin-bottom: 1rem;
                    font-size: 0.875rem;
                }
                
                .dark .project-description {
                    color: var(--gray-400);
                }
                
                .project-tags {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.5rem;
                    margin-top: 1rem;
                }
                
                .project-tag {
                    background-color: var(--primary-100);
                    color: var(--primary-700);
                    padding: 0.25rem 0.75rem;
                    border-radius: 9999px;
                    font-size: 0.75rem;
                }
                
                .dark .project-tag {
                    background-color: var(--primary-900);
                    color: var(--primary-200);
                }
                
                .view-all {
                    margin-top: 2rem;
                    text-align: center;
                }
            </style>
            
            <div>
                <div class="section-header">
                    <h2 class="section-title">Research Projects</h2>
                </div>
                <div class="projects-grid fade-in">
                    <div class="project-card">
                        <img src="https://huggingface.co/spaces/Heni-arc/quantum-insights-lab-explorer/resolve/main/images/IMG_1046.jpg" alt="Social Photography" class="project-image">
<div class="project-content">
                            <h3 class="project-title">imagens de controle de  pessoas deficiência</h3>
                            <p class="project-description">
                                entendendo como famílias atípicas se enxergam no contexto midiático e como isso altera suas realidades
                            </p>
                            <div class="project-tags">
                            </div>
</div>
                    </div>
                </div>
</div>
        `;
    }
}

customElements.define('research-showcase', ResearchShowcase);