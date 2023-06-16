const fastify = require('fastify')();
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose
  .connect('mongodb://localhost/codium-baas', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB', err));

// Define your routes and other Fastify configurations here

// Start the server
fastify.listen(3001, (err) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  console.log('Server started on port 3001');
});
