const download = document.getElementById("download");
const changes = document.getElementById("changes");

download.addEventListener("click", () => {
    window.open("downloads/ste-electron-1.0.0 Setup.exe");
});

changes.addEventListener("click", () => {
    window.open("https://github.com/FireStreaker2/STE-Electron-Website/commits/main");
});


// animation magic
var controller = new ScrollMagic.Controller();
var timeline = new TimelineMax();

timeline
  .from('.animate-me:nth-child(odd)', { x: '-100%', opacity: 0 })
  .from('.animate-me:nth-child(even)', { x: '100%', opacity: 0 })

  var scene = new ScrollMagic.Scene({
    triggerElement: '#pictures',
    triggerHook: 0.5,
    duration: '100%',
  })
    .setTween(timeline)
    .addTo(controller);