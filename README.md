# Project Documentation

## Overview
This project is a RESTful API for a note-taking application developed using Node.js, Express, and MongoDB. The purpose of the project is to provide a backend service for managing and persisting notes with functionalities to create, retrieve, and delete notes.

## File Structure
The project structure is organized as follows:
- `/backend`: Contains the server-side code
  - `/models`: Defines the data models (e.g., `Note` model)
  - `/routes`: Handles different API routes for note operations
  - `/controllers`: Contains business logic for handling requests

## Key Components
### Models
The `Note` model represents a note entity in the database with fields `title` and `content`.

### Routes
- `POST /`: Creates a new note
- `GET /`: Retrieves all notes
- `DELETE /:id`: Deletes a note by ID

### Controllers
Controllers contain the request handling logic for each API endpoint defined in the routes.

## API Endpoints
### POST /
- Creates a new note
- Request Body:

- {
"title": "Note Title",
"content": "Note Content"

}- Response (201 - Created):

{
"_id": "note_id",
"title": "Note Title",
"content": "Note Content"
}


### GET /
- Retrieves all notes
- Response (200 - OK): Array of all notes

### DELETE /:id
- Deletes a note by ID
- Response (200 - OK): Deleted note object

## Running the Project
To run the project locally:
1. Clone the repository from GitHub.
2. Install dependencies using `npm install`.
3. Start the server with `npm start` or `node server.js`.
4. The server will run on `http://localhost:3000`.

## Dependencies
The project uses the following dependencies:
- Express: Web framework for Node.js
- Mongoose: MongoDB object modeling tool
- Body-parser: Parse incoming request bodies in a middleware

## Deployment
For deployment, you can use platforms like Heroku, AWS, or Docker. Make sure to set environment variables for database connection and other configurations.

## Testing
You can test the API endpoints using tools like Postman or writing unit tests using Jest or Mocha.

## Contributors
- John Doe (@johndoe)
- Jane Smith (@janesmith)

## License
This project is licensed under the MIT License - see the LICENSE.md file for details.
