const vm =Vue.createApp({
    data() {
        return {
            age: 1,
            test: 1,
            first_name: 'hamid',
            mid_name: 'h',
            last_name: 'reza',
            text_title: "http://google.com"
        }
    },
    methods : {
        calc() {
            this.test++
        },
        updateLastName (msg, event) {
            
            console.info(msg)
            this.last_name = event.target.value
        }
    },
    computed: {
        full_name() {
            console.info("2342342")
            
            return `${this.first_name} ${this.last_name.toUpperCase()}`
        },
    },
    watch: {
        test(newV, oldV) {
            setTimeout(() => {
                this.test = 23
            }, 3000)
        }
    }
}).mount('#app1');


