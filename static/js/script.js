const textElement = document.getElementById('typing-text');
        const phrases = ["Python Developer", "Gameplay Programmer", "Tools Enthusiast", "Creative Coder"];
        let pIdx = 0, cIdx = 0, isDel = false, speed = 100;

        function type() {
            const current = phrases[pIdx];
            textElement.textContent = isDel ? current.substring(0, cIdx--) : current.substring(0, cIdx++);
            
            if (!isDel && cIdx > current.length) { isDel = true; speed = 2000; }
            else if (isDel && cIdx === 0) { isDel = false; pIdx = (pIdx + 1) % phrases.length; speed = 500; }
            else { speed = isDel ? 50 : 100; }
            
            setTimeout(type, speed);
        }
        document.addEventListener('DOMContentLoaded', type);