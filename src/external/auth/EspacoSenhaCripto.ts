import ProvedorCriptografia from "@/core/usuario/service/ProvedorCriptografia";

export default class EspacoSenhaCripto implements ProvedorCriptografia {
 
  criptografar(senha: string): string {
      return senha.split('').join(' ')
  }

  comparar(senha: string, senhaCriptografada: string): boolean {
    return this.criptografar(senha) === senhaCriptografada
  }
}