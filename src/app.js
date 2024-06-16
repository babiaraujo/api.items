const express = require('express');
const connectDB = require('../config/db');
const itemRoutes = require('../src/routes/itemRoutes');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('../config/swagger');

const app = express();
const PORT = 4000;

// Conectar ao banco de dados
connectDB();

// Middleware para parsear JSON
app.use(express.json());

// Rotas de autenticação
// app.use('/api/auth', authRoutes);

// Rotas de itens
app.use('/api', itemRoutes);

// Rota para a documentação Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Swagger UI available at http://localhost:${PORT}/api-docs`);
});
