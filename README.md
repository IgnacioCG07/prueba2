# Plataforma de Servicios Profesionales de Ñuble

Este es mi proyecto para la Evaluación 2. Es una página web para buscar y contactar a profesionales que ofrecen sus servicios en la Región de Ñuble.

## Lo que hace la página
- Tiene distintas pestañas para navegar (Inicio, Servicios, Favoritos, Contacto).
- Puedes ver un catálogo de los servicios disponibles.
- Puedes filtrar por el nombre del servicio o elegir una categoría.
- Puedes ver el detalle completo de cada servicio.
- Puedes marcar o desmarcar servicios como favoritos haciendo clic en la estrellita. Los favoritos no se borran al recargar la página.
- El catálogo se carga usando Fetch simulando una base de datos.
- Hay un formulario de contacto que funciona con validaciones básicas.

## Cómo hacerla funcionar
1. Primero instala las cosas necesarias usando:
   `npm install`
2. Luego levanta la página con:
   `npm run dev`
3. Abre el enlace local que te sale en la consola.

## Tecnologías usadas
- Vue.js 3
- Vue Router para las pestañas
- localStorage para guardar los favoritos
- Fetch API para cargar el JSON
