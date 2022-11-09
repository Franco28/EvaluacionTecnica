# DETALLES - EVALUACION TECNICA

(.gitignore -> Lo modifique para que se suban archivos importantes lo unico que deje afuera son los node_modules)

## Front - REACT (JavaScript):

    * React Router (https://reactrouter.com/en/main)
    * AXIOS (https://axios-http.com/docs/intro)
    * React Bootstrap (https://react-bootstrap.github.io/getting-started/introduction)

- Utilice React Router para poder crear la ruta de /agregar, asi poder crear un vehiculo nuevo.

- Utilice AXIOS, para poder hacer fetch del API de Laravel (asi poder mostrar en la tabla), tambien para enviar el post cuando se da de Alta o Baja, o se crea un vehiculo nuevo.

- Utilice React Bootstrap para poder generar el estilo visual de Bootstrap y utilizar los componentes de Bootstrap.

- Utilice el HOOK useState para poder modificar los estados de los componentes en la Tabla.

- Utilice el HOOK useEffect para poder llevar a cabo los cambios en los botones y en la tabla a la hora de dar de baja, de alta y eliminar.

### Comandos usados en React

    * npx create-react-app gestionvehiculos_front
    * npm install react-router-dom
    * npm install axios
    * npm install react-bootstrap bootstrap
    * npm start
    * npm run build

## Back - LARAVEL (PHP):

- Illuminate\Http\Request: Lo utilice para poder obtener los datos del front mediante las solicitudes

- routes (api.php): Cree las url para poder hacer el post, y obtener la lista de vehiculos.

- database (factories, migrations, seeders): Cree la tabla para la base de datos de los vehiculos, con sus seeders, migrations (2022_11_09_114713_crear_vehiculos) y factories (VehiculosFactory).

- app/Models (Vehiculos.php): Cree mi modelo de la tabla Vehiculos.

- app/Http/Controllers/Api (VehiculosController.php): Cree un controlador para manipular las funciones del Vehiculo, como eliminar, dar de baja y alta, y agregar.

### Comandos usados en Laravel

    * composer create-project laravel/laravel gestion-vehiculos
    * php artisan make:model
    * php artisan make:migration
    * php artisan migrate

## Repositorio GITHUB

- Plataforma GitHub (https://github.com/) utilizado para subir el proyecto

### Comandos usados en GIT

    * git init
    * git add *
    * git commit -m "BOOMP Evaluacion Tecnica"
    * git branch -M main
    * git remote add origin https://github.com/Franco28/EvaluacionTecnica.git
    * git push -u origin main
