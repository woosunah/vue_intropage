<template>
  <div class="contact">
    <h1>#04 CONTACT</h1>
    <div class="form">
      <v-text-field
        label="Name"
        dark
        class="contact-text-field"
        v-model="name"
      ></v-text-field>
      <v-text-field
        label="Email"
        dark
        class="contact-text-field"
        v-model="email"
      ></v-text-field>
      <v-text-field
        label="Phone"
        dark
        class="contact-text-field"
        v-model="subject"
      ></v-text-field>
      <v-textarea dark label="Message" v-model="message"></v-textarea>
      <v-row justify="center"
        ><v-btn block color="#ccc" @click="requestSendEmail">
          submit</v-btn
        ></v-row
      >
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.contact {
  background-image: url('https://picsum.photos/1920/1080?random');
  height: 100vh;
}
.form {
  margin: 50px auto;
  width: 800px;
  background-color: rgba(63, 60, 60, 0.9);
  padding: 30px;
}
</style>
