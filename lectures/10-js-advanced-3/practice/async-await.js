// function fetchData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       Math.random() > 0.5
//         ? resolve("Data fetched!")
//         : reject("Error fetching data");
//     }, 1000);
//   });
// }

// fetchData()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// async function fetchDataWithAsyncAwait() {
//   try {
//     const data = await fetchData();
//     console.log(data);
//   } catch (error) {
//     console.error(error);
//   }
// }


// fetchDataWithAsyncAwait();

// async function getData() {
//   const url = "https://jsonplaceholder.typicode.com/todos/1";
//   try {
//     const response = await fetch(url, {

//     });
//     if (!response.ok) {
//       throw new Error(`Response status: ${response.status}`);
//     }

//     const json = await response.json();
//     console.log(json);
//   } catch (error) {
//     console.error(error.message);
//   }
// }

// getData();
