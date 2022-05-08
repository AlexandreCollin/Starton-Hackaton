type User = {
    wallet: string,
    pseudo: string
};

type RegisterUser = {
    wallet: string,
    pseudo: string,
    password: string,
};

type LoginUser = {
    wallet: string,
    password: string,
};

export default User;

export { User, RegisterUser, LoginUser }