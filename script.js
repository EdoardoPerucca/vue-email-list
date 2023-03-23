
/*
Attraverso l'apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
*/

const { createApp } = Vue;

createApp({
    // una lista di todo
    // che posso vedere e eliminare quelli che ho già fatto

    data() {
        return {

            emails: [],

        }
    },

    created() {
        this.multipleEmail(10);
    },


    methods: {

        multipleEmail(quantity) {

            for (let i = 0; i < quantity; i++) {

                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((res) => {

                    const newEmail = res.data.response;

                    this.emails.push(newEmail);
                });

            }

        },
    },


}).mount('#app');