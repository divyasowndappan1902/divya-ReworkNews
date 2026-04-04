document.addEventListener('DOMContentLoaded', () => {
    initLayout();
    initContent();
    attachButtonListeners();
    initMobileToggle();
});

const LOGO_SRC = 'logo-stackly (1).png'; // Final brand update to png

function initLayout() {
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');

    if (header && !window.location.pathname.includes('dashboard.html')) {
        header.innerHTML = `
            <nav class="navbar">
                <div class="logo-container">
                    <img src="${LOGO_SRC}" alt="Stackly logo">
                </div>

                <ul class="nav-links">
                    <li><a href="index.html" class="${isActive('index.html')}">Home</a></li>
                    <li><a href="news.html" class="${isActive('news.html')}">News</a></li>
                    <li><a href="about.html" class="${isActive('about.html')}">About</a></li>
                    <li><a href="service.html" class="${isActive('service.html')}">Service</a></li>
                    <li><a href="contact.html" class="${isActive('contact.html')}">Contact</a></li>
                </ul>
                
                <div class="header-actions">
                    <a href="signin.html" class="btn-signin-pill">Sign In</a>
                    <div class="mobile-menu" id="mobile-toggle" style="display: none; cursor: pointer; flex-direction: column; gap: 6px; align-items: center; justify-content: center; width: 44px; height: 44px;">
                        <span style="width: 28px; height: 4px; background: #0b1120; border-radius: 4px;"></span>
                        <span style="width: 28px; height: 4px; background: #0b1120; border-radius: 4px;"></span>
                        <span style="width: 28px; height: 4px; background: #0b1120; border-radius: 4px;"></span>
                    </div>
                </div>
            </nav>
        `;
    }

    if (footer && !window.location.pathname.includes('dashboard.html')) {
        footer.innerHTML = `
            <div class="footer-top">
                <div class="footer-brand">
                    <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 2rem;">
                        <img src="${LOGO_SRC}" style="height: 44px; width: auto;" alt="Stackly Logo">
                    </div>
                    <p style="margin-bottom: 1.5rem;">Pioneering the next frontier of news technology from Salem, Tamil Nadu.</p>
                    <p style="font-size: 0.85rem; color: #adb5bd;">contact@Stackly.com</p>
                    <p style="font-size: 0.85rem; color: #adb5bd; margin-bottom: 2rem;">+91 427 000 0000</p>
                    <div style="display: flex; gap: 0.75rem;">
                        <a href="404.html" class="social-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
                        <a href="404.html" class="social-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.11 1 12 1 12s0 3.89.46 5.58a2.78 2.78 0 0 0 1.94 2c1.72.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.89 23 12 23 12s0-3.89-.46-5.58z"></path><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"></polygon></svg></a>
                        <a href="404.html" class="social-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z"></path><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path></svg></a>
                        <a href="404.html" class="social-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a>
                    </div>
                </div>
                <div class="footer-links">
                    <h4>Navigation</h4>
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="news.html">News</a></li>
                        <li><a href="about.html">About</a></li>
                        <li><a href="service.html">Service</a></li>
                        <li><a href="contact.html">Contact</a></li>
                    </ul>
                </div>
                <div class="footer-links">
                    <h4>Research Areas</h4>
                    <ul>
                        <li><a href="news.html">Genomics & AI</a></li>
                        <li><a href="technology.html">Bioinformatics</a></li>
                        <li><a href="innovations.html">Synthetic Tech</a></li>
                        <li><a href="future.html">Clinical Insights</a></li>
                        <li><a href="security.html">Data Diagnostics</a></li>
                    </ul>
                </div>
                <div class="footer-links">
                    <h4 style="display: flex; gap: 8px; align-items: center;"><span style="color: #ef4444;">📍</span> Stackly HQ — Salem, TN</h4>
                    <div class="map-card">
                        <iframe width="100%" height="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=200&amp;hl=en&amp;q=Salem%20Stackly%20Address+(Stackly%20News)&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" style="filter: grayscale(1) invert(0.9);"></iframe>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2026 Stackly BioTech Pvt. Ltd. All Rights Reserved. | Salem, Tamil Nadu, India</p>
            </div>
        `;
    }
}

function isActive(page) {
    const current = window.location.pathname.split('/').pop() || 'index.html';
    return current === page ? 'active' : '';
}

function initContent() {
    const grid = document.getElementById('contentGrid');
    if (!grid) return;

    const pageType = grid.dataset.pageType;
    const data = window.newsData[pageType] || [];

    grid.innerHTML = data.map(item => `
        <div class="card animate" style="animation-delay: ${item.id * 0.1}s">
            <img src="${item.img}" alt="${item.title}" class="card-img" onerror="this.src='https://picsum.photos/seed/fallback/800/600.webp'">
            <div class="card-body">
                <span class="card-tag">${item.tag}</span>
                <h3 class="card-title">${item.title}</h3>
                <p style="color: var(--text-secondary); font-size: 0.9rem; margin-bottom: 1.5rem;">${item.description}</p>
            </div>
        </div>
    `).join('');
}

function attachButtonListeners() {
    document.body.addEventListener('click', (e) => {
        // Find if we clicked an interactive element
        const target = e.target.closest('button, .btn, .social-icon, .card, a');
        if (!target) return;

        // Bypassing 404 for specific functional elements
        const isFunctional = (
            target.closest('.nav-links') || 
            target.closest('.footer-links') ||
            target.closest('.sidebar-nav') ||
            target.classList.contains('sidebar-item') ||
            target.classList.contains('btn-signin-pill') ||
            target.href?.includes('signin.html') ||
            target.href?.includes('signup.html') ||
            target.href?.includes('index.html') ||
            target.closest('form')
        );

        if (target.classList.contains('sidebar-item') || target.closest('.sidebar-item')) {
            e.preventDefault();
            handleSidebarClick(target.closest('.sidebar-item'));
            return;
        }

        if (target.classList.contains('btn-signin-pill') || target.href?.includes('signin.html')) {
            window.location.href = 'signin.html';
            return;
        }

        if (target.classList.contains('home-btn-pill') || target.href?.includes('index.html')) {
            window.location.href = 'index.html';
            return;
        }

        if (!isFunctional && target.tagName === 'A' && target.href && !target.href.includes('#')) {
            e.preventDefault();
            window.location.href = '404.html';
        }
    });
}

function handleSidebarClick(item) {
    const sidebarItems = document.querySelectorAll('.sidebar-item');
    sidebarItems.forEach(i => i.classList.remove('active'));
    item.classList.add('active');

    // Simple view switching logic based on text content
    const viewName = item.innerText.trim().toLowerCase();

    // Handle Logout Specifically
    if (viewName === 'logout') {
        localStorage.removeItem('userRole');
        window.location.href = 'index.html';
        return;
    }

    const dashboardTitle = document.querySelector('main h1');
    
    // Hide all view-content containers
    const allViews = document.querySelectorAll('.view-content');
    allViews.forEach(v => v.style.display = 'none');

    // Show the target view if it exists
    let targetViewId = 'view-' + viewName.replace(/\s+/g, '-');
    const targetView = document.getElementById(targetViewId);
    const genericView = document.getElementById('view-generic');
    
    if (targetView) {
        targetView.style.display = 'block';
    } else if (genericView) {
        genericView.style.display = 'block';
        if (dashboardTitle) dashboardTitle.innerText = item.innerText.trim();
    }
}

// Redirect logic for sign-in
function handleLogin(e) {
    e.preventDefault();
    const role = document.getElementById('role').value;
    localStorage.setItem('userRole', role);
    window.location.href = 'dashboard.html';
}

// Dashboard filtering
function initDashboard() {
    const role = localStorage.getItem('userRole') || 'customer';
    const adminPanel = document.getElementById('adminPanel');
    const customerPanel = document.getElementById('customerPanel');
    const sidebarMenu = document.getElementById('sidebarMenu');
    const sidebarBrand = document.getElementById('sidebarBrand');
    const userNameDisplay = document.getElementById('userNameDisplay');
    const userEmailDisplay = document.getElementById('userEmailDisplay');

    if (sidebarBrand) {
        sidebarBrand.innerText = role === 'admin' ? 'ADMIN PORTAL' : 'CUSTOMER PORTAL';
    }

    if (userNameDisplay) {
        userNameDisplay.innerText = role === 'admin' ? 'Sarah Tech Admin' : 'John Customer';
    }

    if (userEmailDisplay) {
        userEmailDisplay.innerText = role === 'admin' ? 'admin@stacklynews.com' : 'john.doe@example.com';
    }

    if (sidebarMenu) {
        const adminItems = `
            <li><a href="#" class="sidebar-item active"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>Main Display</a></li>
            <li><a href="#" class="sidebar-item"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg>Editorial Management</a></li>
            <li><a href="#" class="sidebar-item"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>Content & Media</a></li>
            <li><a href="#" class="sidebar-item"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>Reports & Readers</a></li>
            <li><a href="#" class="sidebar-item"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>Analytics & Reports</a></li>
            <li><a href="#" class="sidebar-item"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path></svg>Invoices & Billing</a></li>
            <li><a href="#" class="sidebar-item"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>Portal Configuration</a></li>
            <li style="margin-top: 2rem; border-top: 1px solid #e2e8f0; padding-top: 1rem;"><a href="#" class="sidebar-item" style="color: #ef4444;"><svg fill="none" stroke="currentColor" style="color: #ef4444;" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>Logout</a></li>
        `;

        const customerItems = `
            <li><a href="#" class="sidebar-item active"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>Account Home</a></li>
            <li><a href="#" class="sidebar-item"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>My Subscriptions</a></li>
            <li><a href="#" class="sidebar-item"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>Saved Articles</a></li>
            <li><a href="#" class="sidebar-item"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.382-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>Reader Points</a></li>
            <li><a href="#" class="sidebar-item"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path></svg>Payment Methods</a></li>
            <li><a href="#" class="sidebar-item"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>Settings & Privacy</a></li>
            <li style="margin-top: 2rem; border-top: 1px solid #e2e8f0; padding-top: 1rem;"><a href="#" class="sidebar-item" style="color: #ef4444;"><svg fill="none" stroke="currentColor" style="color: #ef4444;" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>Logout</a></li>
        `;

        sidebarMenu.innerHTML = role === 'admin' ? adminItems : customerItems;
    }
    
    if (adminPanel && customerPanel) {
        if (role === 'admin') {
            adminPanel.style.display = 'block';
            customerPanel.style.display = 'none';
        } else {
            adminPanel.style.display = 'none';
            customerPanel.style.display = 'block';
        }
    }

    // Dashboard Mobile Toggle
    const dashToggle = document.getElementById('dashboard-mobile-toggle');
    const sidebar = document.querySelector('.sidebar');
    if (dashToggle && sidebar) {
        dashToggle.addEventListener('click', () => {
            sidebar.classList.toggle('active');
        });
        
        // Auto-close sidebar on item click
        sidebar.addEventListener('click', (e) => {
            if (e.target.closest('.sidebar-item')) {
                sidebar.classList.remove('active');
            }
        });
    }
}

// Mobile Menu Logic with Robust Event Delegation
document.body.addEventListener('click', (e) => {
    const mobileToggle = e.target.closest('#mobile-toggle');
    if (mobileToggle) {
        toggleMobileMenu();
    }
});

function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    const toggle = document.getElementById('mobile-toggle');
    
    if (navLinks) {
        navLinks.classList.toggle('nav-active');
        document.body.classList.toggle('no-scroll');
        
        if (toggle) {
            toggle.classList.toggle('toggle-active');
        }
    }
}

// Keeping empty for compatibility if called elsewhere
function initMobileToggle() {}

