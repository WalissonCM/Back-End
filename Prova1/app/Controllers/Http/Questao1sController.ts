// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class Questao1sController {
    
   ex1 ({request}){
      
      const dados = request.body()
      const nome = dados.nome 
      const tipoPessoa = dados.tipoPessoa
      const cpf = dados.cpf
      const cnpj = dados.cnpj
      const sexo = dados.sexo
      const cargo = dados.cargo
      const salario = dados.salario 
      
      let imprima

      if (tipoPessoa == 'PF' && cpf == ''){
         imprima = "cpf nao informado"
         return imprima
      } 
      if (tipoPessoa == 'Pj' && cnpj == ''){
         imprima = "cnpj nao informado"
         return imprima
      } 
   
      if (tipoPessoa == 'Pj' && sexo == ''){
         imprima = "O campo sexo só é permitido para Pessoa Física"
         return imprima
      } 
      
      if (tipoPessoa == 'Pj' && cargo == ''){
         imprima = "O campo cargo só é permitido para Pessoa Física"
         return imprima
      } 
      
      if (cpf == '123456678' && cnpj == '987654321'){
         imprima = "Favor informar somente uma opção, CPF ou CNPJ, de acordo com o Tipo de Pessoa"
         return imprima
      } 
    
      let reajuste
      
      if (tipoPessoa == 'PF' && cargo == 'Estagiário' && sexo == 'Masculino' && salario == 1000){
         reajuste = salario * 1 * salario
      }
      else if (tipoPessoa == 'PF' && cargo == 'Técnico' && sexo == 'Masculino' && salario == 3000){
         reajuste = salario * 0.6 * salario
      }
      else if (tipoPessoa == 'PF' && cargo == 'Gerente' && sexo == 'Masculino' && salario == 10000){
         reajuste = salario * 0.3 * salario
      }
      else if (tipoPessoa == 'PF' && cargo == 'Diretor' && sexo == 'Masculino' && salario == 30000){
         reajuste = salario * 0.2 * salario
      }
      else if (tipoPessoa == 'PF' && cargo == 'Presidente' && sexo == 'Masculino'&& salario == 50000){
         reajuste = salario * 0.1 * salario
      }

      else if (tipoPessoa == 'PF' && cargo == 'Estagiário' && sexo == 'Feminino' && salario == 1000){
         reajuste = salario * 1 * salario
      }
      else if (tipoPessoa == 'PF' && cargo == 'Técnico' && sexo == 'Feminino' && salario == 3000){
         reajuste = salario * 0.7 * salario
      }
      else if (tipoPessoa == 'PF' && cargo == 'Gerente' && sexo == 'Feminino' && salario == 10000){
         reajuste = salario * 0.4 * salario
      }
      else if (tipoPessoa == 'PF' && cargo == 'Diretor' && sexo == 'Feminino' && salario == 30000){
         reajuste = salario * 0.3 * salario
      }
      else if (tipoPessoa == 'PF' && cargo == 'Presidente' && sexo == 'Feminino' && salario == 50000){
         reajuste = salario * 0.2 * salario
      }
      
      else if (tipoPessoa == 'PJ' && cargo == 'Estagiário' && sexo == 'Masculino' && salario == 1000){
         reajuste = salario * 2.5 * salario
      }
      else if (tipoPessoa == 'PJ' && cargo == 'Técnico' && sexo == 'Masculino' && salario == 3000){
         reajuste = salario * 2.5 * salario
      }
      else if (tipoPessoa == 'PJ' && cargo == 'Gerente' && sexo == 'Masculino' && salario == 10000){
         reajuste = salario * 2.5 * salario
      }
      else if (tipoPessoa == 'PJ' && cargo == 'Diretor' && sexo == 'Masculino' && salario == 30000){
         reajuste = salario * 2.5 * salario
      }
      else if (tipoPessoa == 'PJ' && cargo == 'Presidente' && sexo == 'Masculino' && salario == 50000){
         reajuste = salario * 2.5 * salario
      }
      
      else if (tipoPessoa == 'PJ' && cargo == 'Estagiário' && sexo == 'Feminino' && salario == 1000){
         reajuste = salario * 2.5 + salario
      }
      else if (tipoPessoa == 'PJ' && cargo == 'Técnico' && sexo == 'Feminino' && salario == 3000){
         reajuste = salario * 2.5 + salario
      }
      else if (tipoPessoa == 'PJ' && cargo == 'Gerente' && sexo == 'Feminino' && salario == 10000){
         reajuste = salario * 2.5 + salario
      }
      else if (tipoPessoa == 'PJ' && cargo == 'Diretor' && sexo == 'Feminino' && salario == 30000){
         reajuste = salario * 2.5 + salario
      }
      else if (tipoPessoa == 'PJ' && cargo == 'Presidente' && sexo == 'Feminino' && salario == 50000){
         reajuste = salario * 2.5 + salario
      }
      return {tipoPessoa, cargo, sexo, salario, reajuste}
   
   
   
   }
     
     







}

       
      
      

      



      
      

      

   
       
      

       

