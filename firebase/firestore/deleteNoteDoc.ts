import db from "../config";
import { collection, doc, deleteDoc } from "firebase/firestore";

// col = collection
const deleteNoteDoc = async (col: string, id: string, subcollection: string, noteId: string) => {
    let result = null;
    let error = null;

    const notesCollection = collection(db, col);
    const subcollectionRef = collection(doc(notesCollection, id), subcollection);
    const noteDoc = doc(subcollectionRef, noteId);

    try {
        result = deleteDoc(noteDoc);
    } catch (e) {
        error = e;
    }

    return { result, error };
}

export default deleteNoteDoc;