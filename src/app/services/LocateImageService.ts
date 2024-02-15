import Image from "../interfaces/Image";

export default class LocateImageService {
    private static instance: LocateImageService;
    private data: { [key: string]: Image };
    private constructor() {
        this.data = {};
    }

    public static getInstance(): LocateImageService {
        if (!LocateImageService.instance) {
            LocateImageService.instance = new LocateImageService();
        }

        return LocateImageService.instance;
    }

    public async getImages(page: string, component: string){
        const response = await fetch(`./../../public/locales/app/${page}/images.json`);
        this.data = await response.json();
        const dataArray = Object.values(this.data);
        const filteredArray = dataArray.filter(item => item.component === component);
        return filteredArray;
    }

    // public async getSingleImage(page: string, component: string){
    //     const response = await fetch(`./../../public/locales/app/${page}/images.json`);
    //     this.data = await response.json();
    // }
}