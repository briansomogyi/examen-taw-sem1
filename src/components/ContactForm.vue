<template>
  <div class="mx-auto max-w-md rounded-lg bg-white p-6 shadow-md">
    <form v-if="showForm" @submit.prevent="handleSubmit">
      <div class="mb-4 flex items-center space-x-3">
        <i class="bi bi-person-fill text-gray-700"></i>
        <label class="block text-gray-700">Name</label>
      </div>
      <input
        v-model="formData.name"
        type="text"
        class="w-full rounded-md border px-3 py-2"
      />

      <div class="mb-4 flex items-center space-x-3">
        <i class="bi bi-envelope-fill text-gray-700"></i>
        <label class="block text-gray-700">E-Mail</label>
      </div>
      <input
        v-model="formData.email"
        type="email"
        :class="emailClass"
        class="w-full rounded-md border px-3 py-2"
      />
      <p v-if="emailLengthMessage" class="mt-1 text-sm text-gray-500">
        {{ emailLengthMessage }}
      </p>

      <div class="mb-4 flex items-center space-x-3">
        <i class="bi bi-telephone-fill text-gray-700"></i>
        <label class="block text-gray-700">Phone</label>
      </div>
      <input
        v-model="formData.phone"
        type="tel"
        class="w-full rounded-md border px-3 py-2"
      />

      <div class="mb-4 flex items-center space-x-3">
        <i class="bi bi-bookmark-fill text-gray-700"></i>
        <label class="block text-gray-700">Subject</label>
      </div>
      <input
        v-model="formData.subject"
        type="text"
        class="w-full rounded-md border px-3 py-2"
      />

      <div class="mb-4 flex items-center space-x-3">
        <i class="bi bi-chat-left-text-fill text-gray-700"></i>
        <label class="block text-gray-700">Message</label>
      </div>
      <textarea
        v-model="formData.message"
        class="w-full rounded-md border px-3 py-2"
      ></textarea>

      <button
        type="submit"
        class="flex items-center space-x-2 rounded-md bg-yellow-500 px-4 py-2 text-white"
      >
        <i class="bi bi-send-fill"></i> <span>Submit</span>
      </button>
    </form>

    <!-- Message displayed after submission -->
    <div v-if="!showForm" class="text-center text-xl font-bold text-green-600">
      Thank You!
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, computed, watch, defineEmits } from 'vue'
import axios from 'axios'

const emit = defineEmits(['formSubmitted'])
const showForm = ref(true)

const formData = reactive({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
})

const emailLengthMessage = computed(() => {
  const length = formData.email.length
  if (length >= 1 && length <= 10) return 'Short Email'
  if (length >= 11 && length <= 20) return 'Medium Email'
  if (length >= 21 && length <= 40) return 'Long Email'
  return ''
})

const emailClass = ref('bg-white')

// Watch function to validate email presence of "@"
watch(
  () => formData.email,
  newEmail => {
    emailClass.value = newEmail.includes('@') ? 'bg-yellow-200' : 'bg-red-200'
  }
)

// Submit form data to Express API using Axios
const handleSubmit = async () => {
  try {
    await axios.post('http://localhost:3000/submit', formData)
    showForm.value = false
    emit('formSubmitted')
  } catch (error) {
    console.error('Error submitting form:', error)
  }
}
</script>
