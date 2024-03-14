/**
 * @swagger
 * /libros:
 *  get:
 *    summary: Obtener todos los libros
 *    security:
 *      - bearerAuth: []
 *    responses:
 *      200:
 *        description: Lista de libros
 *
 */

/**
 * @swagger
 * /libros/{id}:
 *   get:
 *     summary: Obtener un libro por ID
 *     security:
 *      - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del libro
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Detalles del libro
 */

/**
 * @swagger
 * /libros:
 *   post:
 *     summary: Crear un nuevo libro
 *     security:
 *      - bearerAuth: []
 *     consummes:
 *       - application/json:
 *     parameters:
 *       - in: body
 *         required: true
 *         name: libros
 *         schema:
 *           type: object
 *           properties:
 *             titulo:
 *               type: string
 *               example: "Nombre del libro"
 *             autor:
 *               type: string
 *               example: "Nombre del autor"
 *             año:
 *               type: number
 *               example: 2024
 *     responses:
 *       201:
 *         description: Libro creado con exito
 */

/**
 * @swagger
 * /libros/{id}:
 *   put:
 *     summary: Actualizar un libro por ID
 *     security:
 *      - bearerAuth: []
 *     consummes:
 *       - application/json:
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del libro actualizar
 *         schema:
 *           type: string
 *       - in: body
 *         required: true
 *         name: libros
 *         schema:
 *           type: object
 *           properties:
 *             titulo:
 *               type: string
 *               example: 'Nombre del titulo'
 *             autor:
 *               type: string
 *               example: 'Nombre del autor'
 *             año:
 *               type: number
 *               example: 2025
 *     responses:
 *       200:
 *         description: Libro actualizado con exito
 */

/**
 * @swagger
 * /libros/{id}:
 *   delete:
 *     summary: Eliminar libro por ID
 *     security:
 *      - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del libro
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Libro eliminado con exito
 *       404:
 *         description: Error al eliminar libro
 */

/**
 * @swagger
 * /users:
 *   post:
 *     summary: Crear un nuevo usuario
 *     parameters:
 *       - in: body
 *         required: true
 *         name: user
 *         schema:
 *           type: object
 *           properties:
 *             email:
 *               type: string
 *               example: "bere@gmail.com"
 *             password:
 *               type: string
 *               example: "qwerty123"
 *     responses:
 *       201:
 *         description: Usuario creado con exito
 */

/**
 * @swagger
 * /get-token:
 *   post:
 *     summary: Obtener un toquen de autenticacion
 *     parameters:
 *       - in: body
 *         required: true
 *         name: token
 *         schema:
 *           type: object
 *           properties:
 *             email:
 *               type: string
 *               example: "bere@gmail.com"
 *             api_key:
 *               type: string
 *               example: "968SmdcTJHMl9ZH"
 *     responses:
 *       201:
 *         description: Usuario guardado con exito
 */
