document.addEventListener('DOMContentLoaded', ready);

function ready() {
	const secondHand = document.querySelector('.second-hand');
	const minHand = document.querySelector('.min-hand');
	const hourHand = document.querySelector('.hour-hand');

	function setDate() {
		const now = new Date();

		const second = now.getSeconds();
		const secondsDegrees = ((second / 60) * 360) + 90;
		secondHand.style.transform = `rotate(${secondsDegrees}deg`;

		const min = now.getMinutes();
		const minsDegrees = ((min / 60) * 360) + 90;
		minHand.style.transform = `rotate(${minsDegrees}deg`;

		const hour = now.getHours();
		const hoursDegrees = ((hour / 12) * 360) + 90;
		hourHand.style.transform = `rotate(${hoursDegrees}deg`;
	}

	setInterval(setDate, 1000);

}