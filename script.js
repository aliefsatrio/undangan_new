        // Music control
        let isPlaying = false;
        const bgMusic = document.getElementById('bgMusic');
        
        function toggleMusic() {
            const icon = document.getElementById('music-icon');
            if (isPlaying) {
                bgMusic.pause();
                icon.className = 'fas fa-play';
            } else {
                bgMusic.play();
                icon.className = 'fas fa-pause';
            }
            isPlaying = !isPlaying;
        }
        
        // Falling flowers
        function createFallingFlowers() {
            const container = document.getElementById('flowers-container');
            for (let i = 0; i < 15; i++) {
                const flower = document.createElement('div');
                flower.className = 'flower';
                flower.style.left = Math.random() * 100 + 'vw';
                flower.style.animationDuration = Math.random() * 3 + 2 + 's';
                flower.style.animationDelay = Math.random() * 2 + 's';
                container.appendChild(flower);
            }
        }
        
        // Countdown timer
        function updateCountdown() {
            const weddingDate = new Date('2024-06-16T08:00:00');
            const now = new Date();
            const diff = weddingDate - now;
            
            if (diff > 0) {
                const days = Math.floor(diff / (1000 * 60 * 60 * 24));
                const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((diff % (1000 * 60)) / 1000);
                
                document.getElementById('days').textContent = days;
                document.getElementById('hours').textContent = hours;
                document.getElementById('minutes').textContent = minutes;
                document.getElementById('seconds').textContent = seconds;
            }
        }
        
        // Smooth scroll
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
        
        // Intersection Observer for animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);
        
        document.querySelectorAll('.section').forEach(section => {
            observer.observe(section);
        });
        
        // RSVP handling
        function handleRSVP(e) {
            e.preventDefault();
            const formData = new FormData(e.target);
            const data = Object.fromEntries(formData);
            
            const message = `Konfirmasi Kehadiran:
Nama: ${data.name}
Nomor: ${data.phone}
Jumlah Tamu: ${data.guests}
Pesan: ${data.message}`;
            
            const whatsappURL = `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`;
            window.open(whatsappURL, '_blank');
        }
        
        // Share WhatsApp
        function shareWhatsApp() {
            const shareText = 'Undangan Pernikahan Alief Satrio & Naiya Resda Novalia - https://example.com/undangan';
            const whatsappURL = `https://wa.me/?text=${encodeURIComponent(shareText)}`;
            window.open(whatsappURL, '_blank');
        }
        
        // Copy to clipboard
        function copyToClipboard(text) {
            navigator.clipboard.writeText(text).then(() => {
                alert('Nomor rekening berhasil disalin!');
            });
        }
        
        // Add message to guest book
        function addMessage() {
            const message = document.getElementById('guestMessage').value;
            if (message.trim()) {
                const messageList = document.getElementById('messageList');
                const newMessage = document.createElement('div');
                newMessage.className = 'message-item';
                newMessage.innerHTML = `
                    <strong>Tamu</strong>
                    <p>${message}</p>
                    <small>${new Date().toLocaleDateString('id-ID')}</small>
                `;
                messageList.insertBefore(newMessage, messageList.firstChild);
                document.getElementById('guestMessage').value = '';
            }
        }
        
        // Modal gallery
        function openModal(element) {
            const modal = document.getElementById('imageModal');
            const modalImg = document.getElementById('modalImage');
            modal.style.display = 'flex';
            modalImg.src = element.querySelector('img').src;
        }
        
        function closeModal() {
            document.getElementById('imageModal').style.display = 'none';
        }
        
        // Initialize
        createFallingFlowers();
        setInterval(updateCountdown, 1000);
        updateCountdown();
        
        // Add floating hearts randomly
        setInterval(() => {
            const heart = document.createElement('i');
            heart.className = 'floating-heart fas fa-heart';
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.top = Math.random() * 100 + 'vh';
            document.body.appendChild(heart);
            
            setTimeout(() => {
                heart.remove();
            }, 3000);
        }, 5000);