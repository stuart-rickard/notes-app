const express = require( 'express' );


const PORT = process.env.PORT || 3002;
const app = express();
// const apiRoutes = require('./routes/apiRoutes');
// const htmlRoutes = require('./routes/htmlRoutes');

const notes = require( './db/db.json' );

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// // Use apiRoutes
// app.use('/api', apiRoutes);
// app.use('/', htmlRoutes);





app.get('/api/notes', (req, res) => {
  console.log( 'test api notes' );
  // console.log( req );
  // res.send('Hello!');
  res.send( notes );
});

app.get('/', (req, res) => {
  console.log( 'test /' );
  console.log( req );
  res.sendFile(path.join(__dirname, './public/assets/index.html'));
});

app.get('*', (req, res) => {
  console.log( 'test *' );
  console.log( req );
  res.sendFile(path.join(__dirname, './public/assets/index.html'));
});

app.listen(PORT, () => {
  console.log(`API server is listening on port ${PORT}.`);
});
