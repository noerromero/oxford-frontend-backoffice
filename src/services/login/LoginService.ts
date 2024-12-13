type LoginData = {
    [k: string]: FormDataEntryValue;
}

export async function login(data: LoginData) {
    try {
        /*const request = safeParse(LoginSchema, { 
            email: data.email.toString(), 
            password: data.password.toString()
         });*/

        //const url = `${import.meta.env.VITE_API_URL}/api/login`
        //const { data: response } = await axios.post(url, requestData)
        
        if (data.email.toString()=== 'admin@oxford.com'
            && data.password.toString() === 'admin123') {
            return {success : true}
        }
    } catch (error) {
        console.log(error)
    }
    return {success : false}
}