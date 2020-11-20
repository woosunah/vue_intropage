<template>
  <div id="contact">
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
        label="subject"
        dark
        class="contact-text-field"
        v-model="subject"
      ></v-text-field>
      <v-textarea dark label="Message" v-model="message"></v-textarea>
      <v-row justify="center"
        ><v-btn block color="#fff" @click="sendEmail"> submit</v-btn></v-row
      >
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import sendGrid from '@/config/sendGrid.json';
export default {
  data() {
    return {
      name: '',
      email: '',
      subject: '',
      message: '',
    };
  },
  methods: {
    sendEmail() {
      const options = {
        method: 'POST',
        url: 'https://rapidprod-sendgrid-v1.p.rapidapi.com/mail/send',
        headers: {
          'content-type': 'application/json',
          'x-rapidapi-key': sendGrid.key,
          'x-rapidapi-host': 'rapidprod-sendgrid-v1.p.rapidapi.com',
        },
        data: {
          personalizations: [
            { to: [{ email: 'sunah5011@gmail.com' }], subject: this.subject },
          ],
          from: { email: this.email },
          content: [
            {
              type: 'text/plain',
              value:
                '안녕하세요 제 이름은' + this.name + '입니다.' + this.message,
            },
          ],
        },
      };

      axios
        .request(options)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
#contact {
  // background-image: url('https://picsum.photos/1920/1080?random');
  background-image: url('../../assets/img/mint.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
}
.form {
  margin: 70px auto;
  width: 800px;
  background-color: rgba(63, 60, 60, 0.7);
  padding: 40px;
}

h1 {
  margin-right: 30px;
}

@media only screen and(max-width:767px) {
  .form {
    width: 400px;
  }
}
</style>
