
// Ciclo de vida del SW

self.addEventListener('install', event => {

  // Descargar assets 
  // creamos un cache
  console.log('SW: instalando el SW!');

  const instalacion = new Promise( (resolve, reject) =>  {
    setTimeout(() => {
      console.log('SW: Instalaciones listas');
      self.skipWaiting();
      resolve()
    }, 1);
  
    
  })

  // self.skipWaiting();

  

  event.waitUntil( instalacion )
  
});

// Cuando el SW toma el control de la aplicacion
self.addEventListener('activate', event => {

  // borrar cache viejo
  console.log('SW2: activo y listo para controlar la app ');

  
});

// FETCH: manejo de peticiones HTTP
self.addEventListener('fetch', event => {

  // aplicar estrategias del cache
  /* console.log('SW2:', event.request.url);

  if(event.request.url.includes('https://reqres.in')) {
    const resp = new Response(`{ ok: false, mensaje: 'jajaja' }`)

    event.respondWith( resp );
  } */
});

// SYNC: recuperamos la conexion a Internet

self.addEventListener('sync', event => {

  console.log('Tenemos conexion ');
  console.log(event);
  console.log(event.tag);
  
});

// PUSH: manejar las notificaciones push
self.addEventListener('push', event => {

  console.log('notificacion recibida');
  
  
});