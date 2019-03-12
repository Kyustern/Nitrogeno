let vm = new Vue({
    el: "#app",
    data: {
        files: [],
        isLogged: false,
        login: "",
        password: ""
    },
    methods: {
        async log() {
            const res = await axios.post('/api/auth', {
                login: this.login,
                password: this.password,
            })
            this.isLogged = res.data
        },
        previewFiles() {
            this.files = this.$refs.myFiles.files

        },
        async changeRingtone() {
            if (this.files.lenght === 0) {
                return null
            }
            const data = new FormData();
            const file = this.files[0];

            data.append('music', file, "ringtone.mp3")

            const config = {
                header: {
                    'Content-Type': 'multipart/form-data'
                }
            }
            const res = await axios.post('/api/upload', data, config)
            console.log(res)
        }
    }
})