const setToken = (token, expired) => {
  localStorage.setItem("token", token);
  localStorage.setItem("expired_at", expired);
}

const destroyToken = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("expired_at");
};

const checkUserLoggin = () => {
  const sessionLogin = localStorage.getItem("expired_at");
  const token = localStorage.getItem("token");
  const date = Date.now();
  const date2 = Date.parse(sessionLogin);

  if(!token) {
    return null;
  }else{
    if(date >= date2){
      localStorage.removeItem("token");
      localStorage.removeItem("expired_at");
      return null;
    }
    return token;
  }

}

const Auth = {
  setToken,
  destroyToken,
  checkUserLoggin
}

export default Auth;
