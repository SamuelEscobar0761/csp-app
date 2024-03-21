export default function Footer(){
    return(
        <div className="flex flex-col md:flex-row py-5 items-center">
            <img src="/public/assets/images/homepage/logo/logo_petrolero.jpg" className="w-32 md:flex-none md:w-1/4 lg:w-1/12 pl-10 mb-5 md:mb-0" alt="Club Logo"/>
            <div className="px-4 md:px-20 flex-initial w-full md:w-auto">
                <h2 className="text-[#187F2F] text-3xl md:text-5xl mb-2">Club Social Petrolero</h2>
                <p className="text-[#187F2F] text-base md:text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sagittis risus sapien, quis congue diam sagittis non. Fusce eleifend gravida metus, nec tempus tortor efficitur sit amet. Vivamus sodales condimentum erat, eu pretium orci sagittis a. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla interdum odio lorem, vel consequat eros pretium efficitur. Pellentesque vel accumsan magna, nec blandit lorem. Nam pretium eu nisi et faucibus.</p>
            </div>
        </div>
    );
};
