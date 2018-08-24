export class AddTattoo{
    constructor(
        public nameTattoo: string,
        public model: string,
        public description: string,
        public image: string,
        private userId?: string,
    ){}
}