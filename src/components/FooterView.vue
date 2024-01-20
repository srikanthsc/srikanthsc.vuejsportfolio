<template>
  <v-footer>
      <v-card
        elevation="0"
        rounded="0"
        width="100%"
        class="bg-grey text-center"
      >
        
        <div>
          <br>
          <br>
          <font-awesome-icon :icon="['fab', 'facebook-f']" class="social-icon facebook-icon" />
    <font-awesome-icon :icon="['fab', 'twitter']" class="social-icon twitter-icon" />
    <font-awesome-icon :icon="['fab', 'youtube']" class="social-icon youtube-icon" />
    <br>
    Connect with Facebook, Twitter, and YouTube
   
  </div>
        <v-card-text class="text-white">
          @ {{ new Date().getFullYear() }} —
          <strong>Srikanthsc All Rights Reserved</strong>
        </v-card-text>
      </v-card>
    </v-footer>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';


export default {
  components: {
    FontAwesomeIcon,
    
  },
}
</script>

<style>
.v-footer {
  padding: 8px 0 !important;
}
.social-icon {
  margin-right: 10px; /* Adjust the margin as needed */
  font-size: 24px; /* Adjust the font size as needed */
}

.facebook-icon {
  color: #1877f2; /* Facebook color */
}

.twitter-icon {
  color: #1da1f2; /* Twitter color */
}

.youtube-icon {
  color: #ff0000; /* YouTube color */
}
</style>