// Typing Animation Effect for Hero Section
const words = ["Expert Web Developer", "MS Excel & Data Entry Specialist", "BSc Bio Student (Mehgaon, Bhind)"];
let i = 0;

function typingEffect() {
    let word = words[i].split("");
    var loopTyping = function() {
        if (word.length > 0) {
            document.getElementById('typed-text').innerHTML += word.shift();
        } else {
            setTimeout(deletingEffect, 2000);
            return;
        }
        setTimeout(loopTyping, 100);
    };
    loopTyping();
}

function deletingEffect() {
    let word = words[i].split("");
    var loopDeleting = function() {
        if (word.length > 0) {
            word.pop();
            document.getElementById('typed-text').innerHTML = word.join("");
        } else {
            if (words.length > (i + 1)) {
                i++;
            } else {
                i = 0;
            }
            setTimeout(typingEffect, 500);
            return;
        }
        setTimeout(loopDeleting, 50);
    };
    loopDeleting();
}

typingEffect();

// Modal Content Data with Emojis
const serviceDetails = {
    web: {
        title: "💻 Web Development Projects & Custom Services",
        content: `
            <p>🌟 Yeh mere kuch sample live projects hain jo maine clients ko dikhane ke liye design kiye hain:</p>
            <ul>
                <li>🏡 <strong>Luxury Real Estate:</strong> Modern property showcase aur booking UI.</li>
                <li>☕ <strong>The Royal Bean Cafe:</strong> Interactive restaurant menu aur table reservation system.</li>
                <li>💪 <strong>Ironclad Athletics:</strong> Fitness portal with membership plans.</li>
            </ul>
            <p>🚀 <strong>Custom Order Note:</strong> Yeh websites sample hain. Agar aapko apni pasand ke kisi bhi naye topic par custom website banvani ho, toh WhatsApp par sampark karein!</p>
        `
    },
    data: {
        title: "📊 MS Word, Excel & Data Entry Services",
        content: `
            <p>💼 Professional office aur data entry services jo main pure focus ke sath provide karta hoon:</p>
            <ul>
                <li>📝 <strong>MS Word:</strong> Professional documents formatting, typing, reports.</li>
                <li>📈 <strong>MS Excel:</strong> Spreadsheet management, data cleaning, formulas.</li>
                <li>⚡ <strong>Typing & Conversion:</strong> High-speed typing aur 100% accuracy.</li>
            </ul>
            <p>🎯 <strong>Quality Guarantee:</strong> Aapka har ek data entry project pure focus aur fast speed ke sath complete kiya jayega.</p>
        `
    }
};

// Open Modal
function openModal(key) {
    const modal = document.getElementById('serviceModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');

    if (serviceDetails[key]) {
        modalTitle.innerText = serviceDetails[key].title;
        modalBody.innerHTML = serviceDetails[key].content;
        modal.style.display = 'flex';
    }
}

// Close Modal
function closeModal() {
    document.getElementById('serviceModal').style.display = 'none';
}

window.onclick = function(event) {
    const modal = document.getElementById('serviceModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// ⭐ Click Highlight Effect Function for Cards & Boxes ⭐
document.addEventListener('click', function(e) {
    // Check if clicked element is a skill-card or split-box
    const card = e.target.closest('.skill-card, .split-box');
    
    if (card) {
        // Remove highlight from all cards first
        document.querySelectorAll('.skill-card, .split-box').forEach(el => {
            el.classList.remove('active-highlight');
        });
        
        // Add highlight to the clicked card
        card.classList.add('active-highlight');
        
        // Remove highlight automatically after 1.5 seconds so it looks interactive
        setTimeout(() => {
            card.classList.remove('active-highlight');
        }, 1500);
    }
});

// WhatsApp Form Submit
function handleWhatsAppSubmit(event) {
    event.preventDefault();
    
    const name = document.getElementById('clientName').value;
    const service = document.getElementById('clientService').value;
    const message = document.getElementById('clientMessage').value;
    
    const phoneNumber = "919243266485";
    const text = `Hello Aditya,\nMera naam ${name} hai.\nMujhe ${service} ka kaam karwana hai.\n\nDetails: ${message}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    
    window.open(url, '_blank');
}