import { defineStore } from 'pinia'
import axios from 'axios'

export const useNotesStore = defineStore('notesStore', {
  state: () => ({
    notes: [],
  }),
  actions: {
    async fetchNotes() {
      try {
        const response = await axios.get('http://localhost:3000/notes')
        this.notes = response.data
      } catch (error) {
        console.error('Error fetching notes:', error)
      }
    },
    async addNote(newNote) {
      try {
        const response = await axios.post(
          'http://localhost:3000/notes',
          newNote
        )
        this.notes.push(response.data) // Update store with new note
      } catch (error) {
        console.error('Error adding note:', error)
      }
    },
    async deleteNote(id) {
      await axios.delete(`http://localhost:3000/notes/${id}`)
      this.fetchNotes()
    },
  },
})
