import { validateEmail, validatePassword } from "../../../utils/validationUtils"

export default function UseLoginServices(){
    const login = async(email,password) => {
        let errors = {}
        if(!validateEmail(email)){
            errors = {
                emailError:"有効なメールアドレスを入力してください",
                ...errors
            }
        }

        if(!validatePassword(password)){
            errors = {
                ...errors,
                passwordError: "12文字以上20文字以内で、半角の大文字, 小文字, 数字を含めてください。"
            }
        }

        if(!validateEmail(email) || !validatePassword(password)){
            return {
                status:false,
                message:"Validation failed",
                errors:errors
            };
        }

        if(email="admin@gmail.com"){
            if(password==="MainAdmin12345"){
                console.log("here")
                return{
                    status:true,
                    message:"Login successfull",
                    errors:{}
                }
            }else{
                return{
                    status: false,
                    message:"Login failed",
                    errors:{
                        ...errors,
                        mainError:"Password mismatched"
                    }
                }
            }
        }
    }


    return{
        login
    }
}