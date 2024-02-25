Apuntes de funcionamiento js

Menu deplegable
1. **`function botonMenu() {`**: Aquí se define una función llamada **`botonMenu`** que se activará cuando se haga clic en el botón de menú.
2. **`var btn = document.getElementById("myopcion");`**: Esta línea selecciona el elemento HTML con el ID "myDropdown" y lo guarda en la variable **`btn`**. Esto permite acceder al menú desplegable desde el código JavaScript.
3. **`btn.classList.toggle("show");`**: Utilizando la variable **`btn`**, se accede a la lista de clases del elemento y se utiliza el método **`toggle()`** para agregar o quitar la clase "show". Esta clase se utiliza en el CSS para mostrar u ocultar el menú desplegable.


Menu acordion

1. **DOMContentLoaded Event Listener**: El código comienza con un event listener para el evento **`DOMContentLoaded`**, que se dispara cuando el HTML ha sido completamente cargado y analizado, sin esperar a que se carguen todos los recursos externos (como imágenes).
2. **Selección de Elementos**: Dentro del event listener, se seleccionan todos los elementos con la clase **`.temas`** y se asignan a la variable **`temasItems`**.
El uso de .temas > li asegura que solo se seleccionen los elementos <li> directamente dentro de los elementos con la clase .temas, y no los elementos descendientes más profundos. Entonces, al utilizar .temas > li, se asegura de que los event listeners se apliquen solo a los elementos de la lista dentro de cada .temas.
3. **Recorrido de Elementos**: Se recorren todos los elementos **`.temas`** utilizando **`forEach`**.
4. **Event Listener para Cada Elemento**: Para cada elemento **`.temas`**, se añade un event listener que se activa cuando se hace clic en ese elemento.
5. **Cierre de Elementos Activos**: Dentro del event listener de clic, primero se busca el elemento **`.ite`** correspondiente al elemento **`.temas`** que se ha hecho clic, y se asigna a la variable **`subItem`**. Luego, se buscan todos los elementos **`.ite`** activos en la página y se recorren con un **`forEach`**.
6. **Remoción de Clase Active**: Si un elemento **`.ite`** es diferente al **`subItem`** actual y tiene la clase **`active`**, se le quita esa clase, lo que oculta el contenido del subitem.
7. **Apertura o Cierre del Elemento Clicado**: Finalmente, se aplica la clase **`active`** al **`subItem`** correspondiente al elemento **`.temas`** que se ha hecho clic. Si el subitem estaba oculto, ahora se mostrará; si estaba visible, se ocultará.