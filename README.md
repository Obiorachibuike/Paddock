# Paddock

This npm package provides a custom wrapper around Axios, a promise-based HTTP client for the browser and Node.js. It simplifies common HTTP requests and includes CRUD (Create, Read, Update, Delete) operations.

## Installation# NPM Package: Axios CRUD Operations

This npm package provides simple CRUD (Create, Read, Update, Delete) operations using Axios for making HTTP requests.

## Installation

You can install the package via npm:

```bash
npm install Paddock
```

## Usage

```javascript
const Paddock = require('Paddock');

// Read data from a URL
Paddock.read('https://example.com/api/data')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });

// Post data to a URL
const newData = { /* your data object */ };
Paddock.post('https://example.com/api/data', newData)
  .then(response => {
    console.log(response.message);
  })
  .catch(error => {
    console.error(error);
  });

// Update data at a URL
const updatedData = { /* your updated data object */ };
Paddock.update('https://example.com/api/data/123', updatedData)
  .then(response => {
    console.log(response.message);
  })
  .catch(error => {
    console.error(error);
  });

// Delete data at a URL
Paddock.erase('https://example.com/api/data/123')
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.error(error);
  });
```

## Methods

### `read(url: string): Promise`

- `url`: The URL from which to read data.

### `post(url: string, newObject: Object): Promise`

- `url`: The URL to which to post data.
- `newObject`: The object containing data to be posted.

### `update(url: string, newObject: Object): Promise`

- `url`: The URL at which to update data.
- `newObject`: The updated object containing data.

### `erase(url: string): Promise`

- `url`: The URL from which to delete data.

## Contributing

Feel free to contribute to this package by forking it and creating a pull request. Bug fixes, improvements, and additional features are welcome.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Note:** Remember to replace `'https://example.com/api/data'` with your actual API endpoints.

You can install the package via npm:

```bash
npm install custom-axios-wrapper
