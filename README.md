# CRUD de Usuarios (NestJS & Angular)

Este proyecto implementa un **CRUD (Crear, Leer, Actualizar, Eliminar)** completo para la gestión de usuarios, utilizando una arquitectura de **Backend** con **NestJS**, **TypeORM** y **PostgreSQL**, y un **Frontend** desarrollado con **Angular**.

---

##  Prerrequisitos

Asegúrate de tener instalado lo siguiente en tu sistema:

* **Node.js**: Versión recomendada **18** o superior.
* **npm**: Administrador de paquetes de Node.js (incluido con Node.js).
* **Angular CLI**:
    ```bash
    npm install -g @angular/cli
    ```
* **PostgreSQL**: Servidor de base de datos relacional.

---

##  Instalación y Ejecución

El proyecto está dividido en dos directorios principales: `evaluacion-backend` (NestJS) y `evaluacion-frontend` (Angular).

### I. Configuración del Backend (NestJS)

1.  **Clonar el repositorio:**
    ```bash
    git clone [https://github.com/IDGS-805-22000980/Evaluaci-n-T-cnica.git](https://github.com/IDGS-805-22000980/Evaluaci-n-T-cnica.git)
    cd Evaluaci-n-T-cnica
    ```

2.  **Configuración de la Base de Datos (PostgreSQL):**
    * Asegúrate de que tu servidor de PostgreSQL esté en ejecución.
    * Crea una base de datos con el nombre: `usuarios_db`.
    * Crea un archivo llamado **`.env`** en la raíz del directorio `evaluacion-backend` y configura las variables de entorno para la conexión:

    ```env
    # .env - Variables de Conexión a PostgreSQL
    DB_TYPE=postgres
    DB_HOST=localhost
    DB_PORT=5432
    DB_USER=postgres
    DB_PASSWORD="TU_CONTRASEÑA" 
    DB_NAME=usuarios_db
    ```
    ***Nota:*** *Asegúrate de reemplazar `"TU_CONTRASEÑA"` con tu contraseña de PostgreSQL. Ajusta `DB_USER` si utilizas un usuario diferente a `postgres`.*

3.  **Instalar dependencias e iniciar el servidor:**
    ```bash
    cd evaluacion-backend
    npm install
    npm run start:dev
    ```
    El servidor backend se ejecutará en **`http://localhost:3000`**.

---

### II. Configuración del Frontend (Angular)

1.  **Navegar al directorio del frontend e instalar dependencias:**
    ```bash
    cd ../evaluacion-frontend
    npm install
    ```

2.  **Ejecutar la aplicación:**
    ```bash
    ng serve -o
    ```
    Este comando iniciará el servidor de desarrollo de Angular y abrirá la aplicación en **`http://localhost:4200`** en tu navegador por defecto. El Frontend se conectará automáticamente al Backend que se ejecuta en el puerto 3000.
