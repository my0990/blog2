import { firestore } from "../api/firebase_config";

export default {
    postsFirstBatch: async function () {
        try {
            const data = await firestore
                .collection("post")
                .limit(3)
                .get();
            let posts = [];
            let lastKey = "";
            data.forEach((doc)=>{
                posts.push({
                    title: doc.title,
                });
                lastKey = doc.data().createdAt;
            });
            return {posts, lastKey};
        } catch (e) {
            console.log(e);
        }
    },
    postsNextBatch: async (key) => {
        try {
            const data = await firestore
                .collection("post")
                .limit(3)
                .get();
            let posts = [];
            let lastKey = "";
            data.forEach((doc) => {
                posts.push({
                    title: doc.title,
                });
                lastKey = doc.data().createdAt;
            });
            return {posts,lastKey};
        } catch (e) {
            console.log(e)
        }
    }
}