// accounts.js

document.addEventListener('DOMContentLoaded', () => {
    // --- Authentication & Configuration ---
    const jwt = localStorage.getItem('jwt');
    if (!jwt) {
        window.open('index.html', '_self');
        return;
    }

    const DOMAINS_API_URL = 'http://localhost:3000/domains';
    const getAuthHeaders = () => ({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${jwt}`
    });

    // --- State ---
    let currentDomainId = null;

    // --- DOM Elements ---
    const domainSelect = document.getElementById('domain-select');
    const logoutBtn = document.getElementById('logout-btn');

    // --- Functions ---

    // Fetch and populate domains dropdown
    const fetchDomains = async () => {
        try {
            const response = await fetch(DOMAINS_API_URL, { headers: getAuthHeaders() });

            if (response.status === 401 || response.status === 403) {
                logout();
                return;
            }
            if (!response.ok) throw new Error('Failed to fetch domains.');

            const domains = await response.json();
            
            // Clear existing options except the first one
            while (domainSelect.options.length > 1) {
                domainSelect.remove(1);
            }

            domains.forEach(domain => {
                const option = document.createElement('option');
                option.value = domain.id;
                option.textContent = `${domain.domain}.${domain.tld}`;
                domainSelect.appendChild(option);
            });
        } catch (error) {
            console.error('Error:', error);
        }
    };

    // Fetch accounts for the selected domain
    const fetchAccounts = async () => {
        if (!currentDomainId) return;

        try {
            const response = await fetch(`${DOMAINS_API_URL}/${currentDomainId}/accounts`, { 
                headers: getAuthHeaders() 
            });

            if (response.status === 401 || response.status === 403) {
                logout();
                return;
            }
            if (!response.ok) throw new Error('Failed to fetch accounts.');

            const accounts = await response.json();
            console.log('Accounts:', accounts);
            // Rendering will be implemented in the next phase
        } catch (error) {
            console.error('Error:', error);
        }
    };

    // --- Event Listeners ---

    // Handle domain selection change
    domainSelect.addEventListener('change', (e) => {
        currentDomainId = e.target.value;
        if (currentDomainId) {
            fetchAccounts();
        } else {
            // Clear accounts list if no domain selected
            // This will be implemented in the next phase
        }
    });

    // Handle logout
    const logout = () => {
        localStorage.removeItem('jwt');
        window.open('index.html', '_self');
    };

    if (logoutBtn) {
        logoutBtn.addEventListener('click', (e) => {
            e.preventDefault();
            logout();
        });
    }

    // --- Initial Load ---
    fetchDomains();
});
