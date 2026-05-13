import express from "express";
import { fileURLToPath } from "node:url";
import { resolve } from "node:path";

const app = express();
const PORT = 3000;
const currentFilePath = fileURLToPath(import.meta.url);

app.use(express.json());

// Store todos here
const todos = [];

// Add Todo
app.post("/todos", (req, res) => {
  // Write your code here
});

// Get All Todos
app.get("/todos", (req, res) => {
  // Write your code here
});

// Get Todo By ID
app.get("/todos/:id", (req, res) => {
  // Write your code here
});

// Delete Todo
app.delete("/todos/:id", (req, res) => {
  // Write your code here
});

if (process.argv[1] && resolve(process.argv[1]) === currentFilePath) {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

export default app;