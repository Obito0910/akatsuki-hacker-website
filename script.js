// Akatsuki Hacker Website JavaScript
document.addEventListener('DOMContentLoaded', function() {
    
    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }));
    
    // Typing Animation for Hero Section
    const typingText = document.getElementById('typing-text');
    const textArray = [
        "Elite Hacker Syndicate | Cyber Operations | Digital Domination",
        "Operating Beyond Boundaries | Anonymous | Untraceable",
        "Advanced Cyber Capabilities | Global Reach | Maximum Security"
    ];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    
    function typeText() {
        const currentText = textArray[textIndex];
        
        if (isDeleting) {
            // Deleting text
            typingText.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            // Typing text
            typingText.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }
        
        // Check if text is fully typed
        if (!isDeleting && charIndex === currentText.length) {
            // Pause at the end of typing
            typingSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            // Move to next text after deleting
            isDeleting = false;
            textIndex++;
            if (textIndex === textArray.length) {
                textIndex = 0;
            }
        }
        
        setTimeout(typeText, typingSpeed);
    }
    
    // Start typing animation after a delay
    setTimeout(typeText, 1000);
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Form submission
    const contactForm = document.getElementById('hacker-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const codename = document.getElementById('codename').value;
            const message = document.getElementById('message').value;
            
            // Simulate form submission with hacker-style feedback
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Encrypting & Sending...';
            submitBtn.disabled = true;
            
            // Simulate encryption process
            setTimeout(() => {
                // Create hacker-style success message
                const messageDiv = document.createElement('div');
                messageDiv.className = 'form-message';
                messageDiv.innerHTML = `
                    <div style="
                        background-color: rgba(20, 20, 20, 0.9);
                        border: 1px solid #00ff00;
                        padding: 20px;
                        margin-top: 20px;
                        font-family: 'Share Tech Mono', monospace;
                        color: #00ff00;
                    ">
                        <i class="fas fa-check-circle"></i> 
                        <strong>MESSAGE ENCRYPTED AND SENT</strong><br>
                        Codename: ${codename}<br>
                        Transmission secure. Expect response within 24-48 hours via encrypted channel.
                    </div>
                `;
                
                // Insert message after form
                contactForm.parentNode.insertBefore(messageDiv, contactForm.nextSibling);
                
                // Reset form
                contactForm.reset();
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
                
                // Remove message after 5 seconds
                setTimeout(() => {
                    messageDiv.remove();
                }, 5000);
                
            }, 2000);
        });
    }
    
    // Add scroll effect to navbar
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'rgba(10, 10, 10, 0.98)';
            navbar.style.boxShadow = '0 5px 20px rgba(255, 0, 34, 0.1)';
        } else {
            navbar.style.backgroundColor = 'rgba(10, 10, 10, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });
    
    // Add hover effect to skill cards with random glitch effect
    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            // Random chance for glitch effect on hover
            if (Math.random() > 0.7) {
                this.style.transform = 'translateY(-10px) translateX(5px)';
                setTimeout(() => {
                    this.style.transform = 'translateY(-10px) translateX(0)';
                }, 50);
            }
        });
    });
    
    // Add binary rain effect in the background (optional)
    function createBinaryRain() {
        const binaryChars = '01';
        const heroSection = document.querySelector('.hero');
        
        // Create 20 binary elements
        for (let i = 0; i < 20; i++) {
            const binaryElement = document.createElement('div');
            binaryElement.className = 'binary-char';
            binaryElement.textContent = binaryChars.charAt(Math.floor(Math.random() * binaryChars.length));
            binaryElement.style.position = 'absolute';
            binaryElement.style.color = 'rgba(255, 0, 34, 0.3)';
            binaryElement.style.fontSize = Math.random() * 20 + 10 + 'px';
            binaryElement.style.left = Math.random() * 100 + 'vw';
            binaryElement.style.top = '-50px';
            binaryElement.style.zIndex = '0';
            binaryElement.style.fontFamily = 'Share Tech Mono, monospace';
            binaryElement.style.fontWeight = 'bold';
            binaryElement.style.opacity = '0';
            
            heroSection.appendChild(binaryElement);
            
            // Animate binary element falling
            animateBinary(binaryElement);
        }
    }
    
    function animateBinary(element) {
        const speed = Math.random() * 5 + 3;
        const startLeft = parseFloat(element.style.left);
        const endTop = window.innerHeight + 50;
        
        let opacity = 0;
        let top = -50;
        let left = startLeft;
        
        // Fade in and fall
        const fadeInterval = setInterval(() => {
            if (opacity < 0.5) {
                opacity += 0.02;
                element.style.opacity = opacity;
            }
            
            top += speed;
            element.style.top = top + 'px';
            
            // Slight horizontal movement
            left += (Math.random() - 0.5) * 0.5;
            element.style.left = left + 'vw';
            
            // Change character randomly
            if (Math.random() > 0.7) {
                element.textContent = Math.random() > 0.5 ? '0' : '1';
            }
            
            // Reset when off screen
            if (top > endTop) {
                clearInterval(fadeInterval);
                element.remove();
                
                // Create new binary element
                setTimeout(() => {
                    createBinaryRain();
                }, 100);
            }
        }, 50);
    }
    
    // Start binary rain after page loads
    setTimeout(createBinaryRain, 3000);
    
    // Add click effect to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            // Remove ripple after animation
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
});