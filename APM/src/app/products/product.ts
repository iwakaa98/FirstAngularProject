export interface IProduct{
    productId: number;
    productName: string;
    productCode: string;
    releaseDate: string;
    price: number;
    starRating: number;
    description: string;
    imageUrl: string;   

    
}

export class Product implements IProduct {

    constructor(public productId: number,
        public productName: string, 
        public productCode: string, 
        public releaseDate: string, 
        public price: number,
        public starRating: number,
        public description: string,
        public imageUrl: string) {
        
    }
    calculateDiscount(percent: number):number{
        return this.price-(this.price*percent/100);
    }
}