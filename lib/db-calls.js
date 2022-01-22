const fs = require( 'fs' );
const path = require( 'path' );
const { v4: uuidv4 } = require('uuid');

let notes = require( '../db/db.json' );
// console.log (notes);
// console.log (notes[0].id);

// const notesAsArray = JSON.parse( notesAsJson );

// const highestId = () => {
//     parsedNotes = JSON.parse( notes );
//     const idArray = parsedNotes.map(() => note.id )
//     console.log(idArray);
//     return Math.max.apply(null, idArray);

//     // const idArray = notes.map(() => note.id )
//     // console.log(idArray);
//     // return Math.max.apply(null, idArray );

// }
// console.log(highestId());


// find in json
const findById = ( id ) => {
    // let returnedArray = notes;
    // let returnedArray = notes.filter( note => note.id == id );
    return notes.filter( note => note.id == id );
    // return returnedArray;
  }
//   let item = findById(1);
//   console.log( item );
  
// add to json
const addNewNote = ( noteObject ) => {
    noteObject.id = uuidv4();
    notes.push( noteObject );
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify( notes , null, 2)
      );
      return notes;
    }  
    // addNewNote( { "id": 4 } );
    // console.log ( notes )  ;


// remove from json
const removeById = ( id ) => {
    // let returnedArray = notes;
    // let returnedArray = notes.filter( note => note.id == id );
    // return notes.filter( note => note.id !== id );
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify( notes.filter( note => note.id !== id ) , null, 2)
      );
    // return returnedArray;
  }
  // // let otherItems = removeById(4);
  // // console.log ( otherItems )  ;
  // removeById(4);

module.exports = {
    findById,
    addNewNote,
    removeById
}