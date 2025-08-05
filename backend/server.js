const express = require('express');
const app = express();
const PORT = 3001;

app.use(express.json()); // Middleware para recibir JSON

app.get('/api/productos', (req, res) => {
  const productos = [
    {
      Id_producto: 1,
      Nombre_Producto: 'Portatil',
      Descripcion: 'Portatil de 14 pulgadas con 8GB de RAM',
      Precio: 850.50,
      Stock: 50,
      Id_Categoria: 1
    },
    {
      Id_producto: 2,
      Nombre_Producto: 'Boligrafo',
      Descripcion: 'Boligrafo de tinta negra, punta fina',
      Precio: 1.25,
      Stock: 200,
      Id_Categoria: 2
    },
    {
      Id_producto: 3,
      Nombre_Producto: 'Cuaderno',
      Descripcion: 'Cuaderno de 100 hojas, tamaño carta',
      Precio: 3.00,
      Stock: 150,
      Id_Categoria: 1
    },
    {
      Id_producto: 4,
      Nombre_Producto: 'Resma de papel',
      Descripcion: 'Caja de 500 hojas de papel bond',
      Precio: 15.75,
      Stock: 75,
      Id_Categoria: 2
    },
    {
      Id_producto: 5,
      Nombre_Producto: 'Escoba',
      Descripcion: 'Escoba de cerdas sintéticas',
      Precio: 8.99,
      Stock: 30,
      Id_Categoria: 3
    }
  ];

  res.json(productos);
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
