const vm =Vue.createApp({
    data() {
        return {
            test: 1,
            first_name: 'hamid',
            last_name: 'reza',
            text_title: "http://google.com"
        }
    },
    methods : {
        calc() {
            this.test++
        },
        full_name() {
            return `${this.first_name} ${this.last_name}`
        }
    }
}).mount('#app1');


