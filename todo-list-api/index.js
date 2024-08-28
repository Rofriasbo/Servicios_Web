const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json()); // Para manejar solicitudes con JSON

// Simulación de la base de datos en memoria
let tasks = [];
let taskIdCounter = 1;

// Rutas CRUD

// Crear una nueva tarea
app.post('/tasks', (req, res) => {
    const { title, completed = false } = req.body;
    if (!title) {
        return res.status(400).json({ error: 'El título es requerido' });
    }
    const newTask = { id: taskIdCounter++, title, completed, createdAt: new Date() };
    tasks.push(newTask);
    res.status(201).json(newTask);
});

// Leer todas las tareas
app.get('/tasks', (req, res) => {
    res.json(tasks);
});

// Leer una tarea específica por su ID
app.get('/tasks/:id', (req, res) => {
    const task = tasks.find(t => t.id === parseInt(req.params.id));
    if (!task) {
        return res.status(404).json({ error: 'Tarea no encontrada' });
    }
    res.json(task);
});

// Actualizar una tarea existente
app.put('/tasks/:id', (req, res) => {
    const task = tasks.find(t => t.id === parseInt(req.params.id));
    if (!task) {
        return res.status(404).json({ error: 'Tarea no encontrada' });
    }
    const { title, completed } = req.body;
    if (title) task.title = title;
    if (completed !== undefined) task.completed = completed;
    res.json(task);
});

// Eliminar una tarea por su ID
app.delete('/tasks/:id', (req, res) => {
    const taskIndex = tasks.findIndex(t => t.id === parseInt(req.params.id));
    if (taskIndex === -1) {
        return res.status(404).json({ error: 'Tarea no encontrada' });
    }
    tasks.splice(taskIndex, 1);
    res.status(204).send();
});

// Funcionalidad adicional: Calcular estadísticas
app.get('/tasks/stats', (req, res) => {
    const totalTasks = tasks.length;
    const completedTasks = tasks.filter(t => t.completed).length;
    const pendingTasks = totalTasks - completedTasks;

    const mostRecentTask = tasks.reduce((latest, task) =>
        !latest || task.createdAt > latest.createdAt ? task : latest, null);
    const oldestTask = tasks.reduce((oldest, task) =>
        !oldest || task.createdAt < oldest.createdAt ? task : oldest, null);

    res.json({
        totalTasks,
        completedTasks,
        pendingTasks,
        mostRecentTask,
        oldestTask
    });
});

// Manejo de errores
app.use((req, res) => {
    res.status(404).json({ error: 'Ruta no encontrada' });
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
