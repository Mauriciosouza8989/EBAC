<script setup>
    import { reactive } from 'vue';
    const nome = 'Maurício';
    const obj ={
    idade: 26,
    filmeFavorito: 'A morte do demônio'
    }

    function dizOla(nome){
    return `${nome} diz olá...`;
    }

    const estado = reactive({
        contador: 0,
        email: '',
        nomes: ['Maurício', 'Luciano', 'Gessica', 'Gisele'],
        campoNome: '',
    })

    function increment(){
    return estado.contador++;
    }
    function decrement(){
    return estado.contador--;
    }

    function changeEmail(event){
    estado.email = event.target.value;
    }
</script>

<template>
    <h1>{{ dizOla(nome) }}</h1>
    <hr>
    <span>{{ estado.contador }}</span>
    <br>
    <button @click="increment" type="button">+</button>
    <button @click="decrement" type="button">-</button>
    <br>
    <hr>
    <h3>{{ estado.email }}</h3>
    <input type="email" @keyup="changeEmail">
    <br> 
    <hr>
    <h2>Nomes:</h2>
    <ul>
        <li v-for="nome in estado.nomes">
            {{ nome }}
        </li>
    </ul>

    <input @keyup="event => estado.campoNome = event.target.value" type="text" placeholder="Adicione um nome">
    <button @click="cadastraNome" type="button">Adicionar nome</button>
</template>

<style scoped>
    span{
    font-size: 40px;
    }
    button{
    margin-right: 10px;
    }
</style>
