const fs = require('fs');

const addNotes = function(title, body) {
    const notes = loadNotes();
    const duplicate = notes.filter((note) => {
        return note.title == title;
    })
    if (duplicate.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes);
    } else {
        console.log("Note already taken");
    }


}

// To Save Files 
const saveNotes = (notes) => {
    const savedData = JSON.stringify(notes)
    fs.writeFileSync('json1.json', savedData);
}

const loadNotes = () => {
    try {
        const store1 = fs.readFileSync('json1.json');
        const store2 = store1.toString();
        const store3 = JSON.parse(store2);
        return store3;
    } catch {
        return [];
    }

}


// To remove 

const removeNotes = (title) => {
    const remove = loadremovenotes();
    const duplicate1 = remove.filter(function(removeschecker) {
        return removeschecker.title !== title;
    })
    if (remove.length < duplicate1.length()) {
        console.log('Not removed');
        save(duplicate1);
    } else {
        console.log('Not removed');
    }



}

// Load Notes

const loadremovenotes = () => {
    const remove1 = fs.readFileSync('json1.json');
    const remove2 = remove1.toString();
    const remove3 = JSON.parse(remove2);
    return remove3;
}

// SAve Notes
const save = (remove3) => {
    const saved = JSON.stringify(remove3);
    fs.writeFileSync('json1.json', saved);
}


module.exports = {
    addNotes: addNotes,
    removeNotes: removeNotes
}