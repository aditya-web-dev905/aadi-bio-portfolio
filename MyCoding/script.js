// State Management
let currentPoints = 1250;
let streakCount = 5;

// Dynamic Leaderboard Data
const leaderboardData = [
    { rank: "#1", name: "⚡ Aman Sharma", score: "4,890 PTS" },
    { rank: "#2", name: "🚀 Priya Verma", score: "4,210 PTS" },
    { rank: "#3", name: "💡 Rahul Gupta", score: "3,950 PTS" },
    { rank: "#4", name: "🔥 Neha Singh", score: "3,400 PTS" },
    { rank: "#5", name: "🌟 Karan Malhotra", score: "3,120 PTS" }
];

// Load Leaderboard on Page Startup
window.addEventListener('DOMContentLoaded', () => {
    loadLeaderboard();
});

function loadLeaderboard() {
    const listContainer = document.getElementById('leaderboardList');
    listContainer.innerHTML = "";

    leaderboardData.forEach(user => {
        const item = document.createElement('div');
        item.className = 'leaderboard-item';
        item.innerHTML = `
            <div class="user-info"><span class="rank">${user.rank}</span> ${user.name}</div>
            <div class="score">${user.score}</div>
        `;
        listContainer.appendChild(item);
    });
}

// Puzzle Verification Logic
function checkAnswer(selectedIndex) {
    const feedbackEl = document.getElementById('puzzleFeedback');
    const pointsEl = document.getElementById('userPoints');
    
    // Correct option is index 1 (Namak)
    if (selectedIndex === 1) {
        feedbackEl.style.color = "var(--neon-green)";
        feedbackEl.innerHTML = "🎉 Sahi jawab! Aapko +50 points mil gaye hain aur leaderboard update ho gaya hai.";
        currentPoints += 50;
        pointsEl.innerText = currentPoints.toLocaleString();

        // Real-time update user position in leaderboard simulation
        leaderboardData[2].score = (parseInt(leaderboardData[2].score.replace(/[^0-9]/g, '')) + 50) + " PTS";
        loadLeaderboard();
    } else {
        feedbackEl.style.color = "var(--neon-pink)";
        feedbackEl.innerHTML = "❌ Galat jawab! Sahi option 'Namak' hai, dobara try karein.";
    }
}

// AI Concept Generator Function
function generateAITool() {
    const promptInput = document.getElementById('aiPrompt').value.trim();
    const outputArea = document.getElementById('aiOutput');

    if (promptInput === "") {
        outputArea.style.color = "var(--neon-pink)";
        outputArea.innerHTML = "⚠️ Pehle koi valid keyword ya naam enter karein!";
        return;
    }

    outputArea.style.color = "var(--neon-cyan)";
    outputArea.innerHTML = `✨ Generating Neon Persona for "<strong>${promptInput}</strong>"... Success! Model v4.2 Rendered.`;
}