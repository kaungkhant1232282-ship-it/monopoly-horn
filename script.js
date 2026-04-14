const board = document.getElementById('board');
const totalPerSide = 8;
const totalSlots = 28; // (8*4) - 4 = 28

// အကွက်တွေကို နေရာချတဲ့ Loop
for (let i = 0; i < totalSlots; i++) {
    const slot = document.createElement('div');
    slot.className = 'slot';
    slot.id = `slot-${i}`;
    slot.innerText = i === 0 ? "GO" : i;

    // Grid Position သတ်မှတ်ခြင်း (CSS Grid area သုံးပြီး ပတ်ပတ်လည် ပို့မယ်)
    let row, col;
    if (i < 8) { row = 1; col = i + 1; } // Top
    else if (i < 15) { row = i - 6; col = 8; } // Right
    else if (i < 22) { row = 8; col = 22 - i; } // Bottom
    else { row = 29 - i; col = 1; } // Left

    slot.style.gridRow = row;
    slot.style.gridColumn = col;
    
    if ([0, 7, 14, 21].includes(i)) slot.classList.add('corner');
    board.appendChild(slot);
}

// Player ရုပ်လေး ထည့်မယ်
const player = document.createElement('div');
player.id = 'player';
board.appendChild(player);

let currentPos = 0;

function playTurn() {
    const dice = Math.floor(Math.random() * 6) + 1;
    document.getElementById('dice-display').innerText = (dice === 1 ? '⚀' : dice === 2 ? '⚁' : dice === 3 ? '⚂' : dice === 4 ? '⚃' : dice === 5 ? '⚄' : '⚅');
    
    currentPos = (currentPos + dice) % totalSlots;
    const targetSlot = document.getElementById(`slot-${currentPos}`);
    
    // Player ကို အကွက်ပေါ် ရွှေ့မယ်
    player.style.top = targetSlot.offsetTop + 'px';
    player.style.left = targetSlot.offsetLeft + 'px';
    document.getElementById('msg').innerText = `ရလဒ်: ${dice}`;
}
