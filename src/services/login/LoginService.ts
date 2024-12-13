type LoginData = {
    [k: string]: FormDataEntryValue;
}

export async function login(data: LoginData) {
    try {
        if (data.email.toString()=== 'admin@oxford.com'
            && data.password.toString() === 'admin123') {
            return {success : true}
        }
    } catch (error) {
        console.log(error)
    }
    return {success : false}
}