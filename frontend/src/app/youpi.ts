export interface IYoupi {
    chaplam: string;
    opt?:number;
}

export class CYoupi implements IYoupi {
    constructor(public chaplam:string) {
    }
}



const AYoupi : IYoupi = {chaplam:'toto'};

const ACYoupi : CYoupi = new CYoupi('lala');


export {AYoupi, ACYoupi};