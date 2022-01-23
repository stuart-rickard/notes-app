const fs = require( 'fs' );
const path = require( 'path' );
// uuid is used to create a unique identifier for each note
const { v4: uuidv4 } = require('uuid');

let notes = require( '../db/db.json' );

// get current json
const storedNotes = () => notes;

// add to json
const addNewNote = ( noteObject ) => {
    // add an id key with unique value to the note object
    noteObject.id = uuidv4();
    // add note object to the array of notes
    notes.push( noteObject );
    // update db
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify( notes , null, 2)
      );
    return notes;
}  

// remove identified note from json
const removeById = ( id ) => {
    // create an array without the identified note
    let updatedNotes = notes.filter( note => note.id !== id );
    // update db
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify( updatedNotes , null, 2)
      );
    // update local notes variable
    notes = updatedNotes;
    return notes;
  }

module.exports = {
    storedNotes,
    addNewNote,
    removeById
}