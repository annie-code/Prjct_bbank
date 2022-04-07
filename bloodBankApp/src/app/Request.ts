export class Request{
    constructor(public RequestID:number, public UserId: number, public Stock_ID:number, 
        public firstName:string,public lastName:string,public email:string,public userName:string,
        public location:string,
        public description :string ,public quantity:number,public contactNo:number,
       public Status:string){}
}