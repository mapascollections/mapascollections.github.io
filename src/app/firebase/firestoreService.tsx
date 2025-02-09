import { db } from "./firebaseConfig";
import { collection, getDocs, getDoc, doc } from "firebase/firestore";

const dataCollection = collection(db, "catalogue");

export const getData = async () => {
    try {
        const snapshot = await getDocs(dataCollection);
        const activeCategories = [];

        for (const categoryDoc of snapshot.docs) {
            const categoryRef = doc(db, "catalogue", categoryDoc.id);
            const categorySnapshot = await getDoc(categoryRef);

            if (categorySnapshot.exists() && categorySnapshot.data().isActive) {
                activeCategories.push({ id: categoryDoc.id, ...categoryDoc.data() });
            }
        }

        return activeCategories;
    } catch (error) {
        console.error("Error fetching data:", error);
        return [];
    }
};
