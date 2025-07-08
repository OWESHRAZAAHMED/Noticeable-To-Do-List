// Counter to keep track of note numbers
let noteCounter = 1;

// Function to handle adding a new note
function addNewNote() {
    // Show a prompt notification to get note text
    const noteText = prompt('Enter the text for your new note:');
    if (noteText && noteText.trim() !== '') {
        // Create a new div for the note
        const noteDiv = document.createElement('div');
        noteDiv.className = 'note';
        // Add the note number before the text 
        noteDiv.textContent = noteCounter + '. ' + noteText;
        // Insert the new note at the first position in #all-notes
        const allNotes = document.getElementById('all-notes');
        if (allNotes) {
            allNotes.insertBefore(noteDiv, allNotes.firstChild);
        }
        noteCounter++;
    } else {
        alert('Note text cannot be empty.');
    }
}

// Attach event listener to the Add New button (assumes button has id 'add-new')
document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.getElementById('add-new');
    if (addButton) {
        addButton.addEventListener('click', addNewNote);
    }
});