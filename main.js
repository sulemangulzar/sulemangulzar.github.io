// main.js
        // Mobile menu functionality
        const mobileMenuBtn = document.getElementById('menu-button');
        const mobileMenuCloseBtn = document.getElementById('menu-button-close');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileMenuLinks = document.querySelectorAll('.mobile-menu-link');

        function toggleMobileMenu() {
            mobileMenu.classList.toggle('hidden');
            document.body.classList.toggle('overflow-hidden');
        }

        mobileMenuBtn.addEventListener('click', toggleMobileMenu);
        mobileMenuCloseBtn.addEventListener('click', toggleMobileMenu);

        // Close mobile menu when clicking on links
        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                document.body.classList.remove('overflow-hidden');
            });
        });

        // Navbar scroll effect
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                navbar.classList.add('bg-white/95', 'shadow-lg');
                navbar.classList.remove('bg-white/80');
            } else {
                navbar.classList.add('bg-white/80');
                navbar.classList.remove('bg-white/95', 'shadow-lg');
            }
        });

        // Smooth scrolling function
        function scrollToSection(sectionId) {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }

        // Smooth scrolling for all anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href').slice(1);
                scrollToSection(targetId);
            });
        });

        // Initialize Swiper for projects
        const swiper = new Swiper('.mySwiper', {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                640: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3,
                },
            },
        });

        // Section reveal animation
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    
                    // Animate skill bars when experience section is visible
                    if (entry.target.id === 'experience') {
                        animateSkillBars();
                    }
                }
            });
        }, observerOptions);

        // Observe all sections with the section-reveal class
        document.querySelectorAll('.section-reveal').forEach(section => {
            observer.observe(section);
        });

        // Animate skill bars
        function animateSkillBars() {
            const skillBars = document.querySelectorAll('.skill-progress');
            skillBars.forEach((bar, index) => {
                setTimeout(() => {
                    bar.classList.add('animate');
                }, index * 200);
            });
        }

        // Typing effect for hero text
        const typingText = document.getElementById('typing-text');
        const texts = ['UX-UI Designer', 'Frontend Dev', 'Creative Thinker'];
        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function typeEffect() {
            const currentText = texts[textIndex];
            
            if (isDeleting) {
                typingText.textContent = currentText.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typingText.textContent = currentText.substring(0, charIndex + 1);
                charIndex++;
            }

            let typeSpeed = isDeleting ? 100 : 200;

            if (!isDeleting && charIndex === currentText.length) {
                typeSpeed = 2000;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
            }

            setTimeout(typeEffect, typeSpeed);
        }

        // Start typing effect after page load
        window.addEventListener('load', () => {
            setTimeout(typeEffect, 1000);
        });

        // Contact form handling
        document.getElementById('contact-form').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const button = this.querySelector('button[type="submit"]');
            const originalText = button.textContent;
            
            button.textContent = 'Sending...';
            button.disabled = true;
            
            // Simulate form submission
            setTimeout(() => {
                button.textContent = 'Message Sent! ✓';
                button.classList.add('bg-green-600');
                
                setTimeout(() => {
                    button.textContent = originalText;
                    button.classList.remove('bg-green-600');
                    button.disabled = false;
                    this.reset();
                }, 3000);
            }, 2000);
        });

        // Newsletter form handling
        document.getElementById('newsletter-form').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const button = this.querySelector('button[type="submit"]');
            const originalText = button.textContent;
            
            button.textContent = 'Subscribing...';
            button.disabled = true;
            
            setTimeout(() => {
                button.textContent = 'Subscribed! ✓';
                
                setTimeout(() => {
                    button.textContent = originalText;
                    button.disabled = false;
                    this.reset();
                }, 2000);
            }, 1500);
        });

        // Add parallax effect to hero section
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const heroSection = document.getElementById('home');
            const socialCircles = document.querySelectorAll('.social-circles > div');
            
            // Parallax for social circles
            socialCircles.forEach((circle, index) => {
                const rate = scrolled * (0.5 + index * 0.1);
                circle.style.transform = `translateY(${rate}px)`;
            });
        });

        // Add loading animation
        window.addEventListener('load', () => {
            document.body.classList.add('loaded');
        });

        // Add active nav link highlighting
        function updateActiveNavLink() {
            const sections = document.querySelectorAll('section');
            const navLinks = document.querySelectorAll('nav a[href^="#"]');
            
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop - 100;
                const sectionHeight = section.offsetHeight;
                
                if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                    current = section.getAttribute('id');
                }
            });
            
            navLinks.forEach(link => {
                link.classList.remove('text-accent', 'font-bold');
                if (link.getAttribute('href').slice(1) === current) {
                    link.classList.add('text-accent', 'font-bold');
                }
            });
        }

        window.addEventListener('scroll', updateActiveNavLink);
        window.addEventListener('load', updateActiveNavLink);
