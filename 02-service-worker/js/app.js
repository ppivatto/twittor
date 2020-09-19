// confirmar que se puede usar el SW
if (navigator.serviceWorker) {
  navigator.serviceWorker.register('/sw.js');
}