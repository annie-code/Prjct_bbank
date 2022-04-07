export class AppUser{
    constructor(public user_Type :number,public username:string,public password:string,
        public UserId:number,public User_FirstName:string,public User_LastName:string,
        public User_Age:number,public User_Gender:number,public User_ContactNo:string,
        public Blood_Group:string,public Height:number,public Weight:number,public Email:string,
        public Location:string,public DOB:string, public BloodRequest: Request[]
        ){        
    }
}