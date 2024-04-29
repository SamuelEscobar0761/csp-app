import { useEffect, useState } from "react";
import { ImageSlider } from "../components/ImageSlider";
import { useTranslation } from "react-i18next";
import LocateImageService from "../services/LocateImageService";
import Image from '../interfaces/Image';
import CatalogItem from "../components/CatalogItem";
import RecognitionItem from "../components/RecognitionItem";
import { JumpLine } from "../services/FormatTextService";
import PdfViewer from "../components/pdf_reader/PdfReader";
import { getUrl, obtenerUrlImagenes } from "../services/FirebaseService";
import LoadingScreen from "../components/LoadingScreen";

export const AboutUsPage = () => {
    const [images_about_us, setImages_about_us] = useState<Image[]>([]);
    const[storiesImages, setStoriesImages] = useState<Image[]>([]);
    const[directorsImages, setDirectorsImages] = useState<Image[]>([]);
    const { t } = useTranslation('ns1');
    const stories = t("about_us_page.stories", { returnObjects: true });
    const directors = t("about_us_page.directory", { returnObjects: true });
    const pdfPathEstatuto = "pdfs/estatuto.pdf";
    const [fileUrl, setFileUrl] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        LocateImageService.getInstance().getImages("about_us_page", "carousel")
            .then(images => {
                setImages_about_us(images);
            })
            .catch(error => {
                console.error('Error al obtener las imágenes:', error);
        });

        LocateImageService.getInstance().getImages("about_us_page", "stories")
            .then(images => {
                setStoriesImages(images);
            })
            .catch(error => {
                console.error('Error al obtener las imágenes:', error);
        });

        const loadDirectoryImages = async () => {
            try {
                const directoryImages = await obtenerUrlImagenes("about_us_page", "directory");
        
                    // Obtener URLs para cada imagen usando el path de cada objeto Image
                    const directoryImagesWithUrl = await Promise.all(
                        directoryImages.map(async (image) => ({
                        ...image,
                        url: await getUrl(image.path) // Obtener la URL real y añadirla al objeto
                    }))
                );
                setDirectorsImages(directoryImagesWithUrl);
            } catch (error) {
                console.error('Error al obtener las imágenes:', error);
            } finally {
                // Quitar la pantalla de carga después de un breve retraso
                setTimeout(() => setLoading(false), 500);
            }
        }
        loadDirectoryImages();
    }, []);

    useEffect(() => {
        const fetchPdf = async () => {
          const url = await getUrl(pdfPathEstatuto);
          setFileUrl(url);
        };
    
        fetchPdf();
      }, [pdfPathEstatuto]);

    if (loading) {
        return <LoadingScreen />;
    }

    return(
        <div>
            <ImageSlider images={images_about_us} text={t('about_us_page.carousel')}/>
            <br id='history'/>
            <br/>
            <br/>
            <h2 className={`py-10 text-primary bg-white text-center text-4xl md:text-5xl lg:text-7xl font-bold`}>{t('about_us_page.title')}</h2>
            <div className="flex justify-center ...">
                <img src="/assets/images/historia/historia1.jpeg" className="w-11/12 h-auto rounded-[29px]"/>
            </div>
            <div className="p-10">
                <p className="text-primary bg-white md:text-3xl text-xl"><JumpLine texto={t('about_us_page.resume')}/></p>
            </div>
            {stories.map((item, index) => (
                storiesImages.length > 0 && (
                    <CatalogItem
                        key={index}
                        img_position={index % 2 === 0 ? 'left' : 'right'}
                        img_path={storiesImages[index].path}
                        description={item.description}
                    />
                )
            ))}
            <br id='directory'/>
            <br/>
            <br/>
            <h2 className={`py-10 text-primary bg-white text-center text-4xl md:text-5xl lg:text-7xl font-bold`}><JumpLine texto={t('about_us_page.directory_title')}/></h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-white p-4">
                {directors.map((item, index) => (
                    directorsImages.length > 0 && (
                        <RecognitionItem key={index} sections={1} image={directorsImages[index].url!} title={item.name} subtitle={item.position}/>
                    )
                ))}
            </div>
            <br id='statutes'/>
            <br/>
            <br/>
            <h2 className={`py-10 text-primary bg-white text-center text-4xl md:text-5xl lg:text-7xl font-bold`}>{t('about_us_page.statute_title')}</h2>
            <div id="pdf-container" className="flex justify-center ...">
                {fileUrl ? <PdfViewer pdfPath={fileUrl} /> : <div>Cargando PDF...</div>}
            </div>
            <br id='regulations'/>
            <br/>
            <br/>
            <h2 className={`py-10 text-primary bg-white text-center text-4xl md:text-5xl lg:text-7xl font-bold`}>{t('about_us_page.regulations')}</h2>
            <div id="pdf-container" className="flex justify-center ...">
                {fileUrl ? <PdfViewer pdfPath={fileUrl} /> : <div>Cargando PDF...</div>}
            </div>
            <br id='memories'/>
            <br/>
            <br/>
            <h2 className={`py-10 text-primary bg-white text-center text-4xl md:text-5xl lg:text-7xl font-bold`}>{t('about_us_page.memories_title')}</h2>
            <div className="flex justify-center ...">
                {fileUrl ? <PdfViewer pdfPath={fileUrl} /> : <div>Cargando PDF...</div>}
            </div>
            <br/>
            <br/>
        </div>
    );
};