import db from '../../services/db';
import { User, LoginUser, RegisterUser } from '../../models/models';

type AuthQuery = {
    login: (user: LoginUser) => Promise<any>,
    register: (user: RegisterUser) => Promise<any>
}

const authQuery: AuthQuery = {
    login: async (user: LoginUser) => {
        return new Promise((resolve, reject) => {
            const query = "SELECT pseudo, password FROM user WHERE wallet=?";
            db.execute(query, [user.wallet], (err, result: [any]) => {
                if (err)
                    return reject(err);
                return resolve(result[0]);
            });
        });
    },
    register: async (user: RegisterUser) => {
        return new Promise((resolve, reject) => {
            const query = "INSERT INTO user(pseudo, wallet, password) VALUES(?, ?, ?)";
            db.execute(query, [user.pseudo, user.wallet, user.password], (err, result) => {
                if (err)
                    return reject(err);
                return resolve(result);
            });                
        })
    }
}

export default authQuery;