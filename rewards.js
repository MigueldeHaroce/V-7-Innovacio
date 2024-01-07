window.onload = function() {
	var confettiSettings = { target: 'wrapper' };
	var confetti = new ConfettiGenerator(confettiSettings);
	confetti.render();
};

const rewardsBtn = document.getElementById('rewardsBtn');
const homeBtn = document.getElementById('homeBtn');

rewardsBtn.addEventListener('click', () => {
	window.location.href = 'index.html';
});


homeBtn.addEventListener('click', () => {
	window.location.href = 'uploadPage.html';
});

