export class SignUp {
  private name?: string;
  private lastname?: string;
  private username?: string;
  private password?: string;
  private email?:string;
  private roles: string = "USER";

  // Constructor
  constructor(name?: string, lastname?: string, username?: string, password?: string, email?:string, roles: string = 'USER') {
    this.name = name;
    this.lastname = lastname;
    this.username = username;
    this.password = password;
    this.email = email;
    if (roles) {
      this.roles = roles;
    }
  }

  // Getter methods
  getName(): string | undefined {
    return this.name;
  }

  getEmail(): string | undefined {
    return this.email;
  }

  getLastname(): string | undefined {
    return this.lastname;
  }

  getUsername(): string | undefined {
    return this.username;
  }

  getPassword(): string | undefined {
    return this.password;
  }

  getRoles(): string {
    return this.roles;
  }

  // Setter methods
  setName(name: string): void {
    this.name = name;
  }

  setEmail(email: string): void {
    this.email = email;
  }


  setLastname(lastname: string): void {
    this.lastname = lastname;
  }

  setUsername(username: string): void {
    this.username = username;
  }

  setPassword(password: string): void {
    this.password = password;
  }

  setRoles(roles: string): void {
    this.roles = roles;
  }
}
