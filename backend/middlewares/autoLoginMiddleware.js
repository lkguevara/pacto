
//Middleware para autologear a un usuario, este mw no debe generar un nuevo token ya que utiliza el ya asignado para loggearse de forma automatica
const autoLogin = async (req, res, next) => {
   
    try {
      // Verificar si hay un token válido almacenado en el localStorage del navegador
      const token = req.headers.authorization.split(' ')[1];
      if (!token) {
        return res.status(401).json({ msg: 'Debes iniciar sesión para acceder a esta página' });
      }
  
      // Verificar si el token es válido
      const decodedToken = jwt.verify(token, process.env.JWT_PRIVATE_KEY);

      if (!decodedToken) {
        return res.status(401).json({ msg: 'Debes iniciar sesión para acceder a esta página' });
      }
  
      // Buscar el usuario asociado con el token en la base de datos
      const user = await checkUserExists(decodedToken.id);

      if (!user) {
        return res.status(401).json({ msg: 'Debes iniciar sesión para acceder a esta página' });
      }
  
      // Autenticar al usuario en la aplicación
      req.user = user;
      next();
    } catch (error) {
      return res.status(500).json({ message: 'Ocurrió un error al iniciar sesión automáticamente' });
    }

}

module.exports = {autoLogin}