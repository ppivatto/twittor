self.addEventListener('fetch', event => {
    /* const offlineResp = new Response(`
        Bienvenido a mi Página Web!!

        Disculpa, pero para usarla necesitas Internet
    `) */
    const offlineResp = new Response(`
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Mi PWA sin Conexión</title>

        </head>
        <body class="container p-3">
            <h1> Offline Mode </h1>
        </body>
    </html>
    `, {
        headers: {
            'Content-Type': 'text/html'
        }
    })
    const resp = fetch(event.request)
                    .catch(() => offlineResp )

    event.respondWith( resp )
})


