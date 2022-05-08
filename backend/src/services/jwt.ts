import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

type JwtService = {
    hash: (str: string) => string,
    generateToken: (obj: any) => string,
    comparePassword: (password1: string, password2: string) => boolean
};

const jwtService: JwtService = {
    hash: (str: string) => {
        const salt = bcrypt.genSaltSync(10);
        
        return bcrypt.hashSync(str, salt);
    },
    generateToken: (obj: any) => {
        return jwt.sign(obj, `${process.env.JWT_SECRET}`);
    },
    comparePassword: (password1: string, password2: string) => {
        return bcrypt.compareSync(password1, password2);
    }
};

export default jwtService;