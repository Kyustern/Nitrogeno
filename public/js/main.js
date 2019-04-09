/* eslint no-new: */
new Vue({
  el: '#app',
  data: {
    files: [],
    isLogged: false,
    choosen: 1,
    login: '',
    password: '',
    progress: false
  },
  methods: {
    reloadPlayer () {
      const container = document.getElementById('player')
      const content = container.innerHTML
      container.innerHTML = content
    },
    async log () {
      const res = await axios.post('/api/auth', {
        login: this.login,
        password: this.password
      })
      this.isLogged = res.data
    },
    previewFiles () {
      this.files = this.$refs.myFiles.files
      this.choosen = 2
    },
    async changeRingtone () {
      if (this.files.lenght === 0) {
        return null
      }
      this.progress = true
      const data = new FormData()
      const file = this.files[0]

      data.append('music', file, 'ringtone.mp3')

      const config = {
        header: {
          'Content-Type': 'multipart/form-data'
        }
      }
      await axios.post('/api/upload', data, config)
      this.progress = false
      this.choosen = 3
      this.reloadPlayer()
    }
  }
})
