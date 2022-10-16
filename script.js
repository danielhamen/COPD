function hideTableOfContents() {
	var tableOfContentsItems = document.getElementById("table-of-contents-items");
	tableOfContentsItems.style.display = "none";

	var tableOfContents = document.getElementById("table-of-contents");
	tableOfContents.style.height = "1em";

	var tableOfContentsTitle = document.getElementById("table-of-contents-title");
	tableOfContentsTitle.style.borderBottom = "none";

	var icon = document.getElementById("toggle-table-of-contents-icon");
	icon.style.transform = "rotate(90deg)";
}

function showTableOfContents() {
	var tableOfContentsItems = document.getElementById("table-of-contents-items");
	tableOfContentsItems.style.display = "block";

	var tableOfContents = document.getElementById("table-of-contents");
	tableOfContents.style.height = "fit-content";

	var tableOfContentsTitle = document.getElementById("table-of-contents-title");
	tableOfContentsTitle.style.borderBottom = "1px solid var(--text)";

	var icon = document.getElementById("toggle-table-of-contents-icon");
	icon.style.transform = "rotate(0deg)";
}

function toggleTableOfContents() {
	var tableOfContentsItems = document.getElementById("table-of-contents-items");
	if (tableOfContentsItems.style.display == "block" || tableOfContentsItems.style.display == "") {
		hideTableOfContents();
	} else {
		showTableOfContents();
	}
}

function setSelectedTableOfContentsItem(itemID) {
	var items = ["overview", "symptoms", "treatment", "citation"];
	for (let i = 0; i < items.length; i++) {
		const item = document.getElementById(items[i] + "-title");
		if (item == itemID) {
			item.classList.add("selected-table-of-contents-item");
		} else {
			item.classList.remove("selected-table-of-contents-item");
		}
	}
}

window.addEventListener('load', function() {
	// onloadSetCitationType();
	// makeHmnCit();
})
