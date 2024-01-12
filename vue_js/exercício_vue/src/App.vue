<script setup>
import { reactive } from 'vue';
import Formulario from './components/Formulario.vue';

    const estado = reactive({
        option: 'adicao',
        firstOperator: 0,
        secondOperator: 0,
        operator: '+',
    })
    function calculo(){
        const {option, firstOperator, secondOperator} = estado;
        switch(option){
            case 'adicao': return changeOperatorAndCalc()
            case 'subtracao': return changeOperatorAndCalc()
            case 'multiplicacao': return changeOperatorAndCalc()
            case 'divisao':return changeOperatorAndCalc()
        }
    }
    function changeOperatorAndCalc(){
        const {option, firstOperator, secondOperator} = estado;
        if(option == 'adicao'){
            estado.operator = '+' 
            return Number(firstOperator) + Number(secondOperator);
        }
        if(option == 'subtracao'){ 
            estado.operator = '-';
            return  Number(firstOperator) - Number(secondOperator);
        }
        if(option == 'multiplicacao'){ 
            estado.operator = '*' 
            return  Number(firstOperator) * Number(secondOperator);
        }
        if(option == 'divisao'){ 
            estado.operator = '/' 
            if(estado.secondOperator <= 0 ){
                estado.secondOperator = 1
            }
            return  Number(firstOperator) / Number(secondOperator);
        }
    }
    function getFirstValue(event){
        return estado.firstOperator = event.target.value;
    }
    function getSecondValue(event){
        return estado.secondOperator = event.target.value;
    }

</script>

<template>
    <div class="container">
        <Formulario
            :estado="estado" 
            :get-first-value="getFirstValue" 
            :get-second-value="getSecondValue"
            :calculo="calculo"
        />
    </div>
</template>

<style scoped>

</style>
