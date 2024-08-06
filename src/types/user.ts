export type UserType = {
    _id: string;
    username: string;
    password: string;
    prefix: string;
    first_name: string;
    last_name: string;
    phone: string;
    role: string;
    schoolId: {
        name: string;
    };
    status?: string;
}