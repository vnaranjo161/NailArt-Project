function validateEmail(email: string): void {
    const regexCorreo: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexCorreo.test(email)) {
        throw new Error('Invalid email');
    }
}


export default validateEmail