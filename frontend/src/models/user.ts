type User = {
    wallet: string,
    pseudo: string
};

type LoginUser = {
    wallet: string,
    password: string
}

type RegisterUser = {
    wallet: string,
    pseudo: string,
    password: string
}

export default User;
export type { User, LoginUser, RegisterUser };