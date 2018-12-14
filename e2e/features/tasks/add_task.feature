Feature: Añadir tareas

    Scenario Outline: Añadir una tarea a la lista
        Given el usuario esta en el home de la aplicacion
        When el usuario crea una tarea de tipo "<tipo>" y descripcion "<descripcion>"
        Then la tarea se muestra en la tabla en la parte de "green"

        Example:
            | tipo   | descripcion                           |
            | green  | Esta es una tarea verde de ejemplo    |
            | red    | Esta es una tarea rojo de ejemplo     |
            | yellow | Esta es una tarea amarilla de ejemplo |