// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ExerciciosController {

    deversala ({request}){
    
       const salariominimo = request.input('salarioMinimo') *1
       const horasTrabalhadas = request.input('horasTrabalhadas') *1
       const dependentes = request.input('dependentes') *1
       const horasExtras = request.input('horasextras') *1

       const valordaHora = 0.2 * salariominimo /* ou 1/5 */
       const salarioMes = horasTrabalhadas * valordaHora
       const acrescimoDependente = dependentes * 32
       const valorHoraExtra = horasExtras * (valordaHora * 0.5 + valordaHora)  
       /* 50% , 50 + 25 = 75 ou const valorHoraExtra = horasExtras * (valordaHora * 1.5)*/
       
       const salarioBruto = salarioMes + acrescimoDependente + valorHoraExtra
    
       let imposto 
       if(salarioBruto < 2000){
           imposto = 0

        } else if(salarioBruto  <= 5000){
           imposto = 0.1 * salarioBruto
        } else{
            imposto = 0.2 * salarioBruto
        }

        const salarioliquido = salarioBruto - imposto

        let gratificaçao
        if(salarioliquido <= 3500){
            gratificaçao = 1000
        }else {
            gratificaçao = 500 
        }
        /* const gratificacao = salarioliquido <= 3500 ? 1000 : 500,  if e else */

        const salarioReceber = salarioliquido + gratificaçao
       
       return {salarioReceber}
    
    
       /*const salariominimo = dados.salarioMinimo *1 */
    }
}
