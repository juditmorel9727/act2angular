export default `<!DOCTYPE html><html lang="en" data-beasties-container><head><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <meta charset="utf-8">
  <title>TutorialAngularjudit</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="Tutorial Angular por Judit">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
  <style>@font-face{font-family:'Inter';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v18/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa2JL7SUc.woff2) format('woff2');unicode-range:U+0460-052F, U+1C80-1C8A, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;}@font-face{font-family:'Inter';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v18/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa0ZL7SUc.woff2) format('woff2');unicode-range:U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;}@font-face{font-family:'Inter';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v18/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa2ZL7SUc.woff2) format('woff2');unicode-range:U+1F00-1FFF;}@font-face{font-family:'Inter';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v18/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa1pL7SUc.woff2) format('woff2');unicode-range:U+0370-0377, U+037A-037F, U+0384-038A, U+038C, U+038E-03A1, U+03A3-03FF;}@font-face{font-family:'Inter';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v18/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa2pL7SUc.woff2) format('woff2');unicode-range:U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;}@font-face{font-family:'Inter';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v18/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa25L7SUc.woff2) format('woff2');unicode-range:U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;}@font-face{font-family:'Inter';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v18/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa1ZL7.woff2) format('woff2');unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;}@font-face{font-family:'Inter';font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v18/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa2JL7SUc.woff2) format('woff2');unicode-range:U+0460-052F, U+1C80-1C8A, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;}@font-face{font-family:'Inter';font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v18/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa0ZL7SUc.woff2) format('woff2');unicode-range:U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;}@font-face{font-family:'Inter';font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v18/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa2ZL7SUc.woff2) format('woff2');unicode-range:U+1F00-1FFF;}@font-face{font-family:'Inter';font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v18/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa1pL7SUc.woff2) format('woff2');unicode-range:U+0370-0377, U+037A-037F, U+0384-038A, U+038C, U+038E-03A1, U+03A3-03FF;}@font-face{font-family:'Inter';font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v18/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa2pL7SUc.woff2) format('woff2');unicode-range:U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;}@font-face{font-family:'Inter';font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v18/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa25L7SUc.woff2) format('woff2');unicode-range:U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;}@font-face{font-family:'Inter';font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v18/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa1ZL7.woff2) format('woff2');unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;}</style>
<style>:root{--primary-blue: #007bff;--white: #ffffff;--gray-light: #f8f9fa;--gray-dark: #212529}body{font-family:Inter,Arial,sans-serif;background-color:var(--gray-light);color:var(--gray-dark);margin:0;padding:0}h1,h2{color:var(--primary-blue);font-weight:700}a{color:var(--primary-blue);text-decoration:none}a:hover{text-decoration:underline}
</style><link rel="stylesheet" href="styles-ZUBEAW75.css" media="print" onload="this.media='all'"><noscript><link rel="stylesheet" href="styles-ZUBEAW75.css"></noscript><style ng-app-id="ng">.container[_ngcontent-ng-c924962079]{max-width:900px;margin:0 auto;padding:1rem}header[_ngcontent-ng-c924962079]{text-align:center;margin-bottom:2rem}header[_ngcontent-ng-c924962079]   h1[_ngcontent-ng-c924962079]{color:var(--primary-blue);font-size:2.5rem}header[_ngcontent-ng-c924962079]   p[_ngcontent-ng-c924962079]{color:var(--gray-dark);font-size:1.25rem}nav[_ngcontent-ng-c924962079]   ul[_ngcontent-ng-c924962079]{display:flex;justify-content:center;list-style:none;padding:0;margin:0 0 2rem}nav[_ngcontent-ng-c924962079]   li[_ngcontent-ng-c924962079]{margin:0 1rem}nav[_ngcontent-ng-c924962079]   a[_ngcontent-ng-c924962079]{color:var(--primary-blue);font-weight:700;font-size:1.1rem}nav[_ngcontent-ng-c924962079]   a[_ngcontent-ng-c924962079]:hover{text-decoration:underline}</style><style ng-app-id="ng">body[_ngcontent-ng-c924962079]{font-family:Arial,sans-serif;margin:0;padding:0;line-height:1.6;background-color:#f9f9f9;color:#333}header[_ngcontent-ng-c924962079]{background-color:#036;color:#fff;padding:.5rem 0;text-align:center;position:sticky;top:0;z-index:10;box-shadow:0 2px 4px #0000001a}nav[_ngcontent-ng-c924962079]{display:flex;justify-content:center;gap:1rem;margin-top:.5rem}nav[_ngcontent-ng-c924962079]   a[_ngcontent-ng-c924962079]{color:#fff;text-decoration:none;font-size:1rem;padding:.5rem 1rem;background-color:#00509e;border-radius:5px;transition:background-color .3s}nav[_ngcontent-ng-c924962079]   a[_ngcontent-ng-c924962079]:hover{background-color:#0074d9}section[_ngcontent-ng-c924962079]{padding:2rem;margin:2rem auto;max-width:800px;background:#fff;border-radius:10px;box-shadow:0 2px 4px #0000001a}section[_ngcontent-ng-c924962079]   h1[_ngcontent-ng-c924962079]{color:#036;text-align:center;margin-bottom:1.5rem}section[_ngcontent-ng-c924962079]   h2[_ngcontent-ng-c924962079]{color:#036}code[_ngcontent-ng-c924962079]{display:block;background:#f4f4f4;padding:.5rem;margin:1rem 0;border-left:4px solid #003366;overflow-x:auto}footer[_ngcontent-ng-c924962079]{text-align:center;padding:.5rem;background:#036;color:#fff;bottom:0;width:100%}</style></head>
<body><!--nghm-->
  <app-root _nghost-ng-c924962079 ng-version="19.0.5" ngh="0" ng-server-context="ssg"><html _ngcontent-ng-c924962079 lang="es"><head _ngcontent-ng-c924962079><meta _ngcontent-ng-c924962079 charset="UTF-8"><meta _ngcontent-ng-c924962079 name="viewport" content="width=device-width, initial-scale=1.0"><title _ngcontent-ng-c924962079>Tutorial Framework</title></head><body _ngcontent-ng-c924962079><header _ngcontent-ng-c924962079><nav _ngcontent-ng-c924962079><a _ngcontent-ng-c924962079 href="#justificacion">Justificación</a><a _ngcontent-ng-c924962079 href="#instalacion">Instalación</a><a _ngcontent-ng-c924962079 href="#primeros_pasos">Primeros Pasos</a><a _ngcontent-ng-c924962079 href="#utilizacion">Utilización</a><a _ngcontent-ng-c924962079 href="#conclusiones">Conclusiones</a></nav></header><section _ngcontent-ng-c924962079 id="justificacion"><h1 _ngcontent-ng-c924962079>Tutorial de Framework</h1><h2 _ngcontent-ng-c924962079>Justificación</h2><p _ngcontent-ng-c924962079>Angular es un framework de JavaScript utilizado para crear aplicaciones dinámicas y de alta calidad.</p><p _ngcontent-ng-c924962079>Se destaca por su capacidad de manejar interfaces complejas de usuario y su compatibilidad con aplicaciones de una sola página (SPA).</p><p _ngcontent-ng-c924962079><strong _ngcontent-ng-c924962079>Aplicaciones comunes:</strong></p><ul _ngcontent-ng-c924962079><li _ngcontent-ng-c924962079>Desarrollo de aplicaciones empresariales.</li><li _ngcontent-ng-c924962079>Aplicaciones de escritorio progresivas (PWA).</li><li _ngcontent-ng-c924962079>Paneles de control interactivos.</li></ul><p _ngcontent-ng-c924962079><strong _ngcontent-ng-c924962079>Prerrequisitos necesarios:</strong></p><ul _ngcontent-ng-c924962079><li _ngcontent-ng-c924962079>Conocimiento básico de JavaScript, HTML y CSS.</li><li _ngcontent-ng-c924962079>Node.js y npm instalados en el sistema.</li><li _ngcontent-ng-c924962079>Editor de texto recomendado: Visual Studio Code.</li></ul></section><section _ngcontent-ng-c924962079 id="instalacion"><h2 _ngcontent-ng-c924962079>Instalación</h2><p _ngcontent-ng-c924962079><strong _ngcontent-ng-c924962079>Windows:</strong></p><ol _ngcontent-ng-c924962079><li _ngcontent-ng-c924962079>Descargar e instalar Node.js desde su <a _ngcontent-ng-c924962079 href="https://nodejs.org" target="_blank">página oficial</a>.</li><li _ngcontent-ng-c924962079>Verificar instalación:</li><code _ngcontent-ng-c924962079> node -v npm -v </code><li _ngcontent-ng-c924962079>Instalar Angular CLI:</li><code _ngcontent-ng-c924962079> npm install -g @angular/cli </code></ol><p _ngcontent-ng-c924962079><strong _ngcontent-ng-c924962079>Linux (WSL):</strong></p><ol _ngcontent-ng-c924962079><li _ngcontent-ng-c924962079>Instalar Node.js utilizando nvm (Node Version Manager):</li><code _ngcontent-ng-c924962079> curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash nvm install --lts </code><li _ngcontent-ng-c924962079>Instalar Angular CLI:</li><code _ngcontent-ng-c924962079> npm install -g @angular/cli </code></ol><p _ngcontent-ng-c924962079><strong _ngcontent-ng-c924962079>MacOS:</strong> Sigue pasos similares a Linux utilizando brew para instalar Node.js.</p><p _ngcontent-ng-c924962079><strong _ngcontent-ng-c924962079>Comprobación de instalación:</strong></p><p _ngcontent-ng-c924962079> Utiliza el siguiente comando para comprobar si ya tienes instalado Angular</p><code _ngcontent-ng-c924962079> ng version </code><p _ngcontent-ng-c924962079>Si todo ha ido bien, deberías ver algo como esto:</p><img _ngcontent-ng-c924962079 src="assets/img/1-confirmacionangular.png" alt="Captura de 1-confirmacionangular"><p _ngcontent-ng-c924962079><strong _ngcontent-ng-c924962079>Crea tu primer proyecto:</strong></p><p _ngcontent-ng-c924962079>Utiliza el siguiente comando para crear tu primer proyecto angular "ng new" seguido del nombre del proyecto, por ejemplo, aquí lo llamaremos "proyecto-tutorial1</p><code _ngcontent-ng-c924962079> ng new proyecto-tutorial1 </code><p _ngcontent-ng-c924962079>Se creará el Proyecto, escoge CSS (pulsando ENTER), continúa pulsando "y", "y". En la siguiente captura de mostramos un ejemplo</p><img _ngcontent-ng-c924962079 src="assets/img/2-nuevoproyectoangular.png" alt="Captura de 2-nuevoproyectoangular"><img _ngcontent-ng-c924962079 src="assets/img/3-confirmacionproyectocreado.png" alt="Captura de 3-confirmacionproyectocreado"><p _ngcontent-ng-c924962079>Una vez creado el proyecto, ahora comprobaremos que esté funcionando y para ello necesitamos</p><ul _ngcontent-ng-c924962079><li _ngcontent-ng-c924962079>1- Acceder al proyecto, con el comando "cd"</li><li _ngcontent-ng-c924962079>2- Una vez dentro del proyecto, poner en marcha el servidor en el comando "ng serve"</li></ul><p _ngcontent-ng-c924962079>A continuación vemos un ejemplo con nuestro proyecto "proyecto-tutorial1" creado</p><code _ngcontent-ng-c924962079> cd proyecto-tutorial1 ng serve </code><img _ngcontent-ng-c924962079 src="assets/img/4-ponerservidorenmarcha.png" alt="Captura de 4-ponerservidorenmarcha"><p _ngcontent-ng-c924962079>Verifica que la aplicación esté disponible en <a _ngcontent-ng-c924962079 href="http://localhost:4200/" target="_blank">http://localhost:4200/</a>.</p><p _ngcontent-ng-c924962079>Deberías ver esto:</p><img _ngcontent-ng-c924962079 src="assets/img/5-helloproyectoangular.png" alt="Captura de 5-helloproyectoangular"></section><section _ngcontent-ng-c924962079 id="primeros_pasos"><h2 _ngcontent-ng-c924962079>Primeros Pasos</h2><p _ngcontent-ng-c924962079>Para crear un proyecto básico, utiliza el comando:</p><code _ngcontent-ng-c924962079> ng new hola-mundo </code><p _ngcontent-ng-c924962079>Esto generará una estructura de archivos que incluye:</p><ul _ngcontent-ng-c924962079><li _ngcontent-ng-c924962079><strong _ngcontent-ng-c924962079>app.component.html:</strong> Archivo principal donde se define la vista.</li><li _ngcontent-ng-c924962079><strong _ngcontent-ng-c924962079>app.module.ts:</strong> Archivo de configuración del módulo principal.</li></ul><p _ngcontent-ng-c924962079>Ejemplo de app.component.html:</p><code _ngcontent-ng-c924962079> &lt;h1&gt;Hola Mundo&lt;/h1&gt; </code><p _ngcontent-ng-c924962079>Abre el navegador en <a _ngcontent-ng-c924962079 href="http://localhost:4200/" target="_blank">http://localhost:4200/</a> para ver el mensaje "Hola Mundo".</p><p _ngcontent-ng-c924962079>Deberías ver esto:</p><img _ngcontent-ng-c924962079 src="img/primeros_pasos.png" alt="Captura de Primeros Pasos"></section><section _ngcontent-ng-c924962079 id="utilizacion"><h2 _ngcontent-ng-c924962079>Utilización del Framework</h2><p _ngcontent-ng-c924962079><strong _ngcontent-ng-c924962079>Crear un nuevo componente:</strong></p><code _ngcontent-ng-c924962079> ng generate component about </code><p _ngcontent-ng-c924962079>Esto generará un componente "about" que se puede utilizar para mostrar información adicional.</p><p _ngcontent-ng-c924962079><strong _ngcontent-ng-c924962079>Configurar enrutamiento:</strong></p><code _ngcontent-ng-c924962079> ng generate module app-routing --flat --module=app </code><p _ngcontent-ng-c924962079>Añade rutas en el archivo app-routing.module.ts:</p><code _ngcontent-ng-c924962079> const routes: Routes = [ { path: 'about', component: AboutComponent } ]; </code><p _ngcontent-ng-c924962079><strong _ngcontent-ng-c924962079>Agregar Angular Material:</strong></p><code _ngcontent-ng-c924962079> ng add @angular/material </code><p _ngcontent-ng-c924962079>Ejemplo de barra de navegación:</p><code _ngcontent-ng-c924962079> &lt;mat-toolbar color="primary"&gt; &lt;span&gt;Mi Aplicación&lt;/span&gt; &lt;/mat-toolbar&gt; </code><p _ngcontent-ng-c924962079>Deberías ver esto:</p><img _ngcontent-ng-c924962079 src="img/utilizacion.png" alt="Captura de Utilización"></section><section _ngcontent-ng-c924962079 id="conclusiones"><h2 _ngcontent-ng-c924962079>Conclusiones</h2><p _ngcontent-ng-c924962079>En este tutorial, aprendiste:</p><ul _ngcontent-ng-c924962079><li _ngcontent-ng-c924962079>Instalación del framework en diferentes sistemas.</li><li _ngcontent-ng-c924962079>Creación y configuración de componentes.</li><li _ngcontent-ng-c924962079>Manejo básico de rutas y estilos.</li></ul><p _ngcontent-ng-c924962079><strong _ngcontent-ng-c924962079>Reflexión:</strong> Angular es una excelente opción para proyectos escalables debido a su robustez y flexibilidad. Se recomienda aprender sobre servicios y manejo de datos con RxJS para profundizar en su uso.</p><p _ngcontent-ng-c924962079>¡Sigue explorando Angular para dominar su potencial!</p><p _ngcontent-ng-c924962079>Deberías ver esto:</p><img _ngcontent-ng-c924962079 src="img/conclusiones.png" alt="Captura de Conclusiones"></section><footer _ngcontent-ng-c924962079><p _ngcontent-ng-c924962079>Tutorial creado por Judit Johana Morel Arce</p></footer></body></html></app-root>
<script src="polyfills-FFHMD2TL.js" type="module"></script><script src="main-J2T7AHJU.js" type="module"></script>

<script id="ng-state" type="application/json">{"__nghData__":[{}]}</script></body></html>`;