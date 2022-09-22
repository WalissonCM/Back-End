

import Conta from "App/Models/Conta"

export default class ContasController {

  index(){
    return Conta.all()
  }

  store({request}){

    const dados = request.only(["tipo", "banco", "agencia", "saldo", "data_criacao", "cliente_id"])
  
    return Conta.create(dados)

  }

}


