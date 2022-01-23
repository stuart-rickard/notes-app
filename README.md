# Note Taker

This is a challenge project for the UC Berkeley Extension Full-Stack Developer Bootcamp Course. The challenge involves using the npm package `express` within a `node.js` environment; data is to be stored in a `db.json` file.  There is starter code, which provides the website front-end of a note-taking application.  The starter code requires a few api routes to function:
- a `GET` route that returns stored notes
- a `POST` route that allows a new note to be stored
- a `DELETE` route that allows a stored note to be deleted

In addition, there are a couple of http routes provided: one `/notes` returns the `notes.html` file; the second is a catchall `/*` route that returns the `index.html` file.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Questions](#questions)

## Installation

This project requires the use of `node.js` and the `express` package from `npm`.  Ensure you have both `node.js` and `npm` initialized in your directory, then use `npm install` to ensure the correct package is installed.  A `package.json` file is included in this repo.  (Developers may wish to use `nodemon` which is included as a development dependency for convenience.)

## Usage

This project requires hosting either on a local drive or in a node-compatible hosting service such as [heroku](https://www.heroku.com/).  In the local drive scenario, after installation, start the server at the command line using either `node server` (or, if you have `nodemon` installed, using `npx nodemon server.js`). The project uses port 3002 - so your browser should be pointed to http://localhost:3002 (or similar, depending on your environment).

A publicly-accessible installation of the project is available at: https://pacific-headland-80677.herokuapp.com/.
    
## License
  
This project is licensed using MIT License

See the [LICENSE](./LICENSE) file for license rights and limitations.

## Questions
        
My GitHub username is stuart-rickard; please feel free to contact me through my profile [here](https://github.com/stuart-rickard).
