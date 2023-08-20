const currentDate = document.querySelector("span#date");

const weekday = ["日", "月", "火", "水", "木", "金", "土"];

function getDate() {
	const today = new Date();
	const year = String(today.getFullYear());
	const month = String(today.getMonth() + 1).padStart(2, "0");
	const date = String(today.getDate()).padStart(2, "0");
	const day = today.getDay();

	currentDate.innerText = `${year}/${month}/${date} (${weekday[day]})`;
}

getDate();
