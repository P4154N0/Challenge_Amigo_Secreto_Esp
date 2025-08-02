# Challenge_Amigo_Secreto
"Challenge Amigo Secreto (Alura Latam &amp; Oracle ONE) | Implementación front-end del juego 'Amigo Secreto' (Amigo Invisible). Desarrollada como desafío de Alura Latam y Oracle ONE, esta aplicación gestiona participantes y realiza un sorteo aleatorio para determinar parejas justas, asegurando que nadie se regale a sí mismo."


# 🎁 Amigo Secreto App

![Banner de la aplicación Amigo Secreto](assets/amigo-secreto.png)

Una aplicación web interactiva y divertida para organizar sorteos de Amigo Secreto (Secret Santa), desarrollada como parte del programa [Oracle Next Education (ONE) - Alura Latam](https://www.aluracursos.com/programas/oracle-next-education). Esta herramienta garantiza sorteos justos y evita el auto-regalo, haciendo que la tradición del Amigo Secreto sea más sencilla y emocionante.

## ✨ Características Principales

* **Gestión de Participantes:** Añade nombres de amigos a la lista de participantes de forma sencilla.
* **Validación Inteligente:**
    * Previene la adición de nombres vacíos.
    * Detecta y prohíbe nombres duplicados (insensible a mayúsculas y minúsculas).
* **Experiencia de Usuario Mejorada:**
    * Añade amigos tanto haciendo clic en el botón "Añadir" como presionando la tecla "Enter" en el campo de entrada.
    * El campo de entrada se limpia y el foco se restablece automáticamente después de cada adición.
* **Sorteo Justo y Aleatorio:**
    * Requiere un mínimo de 3 participantes para un sorteo válido, evitando auto-regalos.
    * Utiliza el algoritmo **Fisher-Yates Shuffle** para garantizar una distribución de parejas completamente aleatoria y justa.
    * Valida que ningún participante se regale a sí mismo en el resultado final.
* **Visualización Clara de Resultados:** Muestra claramente quién regala a quién.
* **Funcionalidad de Reinicio:** Permite borrar la lista y los resultados para iniciar un nuevo sorteo.
* **Diseño Responsivo:** Adaptado para funcionar y verse bien en diferentes tamaños de pantalla (escritorio, tabletas y móviles).

## 🚀 Tecnologías Utilizadas

* **HTML5:** Estructura semántica de la aplicación.
* **CSS3:** Estilos modernos y responsivos, incluyendo variables CSS para una fácil personalización de la paleta de colores.
* **JavaScript (ES6+):** Lógica interactiva del sorteo, validaciones, manipulación del DOM y gestión de eventos.

## ⚙️ Cómo Usar

1.  **Clonar el repositorio:**
    ```bash
    git clone [https://github.com/tu-usuario/nombre-del-repositorio.git](https://github.com/tu-usuario/nombre-del-repositorio.git)
    ```
2.  **Navegar al directorio del proyecto:**
    ```bash
    cd nombre-del-repositorio
    ```
3.  **Abrir `index.html`:** Simplemente abre el archivo `index.html` en tu navegador web preferido.

### Pasos en la aplicación:

1.  **Añadir Amigos:** Escribe los nombres de los participantes en el campo de texto y haz clic en "Añadir" o presiona "Enter". La lista de amigos se actualizará en tiempo real.
2.  **Sortear Amigo:** Una vez que tengas al menos 3 amigos en la lista, haz clic en el botón "Sortear amigo". La aplicación mostrará las parejas asignadas. Si por casualidad ocurre un auto-regalo (muy raro con más de 3 personas y el algoritmo Fisher-Yates), se te pedirá que reintentes el sorteo.
3.  **Reiniciar:** Si deseas comenzar un nuevo sorteo o corregir la lista de amigos, haz clic en el botón "Reiniciar" para limpiar todo.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Si tienes sugerencias, mejoras o encuentras algún error, no dudes en:

1.  Hacer un `fork` del repositorio.
2.  Crear una nueva rama (`git checkout -b feature/nueva-caracteristica` o `bugfix/nombre-del-bug`).
3.  Realizar tus cambios.
4.  Crear un `Pull Request` detallado.

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo `LICENSE` para más detalles.

## 📞 Contacto

Desarrollado con ❤️ por **P4154N0** ([Héctor Pablo Graff](https://www.linkedin.com/in/hector-pablo-graff/)).

¡Espero que disfrutes organizando tu Amigo Secreto con esta aplicación!
