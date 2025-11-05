// ===================================
// MARKETPLACE JAVASCRIPT
// WITH FULL DROPDOWN CATEGORIES & SECTIONS
// ===================================

// Product Data - Organized by categories
const productsData = [
    // 3D MODELS
    {
        id: 1,
        title: "Bee Figures - Akame - 3D Print Model STL",
        category: "3D Models",
        categorySlug: "all-3d-models",
        subcategory: "Characters",
        image: "https://via.placeholder.com/400x300/e74c3c/ffffff?text=3D+Characters",
        description: "High-quality 3D print model of Bee Figures Akame character.",
        fileFormat: "STL",
        fileSize: "45 MB",
        views: 423,
        date: "2025-11-03",
        downloads: [
            { name: "Download from Google Drive", url: "#" },
            { name: "Mirror Link", url: "#" }
        ]
    },
    {
        id: 2,
        title: "Cyberpunk Character - Low Poly 3D Model",
        category: "3D Models",
        categorySlug: "characters-3d",
        subcategory: "Characters",
        image: "https://via.placeholder.com/400x300/3498db/ffffff?text=Cyberpunk",
        description: "Optimized low-poly cyberpunk character perfect for game development.",
        fileFormat: "FBX, OBJ, BLEND",
        fileSize: "78 MB",
        views: 1203,
        date: "2025-10-28",
        downloads: [
            { name: "Download Model", url: "#" }
        ]
    },
    {
        id: 3,
        title: "Modern Architecture - Building Set",
        category: "3D Models",
        categorySlug: "architecture-3d",
        subcategory: "Architecture",
        image: "https://via.placeholder.com/400x300/2ecc71/ffffff?text=Architecture",
        description: "Complete modern architecture building set with interiors.",
        fileFormat: "MAX, FBX, OBJ",
        fileSize: "456 MB",
        views: 987,
        date: "2025-10-24",
        downloads: [
            { name: "Download from Google Drive", url: "#" }
        ]
    },
    {
        id: 4,
        title: "Vehicle Pack - Sci-Fi Cars Collection",
        category: "3D Models",
        categorySlug: "vehicles-3d",
        subcategory: "Vehicles",
        image: "https://via.placeholder.com/400x300/f39c12/ffffff?text=Sci-Fi+Cars",
        description: "Futuristic vehicle pack with 10 unique sci-fi car models.",
        fileFormat: "FBX, BLEND, OBJ",
        fileSize: "678 MB",
        views: 1567,
        date: "2025-10-23",
        downloads: [
            { name: "Download Pack", url: "#" }
        ]
    },

    // GAME DEVELOPMENT
    {
        id: 5,
        title: "Unreal Engine 5 - VFX Pack Vol.1",
        category: "Game Development",
        categorySlug: "ue5",
        subcategory: "Unreal Engine",
        image: "https://via.placeholder.com/400x300/9b59b6/ffffff?text=UE5+VFX",
        description: "Professional VFX pack for Unreal Engine 5 with particle systems.",
        fileFormat: "UE5 Project",
        fileSize: "234 MB",
        views: 1456,
        date: "2025-10-27",
        downloads: [
            { name: "Download VFX Pack", url: "#" }
        ]
    },
    {
        id: 6,
        title: "Unity Asset Bundle - Complete Starter Pack",
        category: "Game Development",
        categorySlug: "unity",
        subcategory: "Unity Assets",
        image: "https://via.placeholder.com/400x300/1abc9c/ffffff?text=Unity+Assets",
        description: "Complete Unity starter pack with models, scripts, and prefabs.",
        fileFormat: "Unity Package",
        fileSize: "125 MB",
        views: 892,
        date: "2025-10-26",
        downloads: [
            { name: "Download Package", url: "#" }
        ]
    },
    {
        id: 7,
        title: "Game Dev Props Collection - 50 Models",
        category: "Game Development",
        categorySlug: "game-dev-all",
        subcategory: "Game Dev Assets",
        image: "https://via.placeholder.com/400x300/e67e22/ffffff?text=Game+Props",
        description: "50 game-ready 3D props for any game engine.",
        fileFormat: "FBX, OBJ",
        fileSize: "340 MB",
        views: 756,
        date: "2025-10-25",
        downloads: [
            { name: "Download Collection", url: "#" }
        ]
    },

    // BLENDER ADD-ONS
    {
        id: 8,
        title: "Blender Add-on - Easy Map Navigation System",
        category: "Blender Add-ons",
        categorySlug: "modeling",
        subcategory: "Modeling Tools",
        image: "https://via.placeholder.com/400x300/34495e/ffffff?text=Blender+Addon",
        description: "Complete navigation system for Blender with AI pathfinding.",
        fileFormat: "Python Script",
        fileSize: "15 MB",
        views: 892,
        date: "2025-10-29",
        downloads: [
            { name: "Download Add-on", url: "#" }
        ]
    },
    {
        id: 9,
        title: "Cycles Rendering - Advanced Materials Pack",
        category: "Blender Add-ons",
        categorySlug: "rendering",
        subcategory: "Rendering",
        image: "https://via.placeholder.com/400x300/16a085/ffffff?text=Rendering",
        description: "Advanced Cycles rendering materials and shaders.",
        fileFormat: "Blend File",
        fileSize: "89 MB",
        views: 645,
        date: "2025-10-28",
        downloads: [
            { name: "Download Materials", url: "#" }
        ]
    },
    {
        id: 10,
        title: "Animation Suite - Rigging & Motion Capture",
        category: "Blender Add-ons",
        categorySlug: "animation",
        subcategory: "Animation",
        image: "https://via.placeholder.com/400x300/c0392b/ffffff?text=Animation",
        description: "Complete animation suite with rigging and mocap tools.",
        fileFormat: "Python + Blend",
        fileSize: "156 MB",
        views: 534,
        date: "2025-10-27",
        downloads: [
            { name: "Download Suite", url: "#" }
        ]
    },
    {
        id: 11,
        title: "Blender Add-on Bundle - All Tools",
        category: "Blender Add-ons",
        categorySlug: "blender-all",
        subcategory: "All Add-ons",
        image: "https://via.placeholder.com/400x300/8e44ad/ffffff?text=Blender+Tools",
        description: "Complete collection of all essential Blender add-ons.",
        fileFormat: "Python Scripts",
        fileSize: "234 MB",
        views: 1122,
        date: "2025-10-26",
        downloads: [
            { name: "Download Bundle", url: "#" }
        ]
    },

    // VIDEO TOOLS
    {
        id: 12,
        title: "After Effects - Transition Pack (100+ Transitions)",
        category: "Video Tools",
        categorySlug: "ae",
        subcategory: "After Effects",
        image: "https://via.placeholder.com/400x300/95a5a6/ffffff?text=AE+Transitions",
        description: "100+ professional transition effects for After Effects.",
        fileFormat: "AEP, Motion Bro",
        fileSize: "567 MB",
        views: 2341,
        date: "2025-10-20",
        downloads: [
            { name: "Download Pack", url: "#" }
        ]
    },
    {
        id: 13,
        title: "Premiere Pro - Color Grading LUTs (50+ Presets)",
        category: "Video Tools",
        categorySlug: "premiere",
        subcategory: "Premiere Pro",
        image: "https://via.placeholder.com/400x300/3498db/ffffff?text=Premiere+LUTs",
        description: "50+ professional color grading LUTs for Premiere Pro.",
        fileFormat: "CUBE, Text",
        fileSize: "234 MB",
        views: 1876,
        date: "2025-10-19",
        downloads: [
            { name: "Download LUTs", url: "#" }
        ]
    },
    {
        id: 14,
        title: "VFX Bundle - Particle Effects (100+ Effects)",
        category: "Video Tools",
        categorySlug: "vfx",
        subcategory: "VFX",
        image: "https://via.placeholder.com/400x300/e74c3c/ffffff?text=VFX+Effects",
        description: "100+ professional VFX particle effects for video editing.",
        fileFormat: "AEP, MOV",
        fileSize: "1.2 GB",
        views: 2567,
        date: "2025-10-18",
        downloads: [
            { name: "Download Bundle", url: "#" }
        ]
    },
    {
        id: 15,
        title: "Video Tools Collection - All-in-One Pack",
        category: "Video Tools",
        categorySlug: "video-tools-all",
        subcategory: "All Tools",
        image: "https://via.placeholder.com/400x300/f39c12/ffffff?text=Video+Tools",
        description: "Complete video tools collection with everything you need.",
        fileFormat: "Mixed",
        fileSize: "2.5 GB",
        views: 3456,
        date: "2025-10-17",
        downloads: [
            { name: "Download Collection", url: "#" }
        ]
    },

    // COMICS
    {
        id: 16,
        title: "Comics - Character Design Pack (100+ Characters)",
        category: "Comics",
        categorySlug: "comics-all",
        subcategory: "All Comics",
        image: "https://via.placeholder.com/400x300/2ecc71/ffffff?text=Comics",
        description: "100+ comic character designs and styles.",
        fileFormat: "PSD, PNG",
        fileSize: "456 MB",
        views: 1234,
        date: "2025-10-15",
        downloads: [
            { name: "Download Pack", url: "#" }
        ]
    },
    {
        id: 17,
        title: "Manga Art Style - Complete Tutorial Collection",
        category: "Comics",
        categorySlug: "manga",
        subcategory: "Manga",
        image: "https://via.placeholder.com/400x300/9b59b6/ffffff?text=Manga",
        description: "Complete manga art style tutorials and assets.",
        fileFormat: "PDF, PSD",
        fileSize: "789 MB",
        views: 1876,
        date: "2025-10-14",
        downloads: [
            { name: "Download Tutorials", url: "#" }
        ]
    },
    {
        id: 18,
        title: "Web Comics Templates - Ready to Use",
        category: "Comics",
        categorySlug: "webcomics",
        subcategory: "Web Comics",
        image: "https://via.placeholder.com/400x300/1abc9c/ffffff?text=Web+Comics",
        description: "Ready-to-use web comics templates and layouts.",
        fileFormat: "HTML, PSD",
        fileSize: "234 MB",
        views: 945,
        date: "2025-10-13",
        downloads: [
            { name: "Download Templates", url: "#" }
        ]
    },

    // LAYERED *.PSD
    {
        id: 19,
        title: "PSD Templates - UI/UX Design Pack (50+ Designs)",
        category: "Layered PSD",
        categorySlug: "ui-kits",
        subcategory: "UI Kits",
        image: "https://via.placeholder.com/400x300/34495e/ffffff?text=UI+Kits",
        description: "50+ UI/UX design templates with all layers editable.",
        fileFormat: "PSD",
        fileSize: "678 MB",
        views: 2134,
        date: "2025-10-12",
        downloads: [
            { name: "Download UI Kits", url: "#" }
        ]
    },
    {
        id: 20,
        title: "Design Templates - Branding Pack (100+ Templates)",
        category: "Layered PSD",
        categorySlug: "designs",
        subcategory: "Design Templates",
        image: "https://via.placeholder.com/400x300/c0392b/ffffff?text=Design+Pack",
        description: "100+ fully layered design templates for various projects.",
        fileFormat: "PSD, AI",
        fileSize: "1.2 GB",
        views: 3241,
        date: "2025-10-11",
        downloads: [
            { name: "Download Pack", url: "#" }
        ]
    },
    {
        id: 21,
        title: "All PSD Files - Ultimate Collection (500+ Files)",
        category: "Layered PSD",
        categorySlug: "psd-all",
        subcategory: "All PSD Files",
        image: "https://via.placeholder.com/400x300/16a085/ffffff?text=PSD+Files",
        description: "500+ PSD files with all layers organized and editable.",
        fileFormat: "PSD",
        fileSize: "3.5 GB",
        views: 4567,
        date: "2025-10-10",
        downloads: [
            { name: "Download Collection", url: "#" }
        ]
    },

    // ACTIONS *.ATN
    {
        id: 22,
        title: "Photoshop Actions - Effects Pack (50+ Actions)",
        category: "Actions *.ATN",
        categorySlug: "effects",
        subcategory: "Effects",
        image: "https://via.placeholder.com/400x300/8e44ad/ffffff?text=Effects",
        description: "50+ professional Photoshop actions for various effects.",
        fileFormat: "ATN",
        fileSize: "145 MB",
        views: 1876,
        date: "2025-10-09",
        downloads: [
            { name: "Download Actions", url: "#" }
        ]
    },
    {
        id: 23,
        title: "Photoshop Filters - Professional Filters (100+)",
        category: "Actions *.ATN",
        categorySlug: "filters",
        subcategory: "Filters",
        image: "https://via.placeholder.com/400x300/e67e22/ffffff?text=Filters",
        description: "100+ professional Photoshop filter actions.",
        fileFormat: "ATN",
        fileSize: "234 MB",
        views: 2134,
        date: "2025-10-08",
        downloads: [
            { name: "Download Filters", url: "#" }
        ]
    },
    {
        id: 24,
        title: "All Photoshop Actions - Complete Collection",
        category: "Actions *.ATN",
        categorySlug: "actions-all",
        subcategory: "All Actions",
        image: "https://via.placeholder.com/400x300/3498db/ffffff?text=All+Actions",
        description: "Complete collection of all Photoshop actions.",
        fileFormat: "ATN",
        fileSize: "456 MB",
        views: 2789,
        date: "2025-10-07",
        downloads: [
            { name: "Download Collection", url: "#" }
        ]
    },

    // STYLES *.ASL
    {
        id: 25,
        title: "Photoshop Styles - Gradients Pack (100+ Gradients)",
        category: "Styles *.ASL",
        categorySlug: "gradients",
        subcategory: "Gradients",
        image: "https://via.placeholder.com/400x300/1abc9c/ffffff?text=Gradients",
        description: "100+ professional gradients for Photoshop.",
        fileFormat: "GRD, ASL",
        fileSize: "89 MB",
        views: 1567,
        date: "2025-10-06",
        downloads: [
            { name: "Download Gradients", url: "#" }
        ]
    },
    {
        id: 26,
        title: "Pattern Styles - Seamless Patterns (200+ Patterns)",
        category: "Styles *.ASL",
        categorySlug: "patterns",
        subcategory: "Patterns",
        image: "https://via.placeholder.com/400x300/f39c12/ffffff?text=Patterns",
        description: "200+ seamless patterns for Photoshop.",
        fileFormat: "ASL, PAT",
        fileSize: "234 MB",
        views: 1834,
        date: "2025-10-05",
        downloads: [
            { name: "Download Patterns", url: "#" }
        ]
    },
    {
        id: 27,
        title: "All Photoshop Styles - Ultimate Pack",
        category: "Styles *.ASL",
        categorySlug: "styles-all",
        subcategory: "All Styles",
        image: "https://via.placeholder.com/400x300/9b59b6/ffffff?text=All+Styles",
        description: "Complete collection of all Photoshop styles.",
        fileFormat: "ASL",
        fileSize: "567 MB",
        views: 2456,
        date: "2025-10-04",
        downloads: [
            { name: "Download Pack", url: "#" }
        ]
    },

    // OTHER CATEGORIES
    {
        id: 28,
        title: "Stock Images - Nature Collection 4K",
        category: "Stock Images",
        categorySlug: "stock-images",
        image: "https://via.placeholder.com/400x300/16a085/ffffff?text=Nature+4K",
        description: "Premium 4K nature stock images collection.",
        fileFormat: "JPG, RAW",
        fileSize: "1.2 GB",
        views: 2341,
        date: "2025-10-25",
        downloads: [
            { name: "Download Collection", url: "#" }
        ]
    },
    {
        id: 29,
        title: "Web Templates - Modern Sites Collection",
        category: "Web Templates",
        categorySlug: "web-templates",
        image: "https://via.placeholder.com/400x300/3498db/ffffff?text=Web+Templates",
        description: "Modern web templates ready to use.",
        fileFormat: "HTML, CSS, JS",
        fileSize: "456 MB",
        views: 1234,
        date: "2025-10-24",
        downloads: [
            { name: "Download Templates", url: "#" }
        ]
    }
];

// State
let currentPage = 1;
const itemsPerPage = 9;
let currentProducts = [...productsData];

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    initializePage();
});

function initializePage() {
    setupLeftSidebar();
    setupNavigation();
    setupSearch();
    loadHome();
}

// ========================
// LEFT SIDEBAR SETUP
// ========================
function setupLeftSidebar() {
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', toggleSubmenu);
    });
}

function toggleSubmenu(event) {
    event.preventDefault();
    const toggle = event.currentTarget;
    const submenu = toggle.nextElementSibling;
    const isActive = toggle.classList.contains('active');

    // Close all other submenus
    document.querySelectorAll('.dropdown-toggle').forEach(t => {
        t.classList.remove('active');
        const sm = t.nextElementSibling;
        if (sm && sm.classList.contains('submenu')) {
            sm.classList.remove('active');
        }
    });

    // Toggle current submenu
    if (!isActive) {
        toggle.classList.add('active');
        if (submenu && submenu.classList.contains('submenu')) {
            submenu.classList.add('active');
        }
    }
}

// ========================
// NAVIGATION SETUP
// ========================
function setupNavigation() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.getElementById('navMenu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });

        document.addEventListener('click', function(e) {
            if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navMenu.classList.remove('active');
            }
        });

        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
            });
        });
    }
}

// ========================
// SEARCH FUNCTIONALITY
// ========================
function setupSearch() {
    const searchBtn = document.getElementById('searchBtn');
    const searchInput = document.getElementById('searchInput');

    if (searchBtn && searchInput) {
        searchBtn.addEventListener('click', performSearch);
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }
}

function performSearch() {
    const query = document.getElementById('searchInput').value.toLowerCase().trim();

    if (!query) {
        currentProducts = [...productsData];
    } else {
        currentProducts = productsData.filter(product =>
            product.title.toLowerCase().includes(query) ||
            product.category.toLowerCase().includes(query) ||
            product.description.toLowerCase().includes(query)
        );
    }

    currentPage = 1;
    displayProducts();
    closeSidebar();
}

// ========================
// PAGE NAVIGATION
// ========================
function loadHome() {
    document.getElementById('homePage').classList.remove('hidden');
    document.getElementById('productPage').classList.add('hidden');
    currentProducts = [...productsData];
    currentPage = 1;
    displayProducts();
    closeSidebar();
}

function loadCategory(categorySlug) {
    if (categorySlug === 'all') {
        currentProducts = [...productsData];
    } else {
        currentProducts = productsData.filter(p => p.categorySlug === categorySlug);
    }
    currentPage = 1;
    document.getElementById('homePage').classList.remove('hidden');
    document.getElementById('productPage').classList.add('hidden');
    displayProducts();
    closeSidebar();
    window.scrollTo(0, 0);
}

// ========================
// DISPLAY PRODUCTS
// ========================
function displayProducts() {
    const grid = document.getElementById('productsGrid');
    grid.innerHTML = '';

    if (currentProducts.length === 0) {
        grid.innerHTML = '<p class="no-results">No products found in this category.</p>';
        updatePagination();
        return;
    }

    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const pageProducts = currentProducts.slice(start, end);

    pageProducts.forEach(product => {
        const card = createProductCard(product);
        grid.appendChild(card);
    });

    updatePagination();
}

// ========================
// CREATE PRODUCT CARD
// ========================
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
        <div class="product-image">
            <img src="${product.image}" alt="${product.title}" loading="lazy">
            <span class="product-badge">NEW</span>
        </div>
        <div class="product-content">
            <span class="product-category">${product.category}</span>
            <h3 class="product-title">
                <a href="#" onclick="viewProduct(${product.id}); return false;">${product.title}</a>
            </h3>
            <div class="product-meta">
                <span><i class="fas fa-file"></i> ${product.fileFormat}</span>
                <span><i class="fas fa-eye"></i> ${formatNumber(product.views)}</span>
            </div>
            <button class="download-btn" onclick="viewProduct(${product.id})">
                <i class="fas fa-download"></i> View Details
            </button>
        </div>
    `;
    return card;
}

// ========================
// VIEW PRODUCT
// ========================
function viewProduct(productId) {
    const product = productsData.find(p => p.id === productId);
    if (!product) return;

    document.getElementById('homePage').classList.add('hidden');
    document.getElementById('productPage').classList.remove('hidden');

    document.getElementById('mainProductImage').src = product.image;
    document.getElementById('productTitle').textContent = product.title;
    document.getElementById('productPageName').textContent = product.title;
    document.getElementById('productCat').textContent = product.category;
    document.getElementById('productViews').textContent = formatNumber(product.views);
    document.getElementById('productDate').textContent = formatDate(product.date);
    document.getElementById('productDesc').textContent = product.description;
    document.getElementById('fileFormat').textContent = product.fileFormat;
    document.getElementById('fileSize').textContent = product.fileSize;

    const downloadContainer = document.getElementById('downloadButtons');
    downloadContainer.innerHTML = '';
    product.downloads.forEach(dl => {
        const link = document.createElement('a');
        link.href = dl.url;
        link.target = '_blank';
        link.className = 'download-link';
        link.innerHTML = `<i class="fas fa-download"></i> ${dl.name}`;
        downloadContainer.appendChild(link);
    });

    const related = productsData.filter(p => 
        p.id !== product.id && p.category === product.category
    ).slice(0, 4);

    const relatedGrid = document.getElementById('relatedProducts');
    relatedGrid.innerHTML = '';
    related.forEach(p => {
        relatedGrid.appendChild(createProductCard(p));
    });

    document.getElementById('productCategoryLink').href = '#';
    document.getElementById('productCategoryLink').textContent = product.category;
    document.getElementById('productCategoryLink').onclick = () => {
        loadCategory(product.categorySlug);
        return false;
    };

    closeSidebar();
    window.scrollTo(0, 0);
}

// ========================
// PAGINATION
// ========================
function updatePagination() {
    const totalPages = Math.ceil(currentProducts.length / itemsPerPage);
    const pageNumbers = document.getElementById('pageNumbers');
    pageNumbers.innerHTML = '';

    const maxPages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxPages / 2));
    let endPage = Math.min(totalPages, startPage + maxPages - 1);

    if (endPage - startPage < maxPages - 1) {
        startPage = Math.max(1, endPage - maxPages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
        const btn = document.createElement('div');
        btn.className = 'page-num' + (i === currentPage ? ' active' : '');
        btn.textContent = i;
        btn.onclick = () => {
            currentPage = i;
            displayProducts();
            window.scrollTo(0, 0);
        };
        pageNumbers.appendChild(btn);
    }

    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    if (prevBtn) prevBtn.disabled = currentPage === 1;
    if (nextBtn) nextBtn.disabled = currentPage === totalPages;
}

function previousPage() {
    if (currentPage > 1) {
        currentPage--;
        displayProducts();
        window.scrollTo(0, 0);
    }
}

function nextPage() {
    const totalPages = Math.ceil(currentProducts.length / itemsPerPage);
    if (currentPage < totalPages) {
        currentPage++;
        displayProducts();
        window.scrollTo(0, 0);
    }
}

// ========================
// SIDEBAR MOBILE FUNCTIONS
// ========================
function closeSidebar() {
    const sidebar = document.querySelector('.left-sidebar');
    if (sidebar) {
        sidebar.classList.remove('active');
    }
}

// ========================
// UTILITY FUNCTIONS
// ========================
function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}
