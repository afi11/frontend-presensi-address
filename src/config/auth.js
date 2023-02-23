const setToken = (token, expired) => {
  localStorage.setItem("token", token);
  localStorage.setItem("expired_at", expired);
};

// RUMUS EXPIRED TOKEN
// const date = Date.now();
// const timeOke = 1677083046;
// console.log(date);

// const date2 = Date.parse('2023-02-22T23:43:55+07:00');
// console.log(date2);

// if(date2 <= date){
//   console.log("Lebih")
// }else{
//   console.log("Woke")
// }

const destroyToken = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("expired_at");
};
