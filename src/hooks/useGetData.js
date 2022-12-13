import React, { useEffect, useState } from "react";
import { db } from "../index.js";
import { collection, doc, setDoc } from "firebase/firestore";

// export const useGetData = () => {
//   const [documents, setDocuments] = useState([]);
//   useEffect(() => {

//     db.collections("menu")
//       .get()
//       .then((querySnapshot) => {
//         let arr = [];
//         querySnapshot.docs.map((doc) => {
//           arr.push({ id: doc.id, value: doc.data() });
//         });
//         setDocuments(arr);
//       });
//   }, [db]);

//   return [documents];
// };
