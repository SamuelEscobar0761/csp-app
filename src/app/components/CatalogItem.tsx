import { JumpLine } from "../services/FormatTextService";

export default function CatalogItem({ img_position, title = "", img_path, description = "" }: { img_position: 'right' | 'left', title?: string, img_path: string, description?: string }) {
    // Verificar si hay descripción para aplicar el estilo correspondiente
    if (description) {
        // Clases para el contenedor con descripción
        const containerClasses = `flex ${img_position === 'left' ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col-reverse w-full p-5 bg-white`;

        return (
            <div className="w-full">
                <div className={containerClasses}>
                    <div className="w-full lg:w-1/2 p-1 lg:p-5">
                        <img src={img_path} alt={title} className="w-full h-auto object-cover border rounded-2xl" />
                    </div>
                    <div className="w-full lg:w-1/2 p-5">
                        <h2 className="text-primary bg-white text-center text-3xl lg:text-5xl">{title}</h2>
                        <p className="text-primary text-xl lg:text-3xl pt-5 lg:pt-10"><JumpLine texto={description}/></p>
                    </div>
                </div>
            </div>
        );
    } else {
        // Clases para el contenedor sin descripción
        const containerClasses = `flex flex-col w-full p-10 bg-white`;

        return (
            <div className="w-full">
                <div className={containerClasses}>
                    <h2 className="text-primary bg-white text-center text-3xl lg:text-5xl mb-4">{title}</h2>
                    <div className="flex justify-center">
                        <img src={img_path} alt={title} className="lg:w-2/3 border rounded-2xl " />
                    </div>
                </div>
            </div>
        );
    }
}
