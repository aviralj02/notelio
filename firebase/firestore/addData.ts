import db from "../config";
import { collection, addDoc, doc } from 'firebase/firestore';

// col = collection
const addData = async (col: string, id: string, subcollection: string, data: Note) => {
    let result = null;
    let error = null;

    const notesCollection = collection(db, col);
    const subcollectionRef = collection(doc(notesCollection, id), subcollection);

    try {
        result = await addDoc(subcollectionRef, data);
    } catch (e) {
        error = e;
    }

    return { result, error };
}

export default addData;