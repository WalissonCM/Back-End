// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'


export default class Questao1sController {
    
   q1 ({request}){
      
      const dados = request.body() /* requeste.all */
      
      const tipoPessoa = dados.tipoPessoa
      const cpf = dados.cpf
      const cnpj = dados.cnpj
      const nome = dados.nome
      const sexo = dados.sexo
      const cargo = dados.cargo
      const salario = dados.salario 

      /* const { tipoPessoa, cpf, cnpj, sexo, cargo, salario} = request.body() /* outro jeito*/

      // Questão 1.1
      
      // a)
      
      if(tipoPessoa == 'PF' && !cpf){
         return{
                tipo: 'erro',
                mensagem:"CPF não informado",
                dados: {tipoPessoa, cpf}
         }
      }
      
      // b)
      
      if(tipoPessoa == 'PJ' && !cnpj){
         return{
                tipo: 'erro',
                mensagem:"CNPJ não informado",
                dados: {tipoPessoa, cnpj}
         }  
      }
      
      // c)

      if(tipoPessoa == 'PJ' && !sexo){
         return{tipo: 'erro',
                mensagem:"O campo sexo só é permitido para Pessoa Física",
                dados: {tipoPessoa, sexo}
         }     
      }
      

      // d)

      if(tipoPessoa == 'PJ' && !cargo){
         return{tipo: 'erro',
               mensagem:"O campo cargo só é permitido para Pessoa Física",
               dados: {tipoPessoa, cargo}
         }  
      }

      // e)

      if(cpf && cnpj){
         return{tipo: 'erro',
                mensagem:"Favor informar somente uma opção, CPF ou CNPJ, de acordo com o Tipo de Pessoa",
                dados: {cnpj,cpf}
         }  
      }



      // Questão 1.2
      let salarioreajustado
      /*salarioreajustado = (0.25 * salario ) + salario */
      if (tipoPessoa == 'PJ'){
         salarioreajustado = 1.25 * salario 
      } else if(tipoPessoa == 'PF'){
          return {nome, salario, salarioreajustado}
      }
      
     

         if(sexo == 'M'){

            if(cargo == 'Estagiario'){
                salarioreajustado = (100/100 * salario) + salario /* 2* 1**/   
            } else if(cargo == 'Tecnico'){
                salarioreajustado = 1.6 * salario
            } else if(cargo == 'Gerente'){
               salarioreajustado = 1.3 * salario
            } else if(cargo == 'Diretor'){
               salarioreajustado = 1.2 * salario
            } else if(cargo == 'Presidente'){
               salarioreajustado = 1.1 * salario  
            }  
             
            
         
        } else if(sexo == 'F'){

            if(cargo == 'Estagiario'){
               salarioreajustado = 2 * salario  
            } else if(cargo == 'Tecnico'){
               salarioreajustado = 1.7 * salario
            } else if(cargo == 'Gerente'){
              salarioreajustado = 1.4 * salario
            } else if(cargo == 'Diretor'){
              salarioreajustado = 1.3 * salario
            } else if(cargo == 'Presidente'){
              salarioreajustado = 1.2 * salario  
            }
         }
      }   
   }
  




   
           
           
      



      

      
         
      
     
      

   
       
      

       

