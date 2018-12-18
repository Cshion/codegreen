Feature: Eliminar tareas

    Scenario: Eliminar una tarea a la lista
        Given el usuario esta en la vista de añadir tareas
        When el usuario crea una tarea de color "Green" y descripcion "Esto es una descripcion de ejemplo"
        When el usuario elimina la tarea "Esto es una descripcion de ejemplo" de la seccion "Green"
        Then la tarea "Esto es una descripcion de ejemplo" no se muestra en la tabla en la seccion "Green"