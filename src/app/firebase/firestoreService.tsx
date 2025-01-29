import { db } from "./firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

const dataCollection = collection(db, "catalogue");

export const getData = async () => {
    try {
        const snapshot = await getDocs(dataCollection);
        return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
        console.error("Error fetching data:", error);
        return [];
    }
};
