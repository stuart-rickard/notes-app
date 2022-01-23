const express = require( 'express' );
const path = require( 'path' );

const { addNewNote, removeById } = require( './lib/db-calls' );

const PORT = process.env.PORT || 3002;
const app = express();
// const apiRoutes = require('./routes/apiRoutes');
// const htmlRoutes = require('./routes/htmlRoutes');

const storedNotes = require( './db/db.json' );
let notes = [ ...storedNotes ];

const { json } = require('express/lib/response');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// // Use apiRoutes
// app.use('/api', apiRoutes);
// app.use('/', htmlRoutes);





app.get('/api/notes', (req, res) => {
  console.log( 'inside get / api notes' );
  // console.log( req );
  // res.send('Hello!');
  res.send( notes );
});

app.get('/notes', (req, res) => {
  console.log( 'inside get /notes' );
  // console.log( req );
  res.sendFile(path.join(__dirname, 'public/notes.html'));
  // res.sendFile('/Users/stuar/Documents/miniature-eureka/public/notes.html');
});

app.post('/api/notes', (req, res) => {
  console.log( 'inside /notes post' );
  console.log( req.body );
  // addNewNote( req.body );
  res.send( addNewNote( req.body ) )
})

app.delete('/api/notes/*', (req, res) => {
  console.log( 'inside /notes delete' );
  console.log(Object.values( req.params )[0]);

  res.send( removeById( Object.values( req.params )[ 0 ] ) );
  // res.send( 'inside delete ' );
})

app.get('/', (req, res) => {
  console.log( 'test /' );
  console.log( req );
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.get('*', (req, res) => {
  console.log( 'test *' );
  // console.log( req );
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(PORT, () => {
  console.log(`API server is listening on port ${PORT}.`);
});
