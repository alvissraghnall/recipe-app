import { Gender } from "../model";

const emailCheck = (email: string) => {
    return /(([^<>()\\\.,;:\@"]+(\[^<>()\\\.,;:\@"]+)*)|(".+"))@[*[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+]*/.test(email);
}

export const validators = {
    name: (value: string) => {
        return value && value.length > 5;
    },
    email: (value: string) => {
        return value && emailCheck(value);
    },
    password: (value: string) => {
        return value && value.length >= 8 && /\d/g.test(value);
    },
    confirmPassword: (value: string, pwd: string) => {
        return pwd === value;
    },
    gender: (value: Gender) => {
        return Object.values(Gender).includes(value);
    }
}