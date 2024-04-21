import { JumpLine } from "../services/FormatTextService";

export default function CatalogItem({ img_position, title = "", img_path, description = "" }: { img_position: 'right' | 'left', title?: string, img_path: string, description?: string }) {
    return (
        <div className="w-full p-5 bg-white">
            <div className={`flex flex-col lg:flex-row lg:justify-between`}>
                {(img_position === 'left' || img_position === 'right') && (
                    <>
                        {(img_position === 'left') && (
                            <div className="w-full lg:w-1/2 p-1 lg:p-5">
                                <img src={img_path} className="w-full h-auto object-cover rounded-2xl" />
                            </div>
                        )}
                        <div className="w-full lg:w-1/2 p-5">
                            <h2 className="text-primary bg-white text-center font-bold text-3xl lg:text-7xl">{title}</h2>
                            <p className="text-primary text-xl lg:text-3xl pt-5 lg:pt-10"><JumpLine texto={description}/></p>
                        </div>
                        {img_position === 'right' && (
                            <div className="w-full lg:w-1/2 p-1 lg:p-5">
                                <img src={img_path} className="w-full h-auto object-cover rounded-2xl" />
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
}
