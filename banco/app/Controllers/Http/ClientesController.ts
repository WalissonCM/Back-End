
import Cliente from "App/Models/Cliente"

export default class ClientesController {

     index(){
        return Cliente.all()
     }
 
     store({request}){ /* request.all()*/

        const dados = request.only(["nome", "cpf", "datadenascimento", "cep", "endereco", "salario", "telefone"])
      
        return Cliente.create(dados)

     }  

}