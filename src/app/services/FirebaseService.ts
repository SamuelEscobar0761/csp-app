import { initializeApp } from "firebase/app";
import { getDatabase, ref, get } from "firebase/database";

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