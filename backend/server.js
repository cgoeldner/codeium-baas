const mongoose = require("mongoose");
const fastify = require("fastify")({
  logger: true,
});
const cors = require("@fastify/cors");

fastify.register(cors, {
  origin: "*",
  methods: ["GET", "PUT", "POST", "DELETE"],
});

// Replace the connection string and database name with your own
const uri = "mongodb://localhost:27017/baas";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// Define a schema for the data being stored
const dataSchema = new mongoose.Schema({}, { strict: false });

// Create a model based on the schema
const DataModel = mongoose.model("Content", dataSchema);

fastify.post("/content", async (request, reply) => {
  try {
    // Create a new document based on the JSON object from the request body
    const newData = new DataModel(request.body);

    // Save the new document to the database
    const result = await newData.save();

    // Return the ID of the inserted document
    reply.send({ id: result._id });
  } catch (err) {
    // If there was an error, return an error message
    reply.status(500).send({ error: "Error storing data" });
  }
});

// an endpoint to update content by id
fastify.put("/content/:id", async (request, reply) => {
  const id = request.params.id;
  const data = await DataModel.findByIdAndUpdate(id, request.body);
  reply.send(data);
});

// an endpoint that gets content by id
fastify.get("/content/:id", async (request, reply) => {
  const id = request.params.id;
  const data = await DataModel.findById(id);
  reply.send(data);
});

fastify.listen({ port: 3000 }, function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  // Server is now listening on ${address}
});
