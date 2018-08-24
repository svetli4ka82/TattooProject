export class TattooList {
    constructor(
        public id: string,
        public nameTattoo: string,
        public model: string,
        public description: string,
        public image: string,
        private userId?:string
    ) { }
}