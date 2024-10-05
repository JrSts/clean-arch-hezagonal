import { Request, Response, NextFunction } from "express"
import ProvedorJWT from "./ProvedorJWT"
import Usuario from "@/core/usuario/model/Usuario"
import RepositorioUsuario from "@/core/usuario/service/RepositorioUsusario"

export default function UsuarioMidleware(repositorio: RepositorioUsuario) {
  return async(req: Request, res: Response, next: NextFunction) => {
    const acessoNegado = () => res.status(403).send("Token Inválido!")

    const token = req.headers.authorization?.replace('Bearer ', "")

    if (!token) {
      acessoNegado()
      return
    }

    const provedorJWT = new ProvedorJWT(process.env.JWT_SECRET!)

    const usuarioToken = provedorJWT.obter(token) as Usuario
    const usuario = await repositorio.buscarPorEmail(usuarioToken.email)

    if (!usuario) {
      acessoNegado()
      return;
    }

    (req as any).usuario = usuario

    next();
  }
}