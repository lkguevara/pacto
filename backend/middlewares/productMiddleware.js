const busboy = require('busboy');
const cloudinary = require('cloudinary').v2;

const filePromises = [];

const middlewarePostNewProduct = async (req, res, next) => {
  const newProduct = {
    images:[]
  };
  let numFiles = 0;

  // Configurar Cloudinary
  //Falta config el .env
  cloudinary.config({
    cloud_name: 'dkexrztsg',
    api_key: '238974953837468',
    api_secret: 'EU5e0RMGceRidtaDnCMVLVyTsn4',
  });

  req.pipe(busboy({ headers: req.headers }))
  .on('field', (fieldname, value) => {
    newProduct[fieldname] = value
        
    
   
     })
    .on('file', async (fieldname, file, filename, encoding, mimetype) => {
      // Manejar el archivo aquí
      // ...

      const chunks = [];
      file.on('data', (data) => {
        chunks.push(data);
      });

      file.on('end', async () => {
        // Combinar los chunks de datos en un solo buffer
        const buffer = Buffer.concat(chunks);

        // Enviar la imagen a Cloudinary y agregar la promesa al array de promesas
        const filePromise = new Promise((resolve, reject) => {
          cloudinary.uploader.upload_stream({
            folder: 'product_images',
            public_id: `${Date.now()}-${filename}`,
            resource_type: 'auto',
          }, (error, result) => {
            if (error) {
              console.error(error);
              reject(error);
            } else {
    
              newProduct.images.push(result.secure_url);
              resolve(result);
            }
          }).end(buffer);
        });

        // Agregar la promesa al array de promesas
        filePromises.push(filePromise);
      });
    })
    .on('finish', async () => {
      // Esperar a que todas las promesas se resuelvan antes de continuar con la ejecución del middleware
      try {
        await Promise.all(filePromises);

        // Agregar el objeto de producto completo a la solicitud
        req.newProduct = newProduct;

        next();
      } catch (error) {
        console.error(error);
        return next(error);
      }
    });
};

module.exports = middlewarePostNewProduct;