import assert from "node:assert/strict";
import test from "node:test";
import request from "supertest";

import app from "./index.js";

test("POST /todos creates a todo", async () => {
  const response = await request(app)
    .post("/todos")
    .send({ title: "Learn Express" });

  assert.equal(response.status, 201);

  const body = response.body;
  assert.equal(body.title, "Learn Express");
  assert.ok(body.id);
});

test("GET /todos returns all todos", async () => {
  const response = await request(app).get("/todos");

  assert.equal(response.status, 200);

  const body = response.body;
  assert.ok(Array.isArray(body));
});

test("GET /todos/:id returns a todo by id", async () => {
  const created = await request(app)
    .post("/todos")
    .send({ title: "Review tests" });

  assert.equal(created.status, 201);

  const createdBody = created.body;
  const response = await request(app).get(`/todos/${createdBody.id}`);

  assert.equal(response.status, 200);

  const body = response.body;
  assert.equal(body.id, createdBody.id);
});

test("DELETE /todos/:id removes a todo", async () => {
  const created = await request(app)
    .post("/todos")
    .send({ title: "Delete me" });

  assert.equal(created.status, 201);

  const createdBody = created.body;
  const response = await request(app).delete(`/todos/${createdBody.id}`);

  assert.equal(response.status, 200);

  const body = response.body;
  assert.equal(body.id, createdBody.id);
});