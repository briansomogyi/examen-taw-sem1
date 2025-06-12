<template>
  <div class="mx-auto max-w-md rounded-lg bg-white p-6 shadow-md">
    <h2 class="mb-4 text-lg font-bold text-gray-700">Find Us Here</h2>
    <iframe
      :src="mapUrl"
      width="600"
      height="450"
      style="border: 0"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// const locationQuery = "YOUR_LOCATION"; // Example: "New York, NY"
const mapUrl = ref(
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d86951.97966953689!2d21.867233142656872!3d47.074573346933626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x474647e368762353%3A0x1b55a486d65d5344!2sOradea!5e0!3m2!1sro!2sro!4v1675189297398!5m2!1sro!2sro'
)
</script>
