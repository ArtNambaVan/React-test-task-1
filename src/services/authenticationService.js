const login = (username, password) => (
    new Promise((resolve, reject) => {
      if (username === 'Admin' && password === '12345') {
        localStorage.setItem('user', JSON.stringify(username))
        resolve(
            username
        );
      } else {
        reject('Не верный пароль или пользователь');
      }
    })
);

const logout = () => {
    localStorage.removeItem('user');
}

export const auth = {
  login,
  logout
}