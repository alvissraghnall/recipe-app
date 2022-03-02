export const signupValidations = {
    name: {
        label: "Full Name",
        validator: "required, minRule",

        minRule: {
            validate(value: string) {
                return value.trim().length >= 3;
            },
            message: "%s too short!",
        },
    },
    email: {
        label: "Email",
        validator: "required, email",
        email: {
          validate(value: string) {
            return /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/.test(value);
          },
          message: "Email address should be like me@example.com",
        },
    },
    password: {
        label: "Password",
        validator: "required, password, minRule",
        password: {
            validate(value: string) {
                return /^\w+$/.test(value);
            },
            message: "%s must be a letter, digit or underline",
        },
        minRule: {
            validate(value: string) {
                return value.trim().length >= 8;
            },
            message: "%s must be at least 8 characters long.",
        },
    },
    rePassword: {
        label: "Password Confirmation",
        validator: "required, password, rePasswordRule",
        rePasswordRule: {
            validate(value: string, data: { password: string}){
                return value === data.password;
            },
            message: 'Passwords do not match.'
        }
    },
    gender: {
        label: "Gender",
        validator: 'required'
    }
};

export const signinValidations = {
    email: {
        label: "Email",
        validator: "required, email",
        email: {
          validate(value: string) {
            return /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/.test(value);
          },
          message: "Email address should be like me@example.com",
        },
    },
    password: {
        label: "Password",
        validator: "required, password, minRule",
        password: {
            validate(value: string) {
                return /^\w+$/.test(value);
            },
            message: "%s must be a letter, digit or underline",
        },
        minRule: {
            validate(value: string) {
                return value.trim().length >= 8;
            },
            message: "%s should be at least 8 characters long",
        },
    }
}