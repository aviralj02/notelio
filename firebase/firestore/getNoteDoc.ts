import db from "../config";
import { collection, getDoc, doc, DocumentData } from 'firebase/firestore';

// col = collection
const getNoteDoc = async (col: string, id: string, subcollection: string, noteId: string) => {
    let error = null;
    let result: DocumentData = {}; 

    const notesCollection = collection(db, col);
    const subcollectionRef = collection(doc(notesCollection, id), subcollection);
    const noteDoc = doc(subcollectionRef, noteId);

    try{
        const docRef = await getDoc(noteDoc);
        result = docRef?.data()!;
    }
    catch(e){
        error = e;
    }

    return { result, error };
}

export default getNoteDoc;