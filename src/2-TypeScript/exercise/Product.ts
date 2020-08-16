export class Product {
    constructor(
        public id?: number,
        public name?: string,
        public category?: string,
        public price?: number
    ) { 
        this.id=0;
        this.name="noname product";
        this.price=0;
        this.category="no category";
    }
}

