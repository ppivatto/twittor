self.addEventListener('fetch', event => {
  const resp = fetch (event.request)
  .then( resp => {
    if (resp.ok) {
      return resp;
    } else {
      return fetch('img/main.jpg')
    }
  })

  event.respondWith( resp );
});

// Interceptamos el estilo
/* if (event.request.url.includes('style.css')) {
  let respuesta = new Response(`
      body {
        background-color: red !important;
        color: pink;
      }
  `, {
    headers: {
      'Content-Type': 'text/css'
    }
  })
  event.respondWith( respuesta )
} else {
  event.respondWith( fetch (event.request))
} */

// Interceptamos la imagen
/* if (event.request.url.includes('main.jpg')) {
  event.respondWith( fetch('img/main-patas-arriba.jpg') )
} else {
  event.respondWith( fetch (event.request))
} */