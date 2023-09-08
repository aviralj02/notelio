import db from "../config";
import { collection, doc, setDoc } from 'firebase/firestore';

const editData = async (col: string, id: string, subcollection: string, noteId: string, data: Note) => {
    let result = null;
    let error = null;

    const notesCollection = collection(db, col);
    const subcollectionRef = collection(doc(notesCollection, id), subcollection);
    const noteDoc = doc(subcollectionRef, noteId);

    try {
        result = await setDoc(noteDoc, data, {
            merge: true
        });
    } catch (e) {
        error = e;
    }

    return { result, error };
}

export default editData;