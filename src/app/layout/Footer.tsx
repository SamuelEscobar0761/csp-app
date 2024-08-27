export default function Footer(){
    return(
        <div className="flex flex-col md:flex-row py-5 items-center">
            <img src="/assets/images/logos/logo_largo.svg" className="hidden md:block md:flex-none md:w-1/4 lg:w-1/6 pl-10 mb-5 md:mb-0" alt="Club Logo"/>
            <div className="px-4 md:px-20 flex-initial w-auto md:w-auto">
                <h1 className="text-primary text-xl md:text-3xl lg:text-5xl mb-2">Club Social Petrolero</h1>
                <p className="text-primary text-base md:text-lg lg:text-xl">Dirección: Calle 15 de Calacoto. Av. Los Sauces Nº945</p>
                <p className="text-primary text-base md:text-lg lg:text-xl">Contacto: 2792413 - 2790165</p>
                <a className="text-primary text-base md:text-lg lg:text-xl underline" href="https://wa.me/59169850980">Whatsapp: 69850980</a>
                <p className="text-primary text-base md:text-lg lg:text-xl">Correo electrónico: info@club-petrolero.org</p>
            </div>
        </div>
    );
};
