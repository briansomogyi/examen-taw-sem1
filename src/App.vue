<template>
  <div class="container mx-auto p-6">
    <div class="grid grid-cols-2 gap-4">
      <MapSection />
      <ContactInfo />
      <ContactForm />
      <ImageSection />
    </div>
  </div>
</template>

<script setup>
import MapSection from "./components/MapSection.vue";
import ContactInfo from "./components/ContactInfo.vue";
import ContactForm from "./components/ContactForm.vue";
import ImageSection from "./components/ImageSection.vue";
</script>

<style>
@import 'bootstrap-icons/font/bootstrap-icons.css';
@import 'tailwindcss';
</style>
