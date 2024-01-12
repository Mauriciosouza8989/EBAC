<script setup>
    const props = defineProps(['estado', 'getFirstValue', 'getSecondValue', 'calculo'])
</script>
<template>
      <div class=" mt-5 d-flex flex-column align-items-center">
            <h1>Faça um calculo</h1>
        <form>
            <div class="row mt-3">
                <div class="col">
                    <label for="calculo-options">Escolha a opção do calculo</label>
                    <select @change="event=>props.estado.option=event.target.value" id="calculo-options" class="form-control">
                        <option value="adicao">Adição</option>
                        <option value="subtracao">Subtração</option>
                        <option value="multiplicacao">Multiplicação</option>
                        <option value="divisao">Divisão</option>
                    </select>
                </div>
            </div>
            <div class="row mt-3">
                <h3 class="mt-5 mb-3" >Resultado: <span class="col">{{ props.calculo() }}</span></h3>
                <div class="d-flex gap-1">
                    <input @keyup="props.getFirstValue" class="form-control" type="number" placeholder="Primeiro operador">
                    <span class="h3">{{ props.estado.operator }}</span>
                    <input @keyup="props.getSecondValue" class="form-control" type="number" placeholder="Segundo operador">
                </div>
            </div>
        </form>
        </div>
</template>