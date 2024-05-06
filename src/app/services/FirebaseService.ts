import { initializeApp } from "firebase/app";
import { getDatabase, ref, get } from "firebase/database";
import {getStorage, ref as refStorage, getDownloadURL} from "firebase/storage";
import Image from '../interfaces/Image'

// Configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCiXm7xzyou9GySZ7Y7x1tmm6CYs-BBars",
    authDomain: "club-social-petrolero.firebaseapp.com",
    databaseURL: "https://club-social-petrolero-default-rtdb.firebaseio.com",
    projectId: "club-social-petrolero",
    storageBucket: "club-social-petrolero.appspot.com",
    messagingSenderId: "95503166689",
    appId: "1:95503166689:web:e8ba558c1aa1daebf25ba0",
    measurementId: "G-G9RMY72TFT"
  };

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const storage = getStorage();

// Función para obtener una noticia específica
export const obtenerNoticia = async () => {
  try {
    // Obtener una referencia al nodo 'news/0'
    const newsRef = ref(db, 'news/0');
    // Obtener los datos del nodo 'news/0'
    const snapshot = await get(newsRef);
    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      console.log('No existe ninguna noticia con ese identificador.');
      return null;
    }
  } catch (error) {
    console.error('Error al obtener los datos:', error);
    return null;
  }
};

export const getUrl = async (path: string): Promise<string | null> => {
  try {
    const fileRef = refStorage(storage, path);
    const downloadUrl = await getDownloadURL(fileRef);
    return downloadUrl;  // Esto ahora devuelve la URL de descarga directa
  } catch (error) {
    console.error('Error al obtener la URL del file', error);
    return null;
  }
};

// Función para obtener imágenes por página
export const obtenerUrlImagenes = async (pagina: string, componente: string): Promise<Image[]> => {
  const imagenesRef = ref(db, 'images');  // Asegúrate de que el path 'images' es correcto según tu base de datos
  try {
      const snapshot = await get(imagenesRef);
      const imagesData = snapshot.val();
      let images: Image[] = [];
      if (imagesData) {
          // Filtrar por 'page' y extraer los datos completos que cumplen con la interfaz Image
          Object.keys(imagesData).forEach(key => {
              if (imagesData[key].page === pagina && imagesData[key].component === componente) {
                  images.push({
                      page: imagesData[key].page,
                      component: imagesData[key].component,
                      name: imagesData[key].name,
                      path: imagesData[key].path,
                      url: null  // Inicialmente, url es null hasta que se actualice con la URL real
                  });
              }
          });
      }
      return images;
  } catch (error) {
      console.error('Error al obtener imágenes:', error);
      return [];
  }
};

export const obtenerDatosPDFs = async (componente: string): Promise<PDF[]> => {
  const pdfsRef = ref(db, 'pdfs');
  try {
    const snapshot = await get(pdfsRef);
    const pdfData = snapshot.val();
    let pdfs: PDF[] = [];
    if (pdfData) {
      const tasks = Object.keys(pdfData).filter(key => pdfData[key].component === componente)
        .map(async key => {
          const pdf = pdfData[key];
          const url = await getUrl(pdf.path);
          return {
            ...pdf,
            url
          };
        });
      pdfs = await Promise.all(tasks);
    }
    return pdfs;
  } catch (error) {
    console.error('Error al obtener los PDFs:', error);
    return [];
  }
};
