import { Box, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function CatalogItem({ img_position, title = "", img_path, description }: { img_position: 'right' | 'left', title?: string, img_path: string, description: string }) {
    const theme = useTheme();
    const isHorizontal = useMediaQuery(theme.breakpoints.up('md'));

    const img_style = { width: '100%', borderRadius: '35px', padding: isHorizontal ? '20px' : '5px' }; // Se agrega padding solo si la pantalla es horizontal
    const img_container_style = { width: isHorizontal ? '50%' : '100%', padding: isHorizontal ? '20px' : 0 }; // Se ajusta el ancho del contenedor de la imagen
    const title_style = { display: 'flex', color: 'white', justifyContent: 'space-evenly' };
    const description_style = { color: 'white', fontSize: 22 };
    const title_description_style = { padding: '25px', width: isHorizontal ? '50%' : '100%' }; // Se ajusta el ancho del contenedor del texto

    return (
        <div className="w-full">
            <Box sx={{
                flexGrow: 1,
                display: (isHorizontal ? 'flex' : 'block'), // Si la pantalla está en posición horizontal, utiliza flex; de lo contrario, bloque
                justifyContent: 'space-between',
                paddingX: '15px',
                paddingY: '30px',
                backgroundColor: '#80AE8A'
            }}>
                {((isHorizontal && (img_position === 'left' || img_position === 'right')) || !isHorizontal) && (
                    <>
                        {(img_position === 'left' || !isHorizontal) && (
                            <div style={img_container_style}>
                                <img src={img_path} style={img_style} />
                            </div>
                        )}
                        <div style={title_description_style}>
                            <h2 style={title_style} className="mx-auto bg-[#80AE8A] text-white md:text-5xl text-3xl">{title}</h2>
                            <p style={description_style} className="pt-10">{description}</p>
                        </div>
                        {img_position === 'right'  && isHorizontal && (
                            <div style={img_container_style}>
                                <img src={img_path} style={img_style} />
                            </div>
                        )}
                    </>
                )}
            </Box>
        </div>
    );
}
