class Auth{
    private correo: string;
    private contrasena: string
    constructor(
        correo: string,  contrasena: string
    ) {
        this.correo = correo;
        this.contrasena = contrasena;
    }
    

	public get $correo(): string {
		return this.correo;
	}

    public get $contrasena(): string {
		return this.contrasena;
	}

	public set $correo(value: string) {
		this.correo = value;
	}

	public set $contrasena(value: string) {
		this.contrasena = value;
	}


}

export default Auth;