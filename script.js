document.addEventListener('DOMContentLoaded', () => {

    const projectsData = [
        {
            id: 'proj-01',
            status: 'completed',
            category: 'Bioinformatics & NLP',
            title: 'Enhancing Biomedical Relation Extraction',
            subtitle: "(Bachelor's Project)",
            summary: 'A deep learning pipeline designed to read and understand complex biomedical literature to automatically identify interactions between different drugs.',
            contributions: [
                'Engineered a complete NLP pipeline using a fine-tuned BERT model on the DDI Extraction 2013 dataset.',
                'Implemented a two-stage process, beginning with highly accurate Drug Name Entity Recognition (DNER).',
                'Developed a classification model that takes pairs of identified drug entities and categorizes their interaction type (e.g., mechanism, effect, advise).',
            ],
            techStack: ['Python', 'PyTorch', 'Hugging Face Transformers', 'NLP'],
            links: {}
        },
        {
            id: 'proj-02',
            status: 'completed',
            category: 'LLMs & Search',
            title: 'LLM-Aware Search and Ranking',
            summary: 'An intelligent search system that goes beyond keywords to understand the contextual meaning of queries, built to provide better information for Large Language Models.',
            contributions: [
                'Designed and built an end-to-end semantic search pipeline using sentence-embedding models to transform text into rich vector representations.',
                'Leveraged state-of-the-art models from the Sentence-Transformers library to capture nuanced contextual information.',
                'Implemented an efficient K-Nearest Neighbors (KNN) ranking algorithm to retrieve the most semantically similar documents from a vector database.',
            ],
            techStack: ['Python', 'Sentence-Transformers', 'RAG', 'LLM'],
            links: { github: 'https://github.com/pegahmn/Information-Retrieval-Fall-2023' }
        },
        {
            id: 'proj-03',
            status: 'completed',
            category: 'Computer Vision',
            title: 'Comparative Analysis of Image Classifiers',
            summary: 'An investigative project that benchmarks classical machine learning against modern deep learning for an image classification task with a limited dataset.',
            contributions: [
                'Implemented a classical ML pipeline using K-means clustering for unsupervised feature extraction, with a Random Forest model for classification.',
                'Developed a deep learning alternative by fine-tuning a pre-trained Convolutional Neural Network (CNN), applying the principle of transfer learning.',
                'Conducted a comparative analysis of the results, evaluating accuracy, precision, and recall of each model to determine the most effective strategy.',
            ],
            techStack: ['Python', 'Scikit-learn', 'PyTorch', 'TensorFlow', 'OpenCV'],
            links: {}
        },
        {
            id: 'proj-04',
            status: 'completed',
            category: 'AI & Algorithms',
            title: 'AI-Driven Othello Game',
            summary: 'A strategic game-playing AI that uses classical search algorithms and advanced heuristics to compete effectively in the board game Othello.',
            contributions: [
                'Developed a robust game engine and an AI agent using the Minimax algorithm with alpha-beta pruning to drastically reduce the search space.',
                'Engineered advanced heuristics and optimizations, including dynamic search depth and Transposition Tables to improve performance.',
            ],
            techStack: ['Python', 'Algorithms'],
            links: {}
        },
        {
            id: 'proj-05',
            status: 'completed',
            category: 'Data Engineering',
            title: 'Amazon Product Crawler and Indexer',
            summary: 'An automated system for scraping product data from Amazon, indexing it for search, and visualizing the results in a custom dashboard.',
            contributions: [
                'Developed a robust web scraper using Selenium to navigate dynamic web pages and extract structured product data.',
                'Designed an optimized schema and indexed the scraped data into an Elasticsearch cluster, making it instantly searchable.',
                'Built interactive Kibana dashboards to visualize key metrics and trends from the collected product data.',
            ],
            techStack: ['Python', 'Selenium', 'Elasticsearch', 'Kibana'],
            links: { github: 'https://github.com/pegahmn/Information-Retrieval-Fall-2023' }
        },
        {
            id: 'proj-06',
            status: 'completed',
            category: 'Software Engineering',
            title: 'FTP Server with Secure Login',
            summary: 'A custom-built File Transfer Protocol (FTP) server that implements secure user authentication, encrypted file transfer, and multi-client handling.',
            contributions: [
                'Engineered a multi-threaded server architecture to handle simultaneous connections from multiple clients efficiently.',
                'Implemented a secure login system and integrated SSL/TLS to encrypt all data transmissions.',
                'Developed core FTP functionalities, including file upload, download, and directory synchronization.',
            ],
            techStack: ['Python', 'Socket', 'SSL', 'Networking'],
            links: { github: 'https://github.com/ehsanhosseini1380/ftp-socket' }
        },
        {
            id: 'proj-07',
            status: 'completed',
            category: 'Information Retrieval',
            title: 'Multilingual Search Engine',
            summary: 'A foundational Information Retrieval (IR) system built from scratch to handle queries in both English and Persian.',
            contributions: [
                'Built a complete IR pipeline, including custom tokenizers and text processors for both English and Persian datasets.',
                'Implemented two classical ranking algorithms, TF-IDF and Jaccard similarity, to score and rank document relevance.',
            ],
            techStack: ['Python', 'NLTK', 'Information Retrieval'],
            links: { github: 'https://github.com/pegahmn/Information-Retrieval-Fall-2023' }
        },
        {
            id: 'proj-08',
            status: 'completed',
            category: 'Machine Learning',
            title: 'Machine Learning Model Implementations',
            summary: 'A library of core machine learning algorithms implemented from scratch without relying on high-level frameworks like Scikit-learn.',
            contributions: [
                'Implemented a suite of classification models including Decision Trees, Logistic Regression, LDA, and KNN.',
                'Coded and visualized the process of gradient descent for optimization and applied PCA for dimensionality reduction.',
            ],
            techStack: ['Python', 'NumPy', 'Pandas', 'Matplotlib'],
            links: {}
        },
        {
            id: 'proj-09',
            status: 'completed',
            category: 'AI & Algorithms',
            title: 'Constraint Satisfaction Problem Solver',
            summary: 'A general-purpose solver for Constraint Satisfaction Problems, implementing several key algorithms for finding valid solutions.',
            contributions: [
                'Modeled a classic CSP and implemented a Backtracking search algorithm as the baseline solver.',
                'Incorporated several powerful heuristics to improve search efficiency, including MRV and LCV.',
                'Implemented inference-based techniques like Forward Checking and the AC-3 algorithm for arc consistency.',
            ],
            techStack: ['Python', 'Algorithms'],
            links: {}
        },
        {
            id: 'proj-10',
            status: 'completed',
            category: 'Computer Science Foundations',
            title: 'Java-Based Compiler for the Dust Language',
            summary: 'A complete compiler built in Java for a custom-designed programming language named "Dust," covering the initial stages of the compilation process.',
            contributions: [
                'Designed the syntax and grammar for a new, simple programming language called "Dust."',
                'Implemented a lexical analyzer (lexer/scanner) to convert raw source code into a stream of tokens.',
                'Built a syntax parser that takes the token stream and constructs a parse tree to validate the program\'s grammatical structure.',
            ],
            techStack: ['Java', 'Compilers'],
            links: { github: 'https://github.com/ehsanhosseini1380/DustCompiler' }
        },
        {
            id: 'proj-11',
            status: 'ongoing',
            category: 'Generative AI',
            title: 'Conversational AI Chatbot',
            summary: 'Developing an intelligent chatbot using Large Language Models to handle complex user queries and maintain context over extended conversations.',
            contributions: [],
            techStack: ['Python', 'LLM', 'FastAPI'],
            links: {}
        }
    ];

    const themeSwitch = document.getElementById('theme-switch');
    const projectList = document.getElementById('project-list');
    const filtersContainer = document.getElementById('filters-container');
    const ongoingContainer = document.getElementById('ongoing-projects-container');
    const geminiModalOverlay = document.getElementById('gemini-modal-overlay');
    const geminiModalClose = document.getElementById('gemini-modal-close');
    const geminiGenerateBtn = document.getElementById('gemini-generate-btn');
    const geminiResultContainer = document.getElementById('gemini-result-container');
    const researchInterestInput = document.getElementById('research-interest-input');
    const copyEmailBtn = document.getElementById('copy-email-btn');
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
                <div class="project-item-content">
                    <p class="project-item-category">${project.category}</p>
                    <h3 class="project-item-title">${project.title} ${project.subtitle || ''}</h3>
                    <p class="project-item-summary">${project.summary}</p>
                    ${contributionsHTML}
                </div>
                <div class="project-item-meta">
                    <div class="project-item-tags">
                        ${project.techStack.map(tech => `<span>${tech}</span>`).join('')}
                    </div>
                    <div class="project-item-links">
                        <div>${githubLink} ${thesisLink}</div>
                        <button class="gemini-btn" data-project-id="${project.id}">✨ Connections</button>
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
                
                let contributionsHTML = '';
                if (project.contributions && project.contributions.length > 0) {
                    contributionsHTML = `
                        <h3 class="subsection-title">Key Contributions</h3>
                        <ul class="contribution-list">
                            ${project.contributions.map(c => `<li>${c}</li>`).join('')}
                        </ul>
                    `;
                }
                
                ongoingHTML += `
                    <div class="project-item">
                        <div class="project-item-content">
                            <p class="project-item-category">${project.category}</p>
                            <h3 class="project-item-title">${project.title}</h3>
                            <p class="project-item-summary">${project.summary}</p>
                            ${contributionsHTML}
                        </div>
                        <div class="project-item-meta">
                            <div class="project-item-tags">
                                ${project.techStack.map(tech => `<span>${tech}</span>`).join('')}
                            </div>
                            <div class="project-item-links" style="margin-top: 1rem;">
                                <div>${githubLink}</div>
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
        if (e.target.closest('.gemini-btn')) {
            currentProjectId = e.target.closest('.gemini-btn').dataset.projectId;
            openModal();
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

        const prompt = `As an expert academic advisor, consider my project titled "${project.title}". The project's summary is: "${project.summary}". Key technologies used were: ${project.techStack.join(', ')}. 
        
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

    copyEmailBtn.addEventListener('click', () => {
        const email = "pegahmotahari@gmail.com";
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
});
