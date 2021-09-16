new Vue({
    el: '#desafio',
    data: {
        nome: 'Dercio Nhatsave',
        idade: 27,
        linkVue: 'https://vuejs.org/images/logo.svg'
    },
    methods:{
        geradorNumero(){
            return Math.random();
        }
    }
})