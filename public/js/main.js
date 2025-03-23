// Add this at the beginning of your main.js file
function updateUTCTime() {
    const now = new Date();
    const utcString = now.toISOString().slice(0, 19).replace('T', ' ');
    document.getElementById('utcTime').textContent = `UTC: ${utcString}`;
}

// Update time every second
setInterval(updateUTCTime, 1000);

// Rest of your existing main.js code...
// Add smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
// Add this to your existing main.js file

document.addEventListener('DOMContentLoaded', function() {
    // Check if we're on the dashboard page
    const velocityChartCanvas = document.getElementById('velocityChart');
    if (velocityChartCanvas) {
        new Chart(velocityChartCanvas, {
            type: 'line',
            data: {
                labels: ['Sprint 1', 'Sprint 2', 'Sprint 3', 'Current'],
                datasets: [{
                    label: 'Story Points Completed',
                    data: [20, 25, 22, 18],
                    borderColor: '#2563eb',
                    tension: 0.3,
                    fill: false
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }
});