// DOM Elements
const navItems = document.querySelectorAll('.nav-item');
const screens = document.querySelectorAll('.screen');
const orgNodes = document.querySelectorAll('.org-node');
const taskChips = document.querySelectorAll('.task-chip');
const fab = document.querySelector('.fab');

// Navigation Switching
navItems.forEach(item => {
    item.addEventListener('click', () => {
        const target = item.getAttribute('data-target');
        
        // Update active nav item
        navItems.forEach(nav => nav.classList.remove('active'));
        item.classList.add('active');
        
        // Update active screen
        screens.forEach(screen => screen.classList.remove('active'));
        document.getElementById(target).classList.add('active');
    });
});

// Org Tree Expansion/Collapse
orgNodes.forEach(node => {
    const header = node.querySelector('.node-header');
    const children = node.querySelector('.node-children');
    const expandIcon = node.querySelector('.node-expand');
    
    if (header && children && expandIcon) {
        header.addEventListener('click', (e) => {
            // Prevent event propagation
            e.stopPropagation();
            
            // Toggle visibility
            if (children.style.display === 'none') {
                children.style.display = 'block';
                expandIcon.textContent = '▼';
            } else {
                children.style.display = 'none';
                expandIcon.textContent = '▶';
            }
        });
    }
});

// Task Chip Switching
taskChips.forEach(chip => {
    chip.addEventListener('click', () => {
        taskChips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        
        // Here you would typically filter tasks based on the selected chip
        // For demo purposes, we'll just log the selection
        console.log('Selected task filter:', chip.textContent);
    });
});

// FAB Click Handler
fab.addEventListener('click', () => {
    // For R1/R2: Open Coaching Plan creation
    // For R2/R3: Open Export options
    // For MKT: Open Suggest Threshold form
    
    // For demo purposes, we'll just show an alert
    alert('FAB clicked! This would open the appropriate action based on user role.');
});

// KPI Info Icon Click Handler
const infoIcons = document.querySelectorAll('.info-icon');
infoIcons.forEach(icon => {
    icon.addEventListener('click', (e) => {
        e.stopPropagation();
        const kpiCard = icon.closest('.kpi-card');
        const kpiLabel = kpiCard.querySelector('.kpi-label').textContent;
        
        // Here you would typically show a popover with KPI definition
        // For demo purposes, we'll just show an alert
        alert(`${kpiLabel} Definition:\n\n${getKPIDefinition(kpiLabel)}`);
    });
});

// Helper function to get KPI definitions
function getKPIDefinition(label) {
    const definitions = {
        'Attainment': 'Revenue Attainment % = SUM(Actual)/SUM(Target)',
        'Coverage': 'Target HCO covered by valid visits ≥1 within period, consent valid, within frequency cap',
        'Quality': 'Weighted: Completeness 40% + OnTime 30% + FollowUp 30%',
        'NBA': 'Executed / Recommended within 7 days SLA',
        'Compliance': 'Green/Yellow/Red; Red if any High/Critical event in scope',
        'Inventory': 'Regional: provinces within target weeks range'
    };
    
    return definitions[label] || 'No definition available';
}

// Action Button Click Handlers
const actionButtons = document.querySelectorAll('.action-button');
actionButtons.forEach(button => {
    button.addEventListener('click', () => {
        const action = button.querySelector('span').textContent;
        
        switch(action) {
            case 'Coaching Plan':
                alert('Opening Coaching Plan creation form...');
                break;
            case 'Export':
                alert('Opening Export options...');
                break;
            case 'Thresholds':
                alert('Opening Thresholds settings...');
                break;
        }
    });
});

// Menu Item Click Handlers
const menuItems = document.querySelectorAll('.menu-item');
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        const menuText = item.querySelector('span').textContent;
        
        switch(menuText) {
            case 'Export KPI Snapshot':
                alert('Opening Export KPI Snapshot options...');
                break;
            case 'Thresholds':
                alert('Opening Thresholds settings...');
                break;
            case 'Market View':
                alert('Opening Market View (MKT-only)...');
                break;
            case 'About':
                alert('REP360 Manager Console\nVersion 1.0.0\n© 2026 AureliAxis Pharmaceuticals');
                break;
            case 'KPI Glossary':
                alert('Opening KPI Glossary...');
                break;
        }
    });
});

// Alert Chip Click Handlers
const alertChips = document.querySelectorAll('.alert-chip');
alertChips.forEach(chip => {
    chip.addEventListener('click', () => {
        const alertText = chip.querySelector('span').textContent;
        alert(`Opening details for: ${alertText}`);
    });
});

// Manager Tile Click Handlers
const managerTiles = document.querySelectorAll('.manager-tile');
managerTiles.forEach(tile => {
    tile.addEventListener('click', () => {
        const managerName = tile.querySelector('.tile-name').textContent;
        // Navigate to Org tab and expand to this manager
        navItems.forEach(nav => {
            if (nav.getAttribute('data-target') === 'org') {
                nav.click();
            }
        });
        alert(`Drilling down to ${managerName}'s team...`);
    });
});

// Table Row Click Handlers
const tableRows = document.querySelectorAll('.table-row');
tableRows.forEach(row => {
    row.addEventListener('click', () => {
        const name = row.querySelector('.table-cell').textContent;
        alert(`Opening mini-profile for ${name}...`);
    });
});

// Role/Scope Switcher Click Handler
const roleScopeSwitcher = document.getElementById('roleSwitcher');
const roleDropdown = document.getElementById('roleDropdown');
const roleText = document.querySelector('.role-text');
const roleName = document.querySelector('.role-name');

roleScopeSwitcher.addEventListener('click', (e) => {
    e.stopPropagation();
    roleDropdown.classList.toggle('show');
});

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
    if (!roleScopeSwitcher.contains(e.target) && !roleDropdown.contains(e.target)) {
        roleDropdown.classList.remove('show');
    }
});

// Role selection
const dropdownItems = document.querySelectorAll('.dropdown-item');
dropdownItems.forEach(item => {
    item.addEventListener('click', () => {
        const role = item.getAttribute('data-role');
        const name = item.getAttribute('data-name');
        
        // Update active item
        dropdownItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');
        
        // Update role display
        switch(role) {
            case 'sales-manager':
                roleText.textContent = '销售经理';
                roleName.textContent = `- ${name}`;
                break;
            case 'region-director':
                roleText.textContent = '区域总监';
                roleName.textContent = `- ${name}`;
                break;
            case 'marketing-manager':
                roleText.textContent = '市场部经理';
                roleName.textContent = `- ${name}`;
                break;
        }
        
        // Close dropdown
        roleDropdown.classList.remove('show');
        
        // Refresh dashboard based on role
        refreshDashboard(role);
    });
});

// Refresh dashboard based on role
function refreshDashboard(role) {
    // Here you would typically update the dashboard content based on the selected role
    console.log('Refreshing dashboard for role:', role);
    
    // For demo purposes, we'll just show an alert
    let message = '';
    switch(role) {
        case 'sales-manager':
            message = '已切换到销售经理视图，您可以查看直接下属的KPI进度。';
            break;
        case 'region-director':
            message = '已切换到区域总监视图，您可以查看所辖区域的KPI全景。';
            break;
        case 'marketing-manager':
            message = '已切换到市场部经理视图，您可以查看与市场活动联动的销售KPI。';
            break;
    }
    alert(message);
}

// Alerts Bell Click Handler
const alertsBell = document.querySelector('.alerts-bell');
alertsBell.addEventListener('click', () => {
    alert('Opening alerts list...');
});

// Header Chips Click Handlers
const headerChips = document.querySelectorAll('.header-chips .chip');
headerChips.forEach(chip => {
    chip.addEventListener('click', () => {
        alert(`Changing filter to: ${chip.textContent}`);
    });
});

// Filter Chips Click Handlers
const filterChips = document.querySelectorAll('.filter-chip');
filterChips.forEach(chip => {
    chip.addEventListener('click', () => {
        alert(`Changing filter to: ${chip.textContent}`);
    });
});

// Initialize Org Tree
orgNodes.forEach(node => {
    const children = node.querySelector('.node-children');
    if (children) {
        children.style.display = 'block';
    }
});

// Add some animation on page load
document.addEventListener('DOMContentLoaded', () => {
    screens.forEach(screen => {
        if (screen.classList.contains('active')) {
            screen.style.animation = 'fadeIn 0.3s ease';
        }
    });
});