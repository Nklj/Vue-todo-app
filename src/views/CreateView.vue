<template>
  <div class="row">
    <div class="col s6 offset-s3">
      <h1>Создать задачу</h1>

      <form @submit.prevent="submitHandler">
        <div class="input-field">
          <input id="title" v-model="title" type="text" class="validate" required>
          <label for="title">Название</label>
          <span class="helper-text" data-error="Title is required"></span>
        </div>

        <div class="input-field">
          <textarea v-model="description" id="description" class="materialize-textarea"></textarea>
          <label for="description">Описание</label>
          <span class="character-counter" style="float: right; font-size: 12px;">{{description.length}}/2048</span>
        </div>

        <input type="text" ref="datepicker">

        <button class="btn" type="submit">Создать задачу</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'create',
  data: () => ({
    description: '',
    title: '',
    date: null,
  }),
  mounted() {    
    this.date = M.Datepicker.init(this.$refs.datepicker, {
      format: 'dd.mm.yyyy',
      defaultDate: new Date(),
      setDefaultDate: true
    })
  },
  methods: {
    submitHandler() {
      const task = {
        title: this.title,
        description: this.description,
        id: Date.now(),
        status: 'активна',
        date: this.date.date
      }

      this.$store.dispatch('createTask', task)
      this.$router.push('/list')
    }
  },
  destroyed() {
    if (this.date && this.date.destroy) {
      this.date.destroy()
    }    
  }
}
</script>
