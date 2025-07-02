document.addEventListener('DOMContentLoaded', () => {

    const projectsData = [
        {
            id: 'proj-01', status: 'completed', category: 'Bioinformatics & NLP', title: 'Enhancing Biomedical Relation Extraction', subtitle: "(Bachelor's Thesis)",
            context: 'Identifying Drug-Drug Interactions (DDIs) is a critical and time-consuming task in pharmacology. This project aimed to automate the process by building a system that can accurately detect drug names and classify the nature of their interaction from unstructured text.',
            contributions: [
                'Engineered a complete NLP pipeline using a fine-tuned BERT model on the DDI Extraction 2013 dataset.',
                'Implemented a two-stage process, beginning with highly accurate Drug Name Entity Recognition (DNER).',
                'Developed a classification model that takes pairs of identified drug entities and categorizes their interaction type (e.g., mechanism, effect, advise).',
            ],
            techStack: ['Python', 'PyTorch', 'Hugging Face Transformers', 'NLP'],
            links: { }
        },
        {
            id: 'proj-02', status: 'completed', category: 'LLMs & Search', title: 'LLM-Aware Search and Ranking',
            context: 'Standard keyword search often fails to provide relevant context for Retrieval-Augmented Generation (RAG) systems. This project created a semantic search pipeline to retrieve documents based on their conceptual meaning.',
            contributions: [
                'Designed and built an end-to-end semantic search pipeline using sentence-embedding models to transform text into rich vector representations.',
                'Leveraged state-of-the-art models from the Sentence-Transformers library to capture nuanced contextual information.',
                'Implemented an efficient K-Nearest Neighbors (KNN) ranking algorithm to retrieve the most semantically similar documents from a vector database.',
            ],
            techStack: ['Python', 'Sentence-Transformers', 'RAG', 'LLM'],
            links: { github: 'https://github.com/pegahmn/Information-Retrieval-Fall-2023'}
        },
        {
            id: 'proj-03', status: 'completed', category: 'Data Engineering', title: 'Amazon Product Crawler and Indexer',
            context: 'Businesses and researchers often need structured, up-to-date data from dynamic e-commerce websites. This project created a full data pipeline to extract, store, and analyze product information from Amazon.',
            contributions: [
                'Developed a robust web scraper using Selenium to navigate dynamic web pages and extract structured product data.',
                'Designed an optimized schema and indexed the scraped data into an Elasticsearch cluster, making it instantly searchable.',
                'Built interactive Kibana dashboards to visualize key metrics and trends from the collected product data.',
            ],
            techStack: ['Python', 'Selenium', 'Elasticsearch', 'Kibana'],
            links: { github: 'https://github.com/pegahmn/Information-Retrieval-Fall-2023' }
        },
        {
            id: 'proj-04', status: 'completed', category: 'Information Retrieval', title: 'Multilingual Search Engine',
            context: 'To truly understand how search engines work, it is essential to build one from the ground up. This project implemented the core components of an IR system, including handling multiple languages.',
            contributions: [
                'Built a complete IR pipeline, including custom tokenizers and text processors for both English and Persian datasets.',
                'Implemented two classical ranking algorithms, TF-IDF and Jaccard similarity, to score and rank document relevance.',
            ],
            techStack: ['Python', 'NLTK', 'Information Retrieval'],
            links: { github: 'https://github.com/pegahmn/Information-Retrieval-Fall-2023' }
        },
        {
            id: 'proj-05', status: 'completed', category: 'Computer Vision', title: 'Comparative Analysis of Image Classifiers',
            context: "When working with small, specialized datasets, it's not always clear whether a complex deep learning model will outperform a simpler, classical approach. This project explored that trade-off by building and comparing two distinct classifiers for a floral dataset.",
            contributions: [
                'Implemented a classical ML pipeline using K-means clustering for unsupervised feature extraction, with a Random Forest model for classification.',
                'Developed a deep learning alternative by fine-tuning a pre-trained Convolutional Neural Network (CNN), applying the principle of transfer learning.',
                'Conducted a comparative analysis of the results, evaluating accuracy, precision, and recall of each model to determine the most effective strategy.',
            ],
            techStack: ['Python', 'Scikit-learn', 'PyTorch', 'TensorFlow', 'OpenCV'],
            links: { }
        },
        {
            id: 'proj-06', status: 'completed', category: 'Machine Learning', title: 'Machine Learning Model Implementations',
            context: 'The best way to understand how algorithms work is to build them yourself. This project involved coding several key ML models from first principles to gain a deep intuition for their internal mechanics.',
            contributions: [
                'Implemented a suite of classification models including Decision Trees, Logistic Regression, LDA, and KNN.',
                'Coded and visualized the process of gradient descent for optimization and applied PCA for dimensionality reduction.',
            ],
            techStack: ['Python', 'NumPy', 'Pandas', 'Matplotlib'],
            links: { }
        },
        {
            id: 'proj-07', status: 'completed', category: 'AI & Algorithms', title: 'AI-Driven Othello Game',
            context: 'The game of Othello provides a classic environment for exploring adversarial search problems in AI. The goal was to build an agent that could not only follow the rules but also make strategic, forward-looking decisions.',
            contributions: [
                'Developed a robust game engine and an AI agent using the Minimax algorithm with alpha-beta pruning to drastically reduce the search space.',
                'Engineered advanced heuristics and optimizations, including dynamic search depth and Transposition Tables to improve performance.',
            ],
            techStack: ['Python', 'Algorithms'],
            links: {}
        },
        {
            id: 'proj-08', status: 'completed', category: 'AI & Algorithms', title: 'Constraint Satisfaction Problem Solver',
            context: 'CSPs are a fundamental problem class in artificial intelligence. This project involved building a framework to model and solve these problems efficiently.',
            contributions: [
                'Modeled a classic CSP and implemented a Backtracking search algorithm as the baseline solver.',
                'Incorporated several powerful heuristics to improve search efficiency, including MRV and LCV.',
                'Implemented inference-based techniques like Forward Checking and the AC-3 algorithm for arc consistency.',
            ],
            techStack: ['Python', 'Algorithms'],
            links: { }
        },
        {
            id: 'proj-9', status: 'completed', category: 'Computer Science Foundations', title: 'Java-Based Compiler for the Dust Language',
            context: 'Building a compiler is a rite of passage in computer science that demonstrates a deep understanding of language theory, parsing, and program structure. This project tackled the front-end components of a modern compiler.',
            contributions: [
                'Designed the syntax and grammar for a new, simple programming language called "Dust."',
                'Implemented a lexical analyzer (lexer/scanner) to convert raw source code into a stream of tokens.',
                'Built a syntax parser that takes the token stream and constructs a parse tree to validate the program\'s grammatical structure.',
            ],
            techStack: ['Java', 'Compilers'],
            links: { github: 'https://github.com/ehsanhosseini1380/DustCompiler' }
        },
        {
            id: 'proj-10', status: 'completed', category: 'Software Engineering', title: 'FTP Server with Secure Login',
            context: 'Understanding network protocols and security is fundamental to software engineering. This project involved building a functional and secure FTP server from the ground up using socket programming.',
            contributions: [
                'Engineered a multi-threaded server architecture to handle simultaneous connections from multiple clients efficiently.',
                'Implemented a secure login system and integrated SSL/TLS to encrypt all data transmissions.',
                'Developed core FTP functionalities, including file upload, download, and directory synchronization.',
            ],
            techStack: ['Python', 'Socket', 'SSL', 'Networking'],
            links: { github: 'https://github.com/ehsanhosseini1380/ftp-socket' }
        },
        {
            id: 'proj-11', status: 'ongoing', category: 'Generative AI', title: 'Conversational AI Chatbot',
            context: 'This ongoing research project focuses on developing an intelligent chatbot using Large Language Models to handle complex user queries and maintain context over extended conversations.',
            contributions: [
                'Currently implementing a RAG (Retrieval-Augmented Generation) pipeline to ground the model in factual knowledge.',
                'Designing a FastAPI backend to serve the model and manage user sessions.',
            ],
            techStack: ['Python', 'LLM', 'FastAPI'],
            links: {}
        },
        {
            id: 'proj-12',
            status: 'ongoing', // Set as 'ongoing' for now
            category: 'NLP & LLMs',
            title: 'KG-Gen: Knowledge Graph Generator',
            context: 'A web application designed to extract structured knowledge graphs from unstructured text. Leverages Google Gemini Large Language Models (LLMs) for entity and relationship extraction, transforming complex information into an interactive and visually intuitive graph representation.',
            contributions: [
                'Developed a modular Python backend for knowledge graph extraction using LangChain and Google Gemini API.',
                'Implemented an interactive web interface with Streamlit, supporting text area and .txt file inputs.',
                'Designed a refactored project structure for enhanced maintainability and scalability.',
                'Integrated Pyvis for dynamic and customizable graph visualizations.',
                'Ensured secure handling of API keys via environment variables.'
            ],
            techStack: ['Python', 'Streamlit', 'LangChain', 'Google Gemini API', 'Pyvis', 'LLM', 'NLP', 'Generative AI', 'Knowledge Graph'], // Relevant keywords
            links: { github: 'https://github.com/pegahmn/KG-Gen', live: 'https://kg-gen-app.streamlit.app/'
            }
    }
    ];

    const researchInterests = [
        {
            category: 'Natural Language Processing & LLMs',
            interests: ['NLP', 'LLMs', 'Transformers', 'Chatbots', 'RAG', 'Information Retrieval', 'Graph RAG', 'Multimodality']
        },
        {
            category: 'Deep Learning Paradigms',
            interests: ['Deep Learning', 'Generalization', 'Few-shot & Zero-shot Learning', 'Self-Supervised Learning']
        },
        {
            category: 'Reinforcement Learning & AI Agents',
            interests: ['Reinforcement Learning', 'Deep Reinforcement Learning', 'AI Agents', 'Decision Making']
        },
        {
            category: 'Computer Vision',
            interests: ['Object Detection', 'Image Classification', 'Image Segmentation', 'Complex Event Detection', 'Generative Models for Vision']
        },
        {
            category: 'Applied AI & Human-Centered Systems',
            interests: ['Computational Biology', 'Bioinformatics', 'Human-Computer Interaction (HCI)', 'Software Engineering']
        }
    ];

    const themeSwitch = document.getElementById('theme-switch');
    const projectList = document.getElementById('project-list');
    const filtersContainer = document.getElementById('filters-container');
    const ongoingContainer = document.getElementById('ongoing-projects-container');
    const researchContainer = document.getElementById('research-interests-container');
    const geminiModalOverlay = document.getElementById('gemini-modal-overlay');
    const geminiModalClose = document.getElementById('gemini-modal-close');
    const geminiGenerateBtn = document.getElementById('gemini-generate-btn');
    const geminiResultContainer = document.getElementById('gemini-result-container');
    const researchInterestInput = document.getElementById('research-interest-input');
    const emailCopyBtn = document.getElementById('email-copy-btn');
    const copyFeedback = document.getElementById('copy-feedback');

    let activeFilter = 'All';
    let currentProjectId = null;

    function applyTheme(theme) {
        const icon = themeSwitch.querySelector('i');
        if (theme === 'dark') {
            document.body.classList.add('dark-theme');
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            document.body.classList.remove('dark-theme');
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    }

    themeSwitch.addEventListener('click', () => {
        const isDark = document.body.classList.toggle('dark-theme');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        applyTheme(isDark ? 'dark' : 'light');
    });
    
    const savedTheme = localStorage.getItem('theme');
    applyTheme(savedTheme || 'light');
    
    function renderResearchInterests() {
        researchContainer.innerHTML = researchInterests.map(cat => `
            <div class="research-category">
                <h3>${cat.category}</h3>
                <div class="research-tags">
                    ${cat.interests.map(interest => `<span class="research-tag">${interest}</span>`).join('')}
                </div>
            </div>
        `).join('');
    }

    function renderProjects() {
        projectList.innerHTML = '';
        ongoingContainer.innerHTML = '';

        const completedProjects = projectsData.filter(p => p.status === 'completed');
        const ongoingProjects = projectsData.filter(p => p.status === 'ongoing');

        const filteredCompleted = completedProjects.filter(p => activeFilter === 'All' || [p.category, ...p.techStack].includes(activeFilter));

        const completedFragment = document.createDocumentFragment();
        filteredCompleted.forEach(project => {
            const item = document.createElement('div');
            item.className = 'project-item';
            
            let githubLink = '';
            if (project.links.github) {
                githubLink = `<a href="${project.links.github}" target="_blank">View on GitHub</a>`;
            }

            let thesisLink = '';
            if (project.links.thesis) {
                thesisLink = `<a href="${project.links.thesis}" target="_blank">Read Thesis</a>`;
            }
            
            let liveLink = '';
            if (project.links.live && project.links.live !== '#') {
                liveLink = `<a href="${project.links.live}" target="_blank">| Live Demo</a>`;
            }

            let contributionsHTML = '';
            if (project.contributions && project.contributions.length > 0) {
                contributionsHTML = `
                    <div class="contribution-details">
                        <h4 class="subsection-title">Key Contributions</h4>
                        <ul class="contribution-list">
                            ${project.contributions.map(c => `<li>${c}</li>`).join('')}
                        </ul>
                    </div>
                    <button class="contribution-toggle">Read More...</button>
                `;
            }
            
            item.innerHTML = `
                <div class="project-item-main">
                    <div class="project-item-content">
                        <p class="project-item-category">${project.category}</p>
                        <h3 class="project-item-title">${project.title} ${project.subtitle || ''}</h3>
                        <p class="project-item-summary">${project.context}</p>
                        ${contributionsHTML}
                    </div>
                    <div class="project-item-meta">
                        <div class="project-item-tags">
                            ${project.techStack.map(tech => `<span>${tech}</span>`).join('')}
                        </div>
                        <div class="project-item-links">
                            <div>${githubLink} ${thesisLink} ${liveLink}</div>
                            <button class="gemini-btn" data-project-id="${project.id}">✨ Connections</button>
                        </div>
                    </div>
                </div>
            `;
            completedFragment.appendChild(item);
        });
        projectList.appendChild(completedFragment);
        
        if (ongoingProjects.length > 0) {
            let ongoingHTML = '<h3 class="subsection-title">Ongoing Research & Development</h3>';
            ongoingProjects.forEach(project => {
                let githubLink = '';
                if (project.links.github) {
                    githubLink = `<a href="${project.links.github}" target="_blank">View on GitHub</a>`;
                }

                let liveLink = '';
                if (project.links.live && project.links.live !== '#') {
                    liveLink = `<a href="${project.links.live}" target="_blank">| Live Demo</a>`;
                }

                let contributionsHTML = '';
                if (project.contributions && project.contributions.length > 0) {
                    contributionsHTML = `
                        <div class="contribution-details">
                            <h4 class="subsection-title">Key Contributions</h4>
                            <ul class="contribution-list">
                                ${project.contributions.map(c => `<li>${c}</li>`).join('')}
                            </ul>
                        </div>
                        <button class="contribution-toggle">Read More...</button>
                    `;
                }

                ongoingHTML += `
                    <div class="project-item">
                        <div class="project-item-main">
                            <div class="project-item-content">
                                <p class="project-item-category">${project.category}</p>
                                <h3 class="project-item-title">${project.title}</h3>
                                <p class="project-item-summary">${project.context}</p>
                                ${contributionsHTML}
                            </div>
                            <div class="project-item-meta">
                                <div class="project-item-tags">
                                    ${project.techStack.map(tech => `<span>${tech}</span>`).join('')}
                                </div>
                                <div class="project-item-links" style="margin-top: 1rem;">
                                    <div>${githubLink} ${liveLink}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            });
            ongoingContainer.innerHTML = ongoingHTML;
        }
    }

    function setupFilters() {
        const completedProjects = projectsData.filter(p => p.status === 'completed');
        const categories = ['All', ...new Set(completedProjects.map(p => p.category))];
        const techs = [...new Set(completedProjects.flatMap(p => p.techStack))];
        const allFilterTags = [...new Set(categories.concat(techs))];

        filtersContainer.innerHTML = allFilterTags.map(filter => 
            `<button class="filter-btn ${filter === 'All' ? 'active' : ''}" data-filter="${filter}">${filter}</button>`
        ).join('');

        filtersContainer.addEventListener('click', e => {
            if (e.target.tagName === 'BUTTON') {
                document.querySelector('.filter-btn.active')?.classList.remove('active');
                e.target.classList.add('active');
                activeFilter = e.target.dataset.filter;
                renderProjects();
            }
        });
    }

    function openModal() {
        geminiResultContainer.innerHTML = '<p>Enter your research area above and click generate.</p>';
        researchInterestInput.value = '';
        geminiModalOverlay.classList.add('visible');
    }

    function closeModal() {
        geminiModalOverlay.classList.remove('visible');
    }

    document.addEventListener('click', (e) => {
        const geminiBtn = e.target.closest('.gemini-btn');
        const toggleBtn = e.target.closest('.contribution-toggle');

        if (geminiBtn) {
            currentProjectId = geminiBtn.dataset.projectId;
            openModal();
        }
        if (toggleBtn) {
            const details = toggleBtn.previousElementSibling;
            if (details && details.classList.contains('contribution-details')) {
                const isVisible = details.classList.toggle('visible');
                toggleBtn.textContent = isVisible ? 'Read Less' : 'Read More...';
            }
        }
    });
    
    geminiModalClose.addEventListener('click', closeModal);
    geminiModalOverlay.addEventListener('click', (e) => {
        if (e.target === geminiModalOverlay) {
            closeModal();
        }
    });

    geminiGenerateBtn.addEventListener('click', async () => {
        const researchInterest = researchInterestInput.value.trim();
        if (!researchInterest || !currentProjectId) {
            geminiResultContainer.innerHTML = '<p style="color: red;">Please enter a research interest.</p>';
            return;
        }

        const project = projectsData.find(p => p.id === currentProjectId);
        if (!project) return;
        
        geminiGenerateBtn.disabled = true;
        geminiGenerateBtn.innerHTML = `<span>Generating...</span>`;
        geminiResultContainer.innerHTML = '<p>Thinking...</p>';

        const prompt = `As an expert academic advisor, consider my project titled "${project.title}". The project's summary is: "${project.context}". Key technologies used were: ${project.techStack.join(', ')}. 
        
        A professor's research interest is "${researchInterest}". 
        
        Please generate 2-3 concise bullet points explaining how the skills and experience from my project could be directly applied to the professor's research area. Frame the response as direct, actionable connections.`;

        try {
            const payload = { contents: [{ role: "user", parts: [{ text: prompt }] }] };
            const apiKey = "";
            const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;
            
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (!response.ok) throw new Error(`API error: ${response.statusText}`);

            const result = await response.json();
            
            if (result.candidates && result.candidates.length > 0) {
                const text = result.candidates[0].content.parts[0].text;
                const formattedText = text.replace(/\*/g, '•').replace(/\n/g, '<br>');
                geminiResultContainer.innerHTML = `<div class="prose">${formattedText}</div>`;
            } else {
                throw new Error("No content received from API.");
            }

        } catch (error) {
            console.error("Gemini API call failed:", error);
            geminiResultContainer.innerHTML = '<p style="color: red;">Sorry, there was an error generating connections. Please try again later.</p>';
        } finally {
            geminiGenerateBtn.disabled = false;
            geminiGenerateBtn.innerHTML = 'Generate';
        }
    });

    emailCopyBtn.addEventListener('click', (e) => {
        const email = e.currentTarget.dataset.email;
        const tempTextArea = document.createElement('textarea');
        tempTextArea.value = email;
        document.body.appendChild(tempTextArea);
        tempTextArea.select();
        document.execCommand('copy');
        document.body.removeChild(tempTextArea);

        copyFeedback.classList.add('visible');
        setTimeout(() => {
            copyFeedback.classList.remove('visible');
        }, 2000);
    });

    const navLinks = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 80) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    setupFilters();
    renderProjects();
    renderResearchInterests();
});
