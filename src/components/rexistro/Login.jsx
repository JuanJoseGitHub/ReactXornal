function Login() {
  return (
    <form className="login">
      <label for="name">Nome: </label>
      <input type="test" name="usuario" />

      <label for="password">Clave: </label>
      <input type="password" name="contrasinal" />
      
      <input type="submit" value="Enviar" />
    </form>
  );
}

export default Login;
