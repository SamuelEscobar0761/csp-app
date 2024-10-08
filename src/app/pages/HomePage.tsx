import { useEffect, useState } from 'react';
import { ImageSlider } from '../components/ImageSlider';
import LocateImageService from '../services/LocateImageService';
import Image from '../interfaces/Image';
import { obtenerUrlImagenes } from '../services/FirebaseService';

export const HomePage = () => {
    const [info_images, setInfo_images] = useState<Image[]>([]);
    const [carouselImages, setCarouselImages] = useState<Image[]>([]);
    const page = 'homepage';

    useEffect(() => {
        LocateImageService.getInstance().getImages("homepage", "carousel")
            .then(images => {
                setCarouselImages(images);
            })
            .catch(error => {
                console.error('Error al obtener las imágenes:', error);
        });

        const loadImages = async () => {
            try {    
                // Obtener información de imágenes con todos los detalles incluyendo paths
                const images = await obtenerUrlImagenes(page, "information");

                // Establecer los estados con los datos cargados
                setInfo_images(images);
                console.log(images)
            } catch (error) {
                console.error('Error al obtener las imágenes:', error);
            }
        };

        loadImages();
    }, []);
    

    return (
        <div className='space-y-5 md:space-y-10'>
            <ImageSlider images={carouselImages} text='Club Social Petrolero' homepage={true}/>
            {info_images.map((item, index) => (
                item.url ? <img key={index} src={item.url} className='w-full object-cover' alt="Club Image" /> : null
            ))}
            <h2 className='text-primary text-xl md:text-3xl lg:text-5xl text-center'>La mejor ubicación en la ciudad de La Paz</h2>
            <div className='flex justify-center'>
                <img src='/assets/images/maps/maps_csp.jpg' className='w-full md:w-2/3 object-scale-down' alt='Club location'/>
            </div>
            <div className='flex justify-center'>
                <img src='/assets/images/qr/qr.jpg' className='w-full md:w-1/2 object-scale-down' alt='Código QR'/>
            </div>
            
        </div>
    );
}
