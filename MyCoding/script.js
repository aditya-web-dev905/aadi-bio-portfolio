// Typing Text Animation for Roles
const roles = [
    "🚀 Web Developer & Data Entry Specialist",
    "💻 HTML, CSS & JavaScript Creator",
    "📊 MS Excel & Professional Typing Expert",
    "✨ Custom Website Designer"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typedTextElement = document.getElementById("typedText");

function typeEffect() {
    const currentRole = roles[roleIndex];
    
    if (isDeleting) {
        typedTextElement.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typedTextElement.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
    }

    let typingSpeed = isDeleting ? 40 : 80;

    if (!isDeleting && charIndex === currentRole.length) {
        typingSpeed = 2000; // Pause at full word
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typingSpeed = 500;
    }

    setTimeout(typeEffect, typingSpeed);
}

document.addEventListener("DOMContentLoaded", () => {
    if (typedTextElement) {
        setTimeout(typeEffect, 500);
    }
});

// Excel Modal Functions
function openExcelModal() {
    document.getElementById('excelModal').style.display = 'block';
}

function closeExcelModal() {
    document.getElementById('excelModal').style.display = 'none';
}

// Word Modal Functions
function openWordModal() {
    document.getElementById('wordModal').style.display = 'block';
}

function closeWordModal() {
    document.getElementById('wordModal').style.display = 'none';
}

// Window click par modal close hone ke liye
window.onclick = function(event) {
    const excelModal = document.getElementById('excelModal');
    const wordModal = document.getElementById('wordModal');
    if (event.target == excelModal) {
        excelModal.style.display = 'none';
    }
    if (event.target == wordModal) {
        wordModal.style.display = 'none';
    }
}

// Quick Form WhatsApp integration
function handleFormSubmit(event) {
    event.preventDefault();
    const name = document.getElementById('clientName').value;
    const service = document.getElementById('clientService').value;
    const message = document.getElementById('clientMessage').value;

    const whatsappUrl = `https://wa.me/919243266485?text=Hello%20Aditya,%20My%20name%20is%20${encodeURIComponent(name)}.%20Selected%20Service:%20${encodeURIComponent(service)}.%20Details:%20${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
}

// Mobile & Laptop Touch/Click Glow Highlight Effect
document.addEventListener('pointerdown', function(e) {
    const card = e.target.closest('.card');
    
    if (card) {
        document.querySelectorAll('.card').forEach(el => {
            el.classList.remove('active-highlight');
        });
        
        card.classList.add('active-highlight');
        
        setTimeout(() => {
            card.classList.remove('active-highlight');
        }, 1500);
    }
});