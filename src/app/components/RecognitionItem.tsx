import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from '@mui/material';
import { useState, useEffect } from 'react';
import { JumpLine } from "../services/FormatTextService";

export default function RecognitionItem({ sections, image, title='', subtitle='', text='' }: { sections: number, image: string, title?: string, subtitle?: string, text?: string }) {
    const theme = useTheme();
    const isHorizontal = useMediaQuery(theme.breakpoints.up('lg'));
    const [width, setWidth] = useState('');

    useEffect(() => {
        if (!isHorizontal) {
            setWidth('full');
        } else {
            setWidth(`1/${sections}`);
        }
    }, [sections, isHorizontal]);

    return (
        <div className={`w-${width} mx-auto bg-white text-primary px-10 mb-5 md:mb-0 md:mr-0 last:mr-0`}>
            <img src={image} className={`aspect-square object-cover rounded-lg`} alt={title}/>
            <h2 className="py-5 text-center text-3xl md:text-4xl lg:text-5xl lg:py-10 md:h-48">{title}</h2>
            <h3 className="py-5 text-center text-xl md: text-2xl lg:text-4xl lg:py-15 text-black">{subtitle}</h3>
            <p className="text-xl md:text-2xl lg:text-3xl"><JumpLine texto={text}/></p>
        </div>
    );
};
