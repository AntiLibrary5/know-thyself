// Know Thyself — rendering engine.
// Content lives in content/*.js and is loaded before this file:
//   `library`  — the seven books, each with parts and cards
//   `siteMeta` — home page copy, per-book introductions, the Big Picture synthesis

document.addEventListener('DOMContentLoaded', () => {
    const appContainer = document.getElementById('app-container');
    const sidebarContainer = document.getElementById('sidebar');

    if (!appContainer || !sidebarContainer) {
        console.error("Fatal Error: Could not find app containers. The app will not run.");
        return;
    }

    appContainer.classList.add('active');

    // App State
    // view: 'home' | 'book' | 'part' | 'detail' | 'bigPicture'
    let state = {
        view: 'home',
        currentChapterIndex: 0,
        currentPartIndex: 0,
        currentCardIndex: 0,
    };

    // --- HELPERS ---

    function bookMeta(chapter) {
        return (siteMeta.books && siteMeta.books[chapter.title]) || {};
    }

    function countCards(chapter) {
        return chapter.parts.reduce((total, part) => total + part.cards.length, 0);
    }

    // Illustrations are still being drawn for some cards. Rather than showing a
    // broken-image icon, swap the <img> out for a styled "illustration pending"
    // panel. Cached failures never re-fire the error event, so check for those too.
    function markMissingImages(root) {
        root.querySelectorAll('img').forEach(img => {
            const fail = () => {
                if (img.parentElement) img.parentElement.classList.add('img-missing');
                img.remove();
            };
            if (img.complete && img.naturalWidth === 0) fail();
            else img.addEventListener('error', fail, { once: true });
        });
    }

    // --- RENDER FUNCTIONS ---

    function renderSidebar() {
        const sidebarHTML = `
            <header class="sidebar-header">
                <div class="icon">🧠</div>
                <div>
                    <h1 class="title">${siteMeta.site.title}</h1>
                    <p class="subtitle">${siteMeta.site.tagline}</p>
                </div>
            </header>
            <nav>
                <ul class="sidebar-nav">
                    <li class="nav-item nav-meta ${state.view === 'home' ? 'active' : 'inactive'}">
                        <a href="#" data-view="home"><span class="icon">🏛️</span> The Library</a>
                    </li>
                    <li class="nav-item nav-meta ${state.view === 'bigPicture' ? 'active' : 'inactive'}">
                        <a href="#" data-view="bigPicture"><span class="icon">🔭</span> The Big Picture</a>
                    </li>
                    <li class="nav-divider"><span>The Books</span></li>
                    ${library.map((chap, index) => {
                        const isChapterActive = index === state.currentChapterIndex
                            && (state.view === 'book' || state.view === 'part' || state.view === 'detail');
                        let subNavHTML = '';
                        if (isChapterActive && chap.parts) {
                            subNavHTML = '<ul class="nav-sub-list">';
                            chap.parts.forEach((part, partIndex) => {
                                const isPartActive = partIndex === state.currentPartIndex
                                    && (state.view === 'part' || state.view === 'detail');
                                subNavHTML += `
                                    <li class="nav-sub-item ${isPartActive ? 'active' : ''}">
                                        <a href="#" data-part-index="${partIndex}">${part.title}</a>
                                    </li>
                                `;
                            });
                            subNavHTML += '</ul>';
                        }
                        return `
                            <li class="nav-item ${isChapterActive ? 'active' : 'inactive'}">
                                <a href="#" data-chapter-index="${index}">
                                    <span class="icon">${chap.icon}</span> ${chap.title}
                                </a>
                                ${subNavHTML}
                            </li>
                        `;
                    }).join('')}
                </ul>
            </nav>
            <footer class="sidebar-footer">
                <div class="tip-box">
                    <span class="icon">💡</span>
                    <p><strong>Tip:</strong> Click a card to explore any concept further.</p>
                </div>
            </footer>
        `;
        sidebarContainer.innerHTML = sidebarHTML;
        addSidebarListeners();
    }

    function renderHomeView() {
        const booksHTML = library.map((chap, index) => {
            const meta = bookMeta(chap);
            return `
                <article class="book-card" data-chapter-index="${index}">
                    <div class="book-card-icon">${chap.icon}</div>
                    <h2 class="book-card-title">${chap.title}</h2>
                    <p class="book-card-author">${meta.author || ''}${meta.year ? ` · ${meta.year}` : ''}</p>
                    <p class="book-card-thesis">${meta.thesis || ''}</p>
                    <footer class="book-card-footer">
                        <span>${chap.parts.length} parts</span>
                        <span>${countCards(chap)} ideas</span>
                    </footer>
                </article>
            `;
        }).join('');

        appContainer.innerHTML = `
            <header class="page-header">
                <span class="tag">The Library</span>
                <h1 class="title">${siteMeta.site.title}</h1>
                <p class="subtitle">${siteMeta.site.tagline}</p>
            </header>
            <div class="site-intro">${siteMeta.site.intro}</div>
            <div class="book-grid">${booksHTML}</div>
        `;
        addHomeViewListeners();
    }

    function renderBookIntroView() {
        const chapter = library[state.currentChapterIndex];
        const meta = bookMeta(chapter);

        const partsHTML = chapter.parts.map((part, partIndex) => `
            <li class="book-intro-part" data-part-index="${partIndex}">
                <a href="#" data-part-index="${partIndex}">
                    <span class="book-intro-part-tag">${part.tag}</span>
                    <span class="book-intro-part-title">${part.title}</span>
                    <span class="book-intro-part-subtitle">${part.subtitle}</span>
                    <span class="book-intro-part-count">${part.cards.length} ideas</span>
                </a>
            </li>
        `).join('');

        appContainer.innerHTML = `
            <div class="book-intro">
                <a href="#" class="back-button" data-view="home">
                    <span class="icon">‹</span> Back to the Library
                </a>
                <header class="book-intro-header">
                    <div class="book-intro-icon">${chapter.icon}</div>
                    <h1 class="detail-title">${chapter.title}</h1>
                    <p class="book-intro-author">${meta.author || ''}${meta.year ? ` · ${meta.year}` : ''}</p>
                </header>
                <div class="book-intro-body">
                    <h2 class="book-intro-label">The central idea</h2>
                    <p class="book-intro-thesis">${meta.thesis || ''}</p>
                    <h2 class="book-intro-label">Why it's in this library</h2>
                    <p>${meta.whyItsHere || ''}</p>
                </div>
                <h2 class="book-intro-label">The parts</h2>
                <ol class="book-intro-parts">${partsHTML}</ol>
                <div class="book-intro-cta">
                    <a href="#" class="start-reading" data-part-index="0">Start reading ›</a>
                </div>
            </div>
        `;
        addBookIntroListeners();
    }

    function renderBigPictureView() {
        const bp = siteMeta.bigPicture;

        const stonesHTML = bp.stones.map(item => `
            <article class="stone">
                <div class="stone-icon">${item.icon}</div>
                <div class="stone-body">
                    <h3 class="stone-book">${item.book}</h3>
                    <p>${item.stone}</p>
                </div>
            </article>
        `).join('');

        const questionsHTML = bp.questions.map(item => `
            <li class="bp-question">
                <span class="bp-question-icon">${item.icon}</span>
                <span class="bp-question-text">${item.q}</span>
                <span class="bp-question-book">${item.book}</span>
            </li>
        `).join('');

        appContainer.innerHTML = `
            <header class="page-header">
                <span class="tag">Synthesis</span>
                <h1 class="title">The Big Picture</h1>
                <p class="subtitle">How the seven books fit together.</p>
            </header>
            <div class="big-picture">
                <div class="detail-content">${bp.intro}</div>
                <h2 class="bp-heading">Seven memory stones</h2>
                <div class="stones">${stonesHTML}</div>
                <h2 class="bp-heading">Five questions for any human moment</h2>
                <div class="detail-content">${bp.questionsIntro}</div>
                <ol class="bp-questions">${questionsHTML}</ol>
                <div class="detail-content">${bp.closing}</div>
            </div>
        `;
    }

    function renderPartView() {
        const chapter = library[state.currentChapterIndex];
        const part = chapter.parts[state.currentPartIndex];
        const cardsHTML = part.cards.map((card, index) => `
            <article class="feature-card" data-card-index="${index}">
                <div class="card-visual" data-caption="${card.prompt}">
                    <img src="${card.image}" alt="${card.title}">
                    <div class="gradient-overlay">${card.prompt}</div>
                </div>
                <div class="card-content">
                    <p class="eyebrow">${card.eyebrow}</p>
                    <h2 class="title">${card.title}</h2>
                    <p class="body-text">${card.body}</p>
                    <footer class="card-footer">
                        <span>${index + 1} / ${part.cards.length}</span>
                        <a href="#" class="see-details" data-card-index="${index}">
                            <span class="icon">💬</span> See Details
                        </a>
                    </footer>
                </div>
            </article>
        `).join('');

        appContainer.innerHTML = `
            <a href="#" class="back-button" data-view="book">
                <span class="icon">‹</span> ${chapter.icon} ${chapter.title}
            </a>
            <header class="page-header">
                <span class="tag">${part.tag}</span>
                <h1 class="title">${part.title}</h1>
                <p class="subtitle">${part.subtitle}</p>
            </header>
            <div id="card-container">${cardsHTML}</div>
        `;
        markMissingImages(appContainer);
        addPartViewListeners();
    }

    function renderDetailView() {
        const part = library[state.currentChapterIndex].parts[state.currentPartIndex];
        const card = part.cards[state.currentCardIndex];
        const totalCards = part.cards.length;

        const isFirstCard = state.currentCardIndex === 0;
        const isLastCard = state.currentCardIndex === totalCards - 1;

        appContainer.innerHTML = `
            <div class="detail-view">
                <header class="detail-view-header">
                    <a href="#" class="back-button">
                        <span class="icon">‹</span> Back to ${part.title}
                    </a>
                    <h1 class="detail-title">${card.title}</h1>
                </header>
                <div class="detail-visual" data-caption="${card.prompt}">
                    <img src="${card.image}" alt="${card.title}" class="detail-image">
                </div>
                <div class="detail-content">
                    ${card.details}
                </div>
                <nav class="detail-view-nav">
                    <a href="#" class="prev-button ${isFirstCard ? 'disabled' : ''}">‹ Previous Idea</a>
                    <a href="#" class="next-button ${isLastCard ? 'disabled' : ''}">Next Idea ›</a>
                </nav>
            </div>
        `;
        markMissingImages(appContainer);
        addDetailViewListeners();
    }

    // --- EVENT LISTENERS ---

    function addSidebarListeners() {
        sidebarContainer.querySelectorAll('[data-view]').forEach(el => {
            el.addEventListener('click', (e) => {
                e.preventDefault();
                state.view = e.currentTarget.dataset.view;
                updateView();
            });
        });
        sidebarContainer.querySelectorAll('[data-chapter-index]').forEach(el => {
            el.addEventListener('click', (e) => {
                e.preventDefault();
                const newChapterIndex = parseInt(e.currentTarget.dataset.chapterIndex);
                state.currentChapterIndex = newChapterIndex;
                state.currentPartIndex = 0;
                state.currentCardIndex = 0;
                state.view = 'book';
                updateView();
            });
        });
        sidebarContainer.querySelectorAll('[data-part-index]').forEach(el => {
            el.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                state.currentPartIndex = parseInt(e.currentTarget.dataset.partIndex);
                state.currentCardIndex = 0;
                state.view = 'part';
                updateView();
            });
        });
    }

    function addHomeViewListeners() {
        appContainer.querySelectorAll('[data-chapter-index]').forEach(el => {
            el.addEventListener('click', (e) => {
                e.preventDefault();
                state.currentChapterIndex = parseInt(e.currentTarget.dataset.chapterIndex);
                state.currentPartIndex = 0;
                state.currentCardIndex = 0;
                state.view = 'book';
                updateView();
            });
        });
    }

    function addBookIntroListeners() {
        appContainer.querySelectorAll('[data-view]').forEach(el => {
            el.addEventListener('click', (e) => {
                e.preventDefault();
                state.view = e.currentTarget.dataset.view;
                updateView();
            });
        });
        appContainer.querySelectorAll('a[data-part-index]').forEach(el => {
            el.addEventListener('click', (e) => {
                e.preventDefault();
                state.currentPartIndex = parseInt(e.currentTarget.dataset.partIndex);
                state.currentCardIndex = 0;
                state.view = 'part';
                updateView();
            });
        });
    }

    function addPartViewListeners() {
        appContainer.querySelectorAll('[data-view]').forEach(el => {
            el.addEventListener('click', (e) => {
                e.preventDefault();
                state.view = e.currentTarget.dataset.view;
                updateView();
            });
        });
        appContainer.querySelectorAll('[data-card-index]').forEach(el => {
            el.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation(); // Prevent event from bubbling up to parent elements
                state.currentCardIndex = parseInt(e.currentTarget.dataset.cardIndex);
                state.view = 'detail';
                updateView();
            });
        });
    }

    function addDetailViewListeners() {
        appContainer.querySelector('.back-button').addEventListener('click', (e) => {
            e.preventDefault();
            state.view = 'part';
            updateView();
        });
        const prevButton = appContainer.querySelector('.prev-button');
        if (prevButton && !prevButton.classList.contains('disabled')) {
            prevButton.addEventListener('click', (e) => {
                e.preventDefault();
                if (state.currentCardIndex > 0) {
                    state.currentCardIndex--;
                    updateView();
                }
            });
        }
        const nextButton = appContainer.querySelector('.next-button');
        if (nextButton && !nextButton.classList.contains('disabled')) {
            nextButton.addEventListener('click', (e) => {
                e.preventDefault();
                const totalCards = library[state.currentChapterIndex].parts[state.currentPartIndex].cards.length;
                if (state.currentCardIndex < totalCards - 1) {
                    state.currentCardIndex++;
                    updateView();
                }
            });
        }
    }

    // --- APP INITIALIZATION ---

    function updateView() {
        renderSidebar();
        switch (state.view) {
            case 'home':       renderHomeView();       break;
            case 'bigPicture': renderBigPictureView(); break;
            case 'book':       renderBookIntroView();  break;
            case 'detail':     renderDetailView();     break;
            case 'part':
            default:           renderPartView();       break;
        }
        window.scrollTo(0, 0);
    }

    function init() {
        updateView();
    }

    init();
});
