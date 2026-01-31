# Wine API

RESTful API for managing a wine inventory, built with Node.js, Express, MongoDB, and Mongoose.

## Features
- CRUD operations for wine inventory (GET, POST, PATCH, DELETE)
- Stores wine name, type, year, origin, and entry date
- Automated tests with Mocha, Chai, and Mochawesome

## Requirements
- Node.js
- MongoDB

## Setup
1. Clone the repository:
  ```sh
  git clone repo
  cd wine-api
  ```
2. Install dependencies:
  ```sh
  npm install
  ```
3. Create a `.env` file with your MongoDB connection string:
  ```env
  DATABASE_URL=mongodb://localhost:27017/wine-inventory
  PORT=3000
  ```
4. Start the server:
  ```sh
  npm start
  ```

## API Endpoints

### Inventory
- `GET /inventory` — List all wines
- `GET /inventory/:id` — Get a wine by ID
- `POST /inventory` — Add a new wine
- `PATCH /inventory/:id` — Update a wine by ID
- `DELETE /inventory/:id` — Delete a wine by ID

#### Wine Object Schema
```
{
  name: String,         // Name of the wine (required)
  wine: String,         // Type (e.g., red/white) (required)
  year: Number,         // Year of production (required)
  origine: String,      // City or place of production (required)
  inventoryDate: Date   // Auto entry date (default: now)
}
```

## Testing
Run all tests and generate a Mochawesome report:
```sh
npm test
```
The report will be available in the `mochawesome-report/` directory.

## Future Improvements
- Add support for images, price, and bottle quantity (ml)


