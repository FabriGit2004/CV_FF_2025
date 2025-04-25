const fs = require('fs');
const path = require('path');

// Ruta de la carpeta de certificados
const certificatesPath = path.join(__dirname, 'public', 'certificates');

// Función para obtener todos los archivos de la carpeta
const getCertificates = () => {
  const files = fs.readdirSync(certificatesPath); // Lee los archivos en la carpeta
  const certificates = files
    .filter(file => file.endsWith('.png') || file.endsWith('.pdf')) // Filtra imágenes y PDFs
    .map(file => ({
      title: file.split('.')[0], // Usa el nombre del archivo como título
      image: `/certificates/${file}`, // Ruta del archivo de imagen
      pdf: `/certificates/${file.replace('.png', '.pdf')}`, // Ruta del archivo PDF correspondiente
    }));
  return certificates;
};

// Exportar la función
module.exports = getCertificates;
