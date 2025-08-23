document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const exoplanetCards = document.querySelectorAll('.exoplanet-card');
    
    // Filter functionality
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get the filter type
            const filterType = this.getAttribute('data-filter');
            
            // Apply loading state
            document.querySelector('.exoplanets-grid').classList.add('loading');
            
            // Filter the exoplanet cards after a short delay for animation
            setTimeout(() => {
                exoplanetCards.forEach(card => {
                    if (filterType === 'all') {
                        card.style.display = 'block';
                    } else {
                        const cardStatus = card.getAttribute('data-status');
                        if (cardStatus === filterType) {
                            card.style.display = 'block';
                        } else {
                            card.style.display = 'none';
                        }
                    }
                    
                    // Add animation
                    card.style.animation = 'none';
                    setTimeout(() => {
                        card.style.animation = 'fadeIn 0.5s ease forwards';
                    }, 10);
                });
                
                // Remove loading state
                document.querySelector('.exoplanets-grid').classList.remove('loading');
            }, 300);
        });
    });
    
    // Add click events to cards for potential detail views
    exoplanetCards.forEach(card => {
        card.addEventListener('click', function() {
            // Remove any existing selected class
            exoplanetCards.forEach(c => c.classList.remove('selected'));
            
            // Add selected class to clicked card
            this.classList.add('selected');
            
            // In a real application, you might show a detailed view here
            console.log('Selected exoplanet:', this.querySelector('.card-title').textContent);
        });
    });
    
    // Add hover effect to stat cards with a slight delay
    const statCards = document.querySelectorAll('.stat-card');
    statCards.forEach(card => {
        let hoverTimeout;
        
        card.addEventListener('mouseenter', function() {
            hoverTimeout = setTimeout(() => {
                this.style.transform = 'translateY(-5px)';
                this.style.boxShadow = '0 12px 20px rgba(0, 0, 0, 0.3)';
            }, 100);
        });
        
        card.addEventListener('mouseleave', function() {
            clearTimeout(hoverTimeout);
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
        });
    });
    
    // Animate confidence bars on page load
    setTimeout(() => {
        document.querySelectorAll('.confidence-fill').forEach(bar => {
            const originalWidth = bar.style.width;
            bar.style.width = '0';
            
            setTimeout(() => {
                bar.style.transition = 'width 1.5s ease-in-out';
                bar.style.width = originalWidth;
            }, 200);
        });
    }, 500);
});