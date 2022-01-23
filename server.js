const express = require( 'express' );
const { header } = require('express/lib/request');
const path = require( 'path' );

const { storedNotes, addNewNote, removeById } = require( './lib/db-calls' );

const PORT = process.env.PORT || 3002;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.get('/api/notes', (req, res) => {
  // storedNotes, called here, returns the array of stored notes
  res.send( storedNotes() );
});

app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/notes.html'));
});

app.post('/api/notes', (req, res) => {
  // addNewNote, called here, saves the posted note to the db with an added unique id
  res.send( addNewNote( req.body ) )
})

app.delete('/api/notes/*', (req, res) => {
  // removeById, called here, removes the note with the specified id from the db
  res.send( removeById( Object.values( req.params )[ 0 ] ) );
})

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(PORT, () => {
  console.log(`API server is listening on port ${PORT}.`);
});
