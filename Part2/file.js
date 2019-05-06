let setId = document.getElementById('idInput'),
    setColor = document.getElementById('colorInput');
    diamond = document.getElementById('diamonds'),
    clubs = document.getElementById('clubs'),
    hearts = document.getElementById('hearts'),
    spades = document.getElementById('spades');

function setCard() {
    let card = setId.value.toLowerCase()
    setId.value = ''
    if(card === 'diamond' || card === 'diamonds') {
        diamond.style.color = colorInput.value;
    } else if(card === 'heart' || card === 'hearts') {
        hearts.style.color = colorInput.value;
    } else if(card === 'spade' || card === 'spades') {
        spades.style.color = colorInput.value;
    } else if(card === 'club' || card === 'clubs') {
        clubs.style.color = colorInput.value;
    } else {
        alert('That\'s not a suit!')
    }
    
}

function resetCards() {
    document.location.reload(true)
}