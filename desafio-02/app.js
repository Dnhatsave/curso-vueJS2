new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        mostrarAlerta(){
            alert("Ola Mundo!");
        },
        salvar(event){
            this.valor = event.target.value;
        }
    }
    
})