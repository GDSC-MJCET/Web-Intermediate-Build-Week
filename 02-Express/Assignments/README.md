# Express Todo Assignment

This assignment is a small Express API for managing todos.

The goal is to build a simple REST API that stores todos in memory and lets you create, read, list, and delete them.

## Assignment Goal

You will complete the route handlers in [index.js](index.js) so the API can manage a todo list.

The todos only need to be stored in memory while the server is running. You do not need a database for this assignment.

## What you need to build

- `POST /todos` to create a todo
- `GET /todos` to return all todos
- `GET /todos/:id` to return one todo by id
- `DELETE /todos/:id` to delete a todo by id

## Examples

Use these examples to understand what each route should do.

### `POST /todos`

Request body:

```json
{
   "title": "Buy milk"
}
```

Expected response:

- Status code: `201`
- JSON:

```json
{
   "id": "1",
   "title": "Buy milk"
}
```

### `GET /todos`

Example response:

- Status code: `200`
- JSON:

```json
[
   {
      "id": "1",
      "title": "Buy milk"
   },
   {
      "id": "2",
      "title": "Finish homework"
   }
]
```

### `GET /todos/:id`

Example request:

```text
GET /todos/1
```

Example response:

- Status code: `200`
- JSON:

```json
{
   "id": "1",
   "title": "Buy milk"
}
```

### `DELETE /todos/:id`

Example request:

```text
DELETE /todos/1
```

Example response:

- Status code: `200`
- JSON:

```json
{
   "id": "1",
   "title": "Buy milk"
}
```

## Todo Shape

Each todo should look like this:

- `id`: a unique string or number
- `title`: the todo text

## Test Cases

The test suite checks these cases:

- `POST /todos` creates a todo and expects a status code of `201`
- `GET /todos` returns all todos and expects `200`
- `GET /todos/:id` returns a single todo by id and expects `200`
- `DELETE /todos/:id` removes a todo by id and expects `200`

## Expected Behavior

When you implement the routes, make sure the API behaves like this:

- Creating a todo should return the new todo object in the response.
- Listing todos should return an array of all saved todos.
- Reading a todo by id should return that specific todo.
- Deleting a todo by id should remove it from the list and return the deleted todo.
- The tests check the exact status codes, so keep those responses the same.

## Test file

The automated checks are in [index.test.js](index.test.js).

## How to run the tests

1. Open a terminal in this folder: `02-Express/assignments`
2. Install dependencies:
   `npm install`
3. Run the tests:
   `npm test`

## Notes

- The server listens on port `3000`.
- Stop the server with `Ctrl+C` if you run it manually.
- The tests expect real JSON responses from each endpoint.
- The test suite uses `supertest` so it does not depend on an open port.