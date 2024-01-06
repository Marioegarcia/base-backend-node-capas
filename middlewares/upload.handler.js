const multer = require('multer');
const boom = require('@hapi/boom');
const fs = require('fs');

function createUploadMiddleware(destination,multiple = false) {
  const storage = multer.diskStorage({
    destination: function(req, file, cb) {
      // Verificar si la carpeta de destino existe
      if (!fs.existsSync(destination)) {
        // Crear la carpeta si no existe
        fs.mkdirSync(destination, { recursive: true });
      }
      cb(null, destination);
    },
    filename: function(req, file, cb) {
      cb(null, Math.floor(Math.random() * 100000000000) + file.originalname.replace(/\s/g, ''));
    }
  });

  const upload = multer({ 
    storage: storage, 
    limits: {
      fieldSize: 100 * 1024 * 1024, // 10MB en bytes
  }, });
  if (multiple) {
    return function(req, res, next) {
      upload.any('archivo')(req, res, function(err) {
        if (err instanceof multer.MulterError) {
          // Error de Multer
          next(boom.badRequest('archivo no compatible'));
        } else if (err) {
          // Otro tipo de error
          next(boom.badImplementation('Ocurrió un error al subir el archivo'));
        } else {
          // Sin errores, pasar al siguiente middleware
          next();
        }
      });
    }
  }
  return function(req, res, next) {
   
    upload.single('archivo')(req, res, function(err) {
      if (err instanceof multer.MulterError) {
        // Error de Multer
        next(boom.badRequest(err.message));
      } else if (err) {
        // Otro tipo de error
        next(boom.badImplementation('Ocurrió un error al subir el archivo'));
      } else {
        // Sin errores, pasar al siguiente middleware
        next();
      }
    });
  }
}

module.exports = createUploadMiddleware;
