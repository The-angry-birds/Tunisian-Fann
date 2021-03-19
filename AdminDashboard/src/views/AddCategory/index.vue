<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item value="name" label="Title">
        <el-input v-model="form.title" />
      </el-form-item>
      <el-form-item label="Description">
        <el-input v-model="form.desc" type="textarea" />
      </el-form-item>
      <el-form-item label="Image URL">
        <el-input v-model="form.imgUrl" type="textarea" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click.prevent="handleSubmit()">Create</el-button>
        <el-button @click="onCancel">Cancel</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      name: '',
      description: '',
      imageUrl: '',
      form: {

      }
    }
  },
  methods: {
    onSubmit() {
      this.$message('submit!')
    },
    onCancel() {
      this.$message({
        message: 'cancel!',
        type: 'warning'
      })
    },
    handleSubmit() {
      const create = {
        name: this.name,
        description: this.description,
        imageUrl: this.imageUrl
      }
      axios.post('http://localhost:3000/api/categories', create)
        .then((res) => {
          console.log(create)
          console.log(res)
        })
        .catch((err) => {
          console.log(err)
        })
    }

  }
}
</script>

<style scoped>
.line{
  text-align: center;
}
</style>

