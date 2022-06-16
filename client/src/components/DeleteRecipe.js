// const deleterecipe = function(db, recipe) {
//     let pointValues = [idPoint];
//     let queryString = `DELETE FROM recipe
//       WHERE id = $1`;
//     return (
//       db
//         .query(queryString, pointValues)
//         .then(res => {
//           return res.rows;
//         })
//         .catch(err => console.log(err))
//     );
//   };