const boardElement = document.getElementById('board');

function createBoard() {
    boardElement.innerHTML = ''; 
    
    // အလယ်က UI ကို အရင်ဆောက်မယ်
    let center = document.createElement('div');
    center.className = 'center-ui';
    center.innerHTML = `<h2 id="status">Player 1 Turn</h2>
                        <div id="dice-res">🎲 0</div>
                        <button onclick="rollDice()">Roll Dice</button>`;
    boardElement.appendChild(center);

    // အကွက် ၄၀ ဆောက်မယ်
    for (let i = 0; i < 40; i++) {
        let square = document.createElement('div');
        square.className = 'square';
        square.id = 'sq-' + i;
        
        // အကွက် နံပါတ်ပြမယ် (0 က GO)
        square.innerText = (i === 0) ? "GO" : i; 
        
        // Grid နေရာချတဲ့ logic (အနား ၄ ဖက် လှည့်အောင်)
        if (i < 11) { square.style.gridRow = "11"; square.style.gridColumn = 11 - i; }
        else if (i < 21) { square.style.gridColumn = "1"; square.style.gridRow = 21 - i; }
        else if (i < 31) { square.style.gridRow = "1"; square.style.gridColumn = i - 19; }
        else { square.style.gridColumn = "11"; square.style.gridRow = i - 29; }
        
        boardElement.appendChild(square);
    }
}

// Page စပွင့်တာနဲ့ Board ဆောက်မယ်
window.onload = createBoard;

function rollDice() {
    let d1 = Math.floor(Math.random() * 6) + 1;
    let d2 = Math.floor(Math.random() * 6) + 1;
    let total = d1 + d2;
    document.getElementById('dice-res').innerText = `🎲 ${d1} + ${d2} = ${total}`;
}
