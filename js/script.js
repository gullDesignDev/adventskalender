const main = document.getElementById("main");
const d = new Date();
const day = d.getDate();
const month = d.getMonth() + 1;
const year = d.getFullYear();
const today = `${year}-${month}-${day}`;
const imagePath = "img/";
const imageOpenPath = "img/open/";
const domain = "https://www.angela-bruderer.ch/de/";

function defineDateRange (startDate, endDate) {
	dates = array = [];
	var dStart = new Date(startDate);
	var dEnd = new Date(endDate);
	const daysBetween = (dEnd - dStart) / 1000 / 60 / 60 / 24;

	const tmonth = dStart.getMonth() + 1;
	const tyear = dStart.getFullYear();

	for (let index = 0; index <= daysBetween; index++) {
		const tday = dStart.getDate() + index;
		const ttoday = `${tyear}-${tmonth}-${tday}`;
		dates.push(ttoday);
	}

	return dates;
}

function generateDoors() {
	if (links.length == images.length) {
		for (var i = 0; i < links.length; i++) {
			var liDoor = document.createElement("li");
			liDoor.setAttribute("class", "calendarDoor");
			liDoor.setAttribute("data-date", dates[i]);

			var aDoor = document.createElement("a");
			if (dates[i] <= today) {
				aDoor.setAttribute("href", domain + links[i]);
				aDoor.setAttribute("target", "_blank");
			}
			liDoor.appendChild(aDoor);
			
			var imgDoor = document.createElement("img");

			if (dates[i] <= today) {
				imgDoor.setAttribute("src", imageOpenPath + images[i]);
			} else {
				imgDoor.setAttribute("src", imagePath + images[i]);
			}
			aDoor.appendChild(imgDoor);

			main.appendChild(liDoor);
		}
	}
}

defineDateRange("2021-11-01", "2021-11-24");
generateDoors();

// Collecting all the li elements within the main calender ul and save it as an
// array with the new ES6 method. Otherwiese it will only be a HTMLCollection
// which you'll need to iterate manually.
const calendarDoors = Array.from(
	main.getElementsByTagName("li")
);