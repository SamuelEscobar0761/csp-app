import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from '@mui/material';
import { useState, useEffect } from 'react';

export default function ContactItem({sections, image, title, text}: {sections:number, image: string, title: string, text: string}){
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

    const renderText = () => {
        return text.split('\n').map((line, index) => (
            <p key={index} className="p-3">{line}</p>
        ));
    };

    return(
        <div className={`w-${width} mx-auto bg-white text-[#80AE8A] p-10 md:flex`}>
            <img src={image} className={`w-1/4  object-cover rounded-lg`}/>
            <div>
                <h2 className="p-5 text-3xl">{title}</h2>
                {renderText()}
            </div>
        </div>
    );
};