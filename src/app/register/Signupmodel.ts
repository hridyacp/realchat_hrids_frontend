export class SignupModel{
    constructor( 
        public lname: String | null,
        public email: String | null,
        public password: String | null,
        public confirmpwd: String | null,
        public online:String |null
    ){}
}