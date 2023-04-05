const download = document.getElementById("download");
const changes = document.getElementById("changes");

download.addEventListener("click", () => {
    window.open("downloads/ste-electron-1.0.0 Setup.exe");
});

changes.addEventListener("click", () => {
    window.open("https://github.com/FireStreaker2/STE-Electron/commits/master");
});


var controller = new ScrollMagic.Controller();
var revealElements = document.getElementsByClassName("animate-me");
for (var i=0; i<revealElements.length; i++) {
  new ScrollMagic.Scene({
		  triggerElement: revealElements[i],
			offset: 50,
			triggerHook: 0.9,
	})
		.setClassToggle(revealElements[i], "visible")
		.addTo(controller);
}