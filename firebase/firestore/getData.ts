import db from "../config";
import { collection, getDocs, doc, DocumentData, query, orderBy } from 'firebase/firestore';

// col = collection
const getData = async (col: string, id: string, subcollection: string) => {
    let error = null;
    let result: DocumentData[] = []; 

    const notesCollection = collection(db, col);
    const subcollectionRef = collection(doc(notesCollection, id), subcollection);

    try{
        const docRef = await getDocs(
            query(subcollectionRef, orderBy('_createdAt', 'desc'))
        );

        docRef.forEach(doc => {
            result.push({
                _id: doc.id,
                ...doc.data()
            });
        })
    }
    catch(e){
        error = e;
    }

    return { result, error };
}

export default getData;