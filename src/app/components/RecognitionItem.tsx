import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from '@mui/material';
import { useState, useEffect } from 'react';

export default function RecognitionItem({sections, image, title='', text=''}: {sections:number, image: string, title?: string, text?: string}){
    const theme = useTheme();
    const isHorizontal = useMediaQuery(theme.breakpoints.up('md'));
    const [width, setWidth] = useState('');
    useEffect(() => {
        if (!isHorizontal) {
            setWidth('full');
        } else {
            setWidth(`1/${sections}`);
        }
      }, [sections, isHorizontal]);
    return(
        <div className={`w-${width} mx-auto bg-[#80AE8A] text-white p-10`}>
            <img src={image} className={`aspect-square object-cover rounded-lg`}/>
            <h2 className="sm:py-5 text-center sm:text-3xl lg:text-6xl lg:py-10">{title}</h2>
            <p>{text}</p>
        </div>
    );
};