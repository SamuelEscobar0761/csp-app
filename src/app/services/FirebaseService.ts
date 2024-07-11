import { initializeApp } from "firebase/app";
import { getDatabase, ref, get } from "firebase/database";
import Image from '../interfaces/Image'

export interface Noticia {
  id: string;
  title: string;
  description: string;
  date: string;
  image: string;
  url: string | null;
}


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

// Función para obtener todas las noticias
export const obtenerNoticias = async (): Promise<Noticia[]> => {
  try {
    // Obtener una referencia al nodo 'news'
    const newsRef = ref(db, 'news');
    // Obtener los datos de todos los nodos bajo 'news'
    const snapshot = await get(newsRef);
    if (snapshot.exists()) {
      // Convertir los datos del snapshot en un arreglo de noticias
      const newsData = snapshot.val();
      const newsArray: Noticia[] = Object.keys(newsData).map(key => ({
        id: key,
        title: newsData[key].title,
        description: newsData[key].description,
        date: newsData[key].date,
        image: newsData[key].image,
        url: newsData[key].url,
      }));

      // Función auxiliar para convertir una fecha en formato dd-mm-yyyy a un objeto Date
      const parseDate = (dateStr: string): Date => {
        const parts = dateStr.split('-');
        return new Date(parseInt(parts[2]), parseInt(parts[1]) - 1, parseInt(parts[0]));
      };

      // Ordenar las noticias por fecha, de más reciente a más antigua
      newsArray.sort((a, b) => parseDate(b.date).getTime() - parseDate(a.date).getTime());

      return newsArray;
    } else {
      console.log('No se encontraron noticias.');
      return [];
    }
  } catch (error) {
    console.error('Error al obtener las noticias:', error);
    return [];
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
                      url: imagesData[key].url  // Inicialmente, url es null hasta que se actualice con la URL real
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

// Función para obtener PDFs por componente
export const obtenerDatosPDFs = async (componente: string): Promise<PDF[]> => {
  const pdfsRef = ref(db, 'pdfs');  // Asegúrate de que el path 'pdfs' es correcto según tu base de datos
  try {
    const snapshot = await get(pdfsRef);
    const pdfData = snapshot.val();
    let pdfs: PDF[] = [];
    if (pdfData) {
        // Filtrar por 'componente' y extraer los datos completos que cumplen con la interfaz PDF
        Object.keys(pdfData).forEach(key => {
            if (pdfData[key].component === componente && pdfData[key].url) {
                pdfs.push({
                    component: pdfData[key].component,
                    name: pdfData[key].name,
                    page: pdfData[key].page,
                    path: pdfData[key].path,
                    url: pdfData[key].url
                });
            }
        });
    }
    return pdfs;
  } catch (error) {
    console.error('Error al obtener los PDFs:', error);
    return [];
  }
};

