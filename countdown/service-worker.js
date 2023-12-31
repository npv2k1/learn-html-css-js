self.addEventListener("install", function (event) {
  console.log("Installed sw.js", event);
});

self.addEventListener("activate", function (event) {
  console.log("Activated sw.js", event);
});

self.addEventListener("activate", (event) => {
  console.log("Service worker activated");

  // Set the countdown date
  var countDownDate = new Date("Jan 1, 2024 00:00:00").getTime();

  // Update the count down every 1 second
  var x = setInterval(function () {
    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Send a message to the page with the countdown
    self.clients.matchAll().then((clients) => {
      clients.forEach((client) => {
        client.postMessage({
          type: "countdown",
          countdown:
            days + "d " + hours + "h " + minutes + "m " + seconds + "s ",
        });
      });
    });

    // If the count down is finished, clear the interval
    if (distance < 0) {
      clearInterval(x);
      console.log("Happy New Year!");
    }
  }, 1000);
  event.waitUntil(
    self.clients.claim(),
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== cacheName) {
            return caches.delete(cache);
          }
        })
      );
    })
  );
});
