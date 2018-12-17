Feature: Añadir tareas

    Scenario Outline: Añadir una tarea a la lista
        Given el usuario esta en la vista de añadir tareas
        When el usuario crea una tarea de tipo "<tipo>" y descripcion "<descripcion>"
        Then la tarea "<descripcion>" se muestra en la tabla en la seccion "<tipo>"

        Examples:
            | tipo   | descripcion                           |
            | Green  | Esta es una tarea verde de ejemplo    |
            | Yellow | Esta es una tarea amarilla de ejemplo |
            | Red    | Esta es una tarea roja de ejemplo     |