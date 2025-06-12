<template>
  <div class="container mx-auto p-6">
    <div class="grid grid-cols-2 gap-4">
      <div class="w-full h-64 flex items-center justify-center bg-gray-100 p-4 overflow-hidden">
        <MapSection class="w-full h-full" />
      </div>
      <div class="w-full h-64 flex items-center justify-center bg-gray-100 p-4 overflow-hidden">
        <ContactInfo class="w-full h-full" />
      </div>
      <div class="w-full h-64 flex items-center justify-center bg-gray-100 p-4 overflow-hidden">
        <ContactForm class="w-full h-full" />
      </div>
      <div class="w-full h-64 flex items-center justify-center bg-gray-100 p-4 overflow-hidden">
        <ImageSection class="w-full h-full" />
      </div>
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
