import { Express } from "express";

import LoginUsuario from "@/core/usuario/service/LoginUsuario"
import ProvedorJWT from "./ProvedorJWT";

export default class LoginUsuarioController {
 
  constructor(
    servidor: Express,
    casoDeUso: LoginUsuario,
  ) {
    servidor.post('/api/usuarios/login', async (req, resp) => {
      try {
        const usuario = await casoDeUso.executar({
          email: req.body.email,
          senha: req.body.senha,
        })
        const provedorJWT = new ProvedorJWT(process.env.JWT_SECRET!)
        resp.status(200).send(provedorJWT.gerar(usuario))
      } catch (e: any) {
        resp.status(400).send(e.message)
      }
      
    })
  }


}