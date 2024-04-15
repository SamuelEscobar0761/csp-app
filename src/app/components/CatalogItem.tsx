import { Box, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { JumpLine } from "../services/FormatTextService";

export default function CatalogItem({ img_position, title = "", img_path, description="" }: { img_position: 'right' | 'left', title?: string, img_path: string, description?: string }) {
    const theme = useTheme();
    const isHorizontal = useMediaQuery(theme.breakpoints.up('md'));

    const img_style = { width: '100%', borderRadius: '35px', padding: isHorizontal ? '20px' : '5px' }; // Se agrega padding solo si la pantalla es horizontal
    const img_container_style = { width: isHorizontal ? '50%' : '100%', padding: isHorizontal ? '20px' : 0 };
    const title_description_style = { padding: '25px', width: isHorizontal ? '50%' : '100%' }; // Se ajusta el ancho del contenedor del texto

    return (
        <div className="w-full">
            <Box sx={{
                flexGrow: 1,
                display: (isHorizontal ? 'flex' : 'block'), // Si la pantalla está en posición horizontal, utiliza flex; de lo contrario, bloque
                justifyContent: 'space-between',
                paddingX: '15px',
                paddingY: '30px',
                backgroundColor: 'white'
            }}>
                {((isHorizontal && (img_position === 'left' || img_position === 'right')) || !isHorizontal) && (
                    <>
                        {(img_position === 'left' || !isHorizontal) && (
                            <div style={img_container_style}>
                                <img src={img_path} style={img_style} />
                            </div>
                        )}
                        <div style={title_description_style}>
                            <h2 className="mx-auto bg-white text-primary md:text-7xl font-bold text-3xl">{title}</h2>
                            <p className="mx-auto text-primary md:text-3xl text-xl sm:pt-5 lg:pt-10"><JumpLine texto={description}/></p>
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
