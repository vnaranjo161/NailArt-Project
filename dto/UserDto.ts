class User {
    private identificacion: string;
    private nombre: string;
    private apellido: string;
    private direccion: string;
    private telefono: string;
    private correo: string;
    private contrasena: string
    constructor(
        identificacion: string, nombre: string,
        apellido: string, direccion: string, 
        telefono: string, correo: string,  contrasena: string
    ) {
        this.identificacion = identificacion;
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.telefono = telefono;
        this.correo = correo;
        this.contrasena = contrasena;
    }


    
	public get $identificacion(): string {
		return this.identificacion;
    }
    
	public get $nombre(): string {
		return this.nombre;
    }
	
	public get $apellido(): string {
		return this.apellido;
	}

	public get $direccion(): string {
		return this.direccion;
    }
	
	public get $telefono(): string {
		return this.telefono;
    }

	public get $correo(): string {
		return this.correo;
	}

    public get $contrasena(): string {
		return this.contrasena;
	}

	public set $identificacion(value: string) {
		this.identificacion = value;
	}


	public set $nombre(value: string) {
		this.nombre = value;
	}

	public set $apellido(value: string) {
		this.apellido = value;
	}

	public set $direccion(value: string) {
		this.direccion = value;
	}


	public set $telefono(value: string) {
		this.telefono = value;
	}

	public set $correo(value: string) {
		this.correo = value;
	}
    
    public set $contrasena(value: string) {
        this.contrasena = value;
	}

    
}

export default User;