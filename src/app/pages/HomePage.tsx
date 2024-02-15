import patioCentral from '../../assets/images/homepage/patio_central.jpeg'
import { ImageSlider } from '../components/ImageSlider';

export const HomePage = () => {
    return(
        <div className="justify-center items-center h-screen">
            <img className="mx-auto w-full h-auto" src={patioCentral}/>
            <ImageSlider/>
        </div>
    );
}