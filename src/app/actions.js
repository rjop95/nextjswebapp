"use server";

import { addReviewToRestaurant } from "@/src/lib/firebase/firestore.js";
import { getAuthenticatedAppForUser } from "@/src/lib/firebase/serverApp.js";
import { getFirestore } from "firebase/firestore";

// This is a Server Action
// https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions
// Replace the function below
// This is a next.js server action, which is an alpha feature, so
// use with caution.
// https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions
export async function handleReviewFormSubmission(data) {
        const { app } = await getAuthenticatedAppForUser();
        const db = getFirestore(app);
 
        await addReviewToRestaurant(db, data.get("restaurantId"), {
                text: data.get("text"),
                rating: data.get("rating"),
 
                // This came from a hidden form field.
                userId: data.get("userId"),
        });
}
