import bcrypt from 'bcrypt'

export default function crypt(string){
    return bcrypt.hashSync(string, 10)
}