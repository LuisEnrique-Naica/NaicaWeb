
# Componentes y su  manejo

Para el uso de los componentes, es necesario cargar su respectivo JS y añadirlo al respectivo template. Cada uno tiene sus propios pros.

### Select-component

``` html
<select-component 
  newid="identificador"
  newtitle="Select Component" 
  option='{ 
    "option1": { "label": "Option 1", "value":"1" },
    "option2": { "label": "Option 2" ,"value":"2"} 
  }'
></select-component>
 
``` 
Contiene 3 props, `newid` para poder identificar su id, `newtitle` para el titulo del Select y `option` para las opciones que tendra. Este ultimo debera tener un JSON como parametro para poder funcionar. Los dos primeros deben ser string.

``` html
<button-page
  content="Siguiente"
  toUrl="http://www.facebook.com/"
></button-page>
``` 
Contiene 2 props, `content` para el contenido del button y `toUrl` para el direccionamiento que tendra. Se puede agregar rura como `url_for()`


``` html
<link-page
  content="Volver"
  toUrl="http://www.facebook.com/"
></link-page>
``` 
Contiene 2 props, `content` para el contenido del button y `toUrl` para el direccionamiento que tendra. Se puede agregar rura como `url_for()`

``` html

<link-footer
  content="Volver"
  toUrl="http://www.facebook.com/"
></link-footer>

``` 
Contiene 2 props, `content` para el contenido del button y `toUrl` para el direccionamiento que tendra. Se puede agregar rura como `url_for()`

``` html
<button-component
  btntype="whatsapp"
></button-component>
``` 
Contiene 1 prop y solo tiene 3 diferentes opciones. Estos no se pueden cambiar. Las opciones son `whatsapp`, `call` y `date`.


``` html
<button-portafolio
  btntype="aportacion"
></button-portafolio>
``` 
Contiene 1 prop y solo tiene 2 diferentes opciones. Estos no se pueden cambiar. Las opciones son `aportacion` y `contrato`.

``` html
<button-help
  btntpye="help"
></button-help>
``` 
Contiene 1 prop y solo tiene 2 diferentes opciones. Estos no se pueden cambiar. Las opciones son `help` y `alert`.

``` html
<button-faqs
	newcontext="¿Cómo contrato un MoneyBox?"
	subcontext="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
></button-faqs>
``` 
Contiene 2 props, `newcontext` para el titulo de los FAQS  y `subcontext` para el texto que se quiera mostrar para la pregunta.