// Counter to keep track of note numbers
let noteCounter = 1;

// Function to handle adding a new note
function addNewNote() {
    // Show a prompt notification to get note text
    // const noteText = prompt('Enter the text for your new note:');
    const clicked = document.getElementById('add-new')
    if (clicked) {
        // Create a new textarea for the note
        const noteTextarea = document.createElement('textarea');
        noteTextarea.className = 'note';
        noteTextarea.value = '';
        noteTextarea.placeholder = noteCounter + '. Write your note here...';
        noteTextarea.readOnly = false;
        // Insert the new note at the first position in #all-notes
        const allNotes = document.getElementById('all-notes');
        if (allNotes) {
            allNotes.insertBefore(noteTextarea, allNotes.firstChild);
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
document.addEventListener('DOMContentLoaded',function(){
    const delbutton =document.getElementById('Delete')
    if(delbutton){
        delbutton.addEventListener('click', function() {
            location.reload(); // Reloads the page when Delete button is clicked
        });
    }
})