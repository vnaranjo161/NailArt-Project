class User {
    private identification: string;
    private firstName: string;
    private lastName: string;
    private address: string;
    private phoneNumber: string;
    private email: string;
    private password: string;

    constructor(
        identification: string, firstName: string,
        lastName: string, address: string,
        phoneNumber: string, email: string, password: string
    ) {
        this.identification = identification;
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.password = password;
    }

    public get $identification(): string {
        return this.identification;
    }

    public get $firstName(): string {
        return this.firstName;
    }

    public get $lastName(): string {
        return this.lastName;
    }

    public get $address(): string {
        return this.address;
    }

    public get $phoneNumber(): string {
        return this.phoneNumber;
    }

    public get $email(): string {
        return this.email;
    }

    public get $password(): string {
        return this.password;
    }

    public set $identification(value: string) {
        this.identification = value;
    }

    public set $firstName(value: string) {
        this.firstName = value;
    }

    public set $lastName(value: string) {
        this.lastName = value;
    }

    public set $address(value: string) {
        this.address = value;
    }

    public set $phoneNumber(value: string) {
        this.phoneNumber = value;
    }

    public set $email(value: string) {
        this.email = value;
    }

    public set $password(value: string) {
        this.password = value;
    }
}

export default User;
