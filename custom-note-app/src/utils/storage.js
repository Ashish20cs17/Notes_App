// src/utils/storage.js

const STORAGE_KEY = "custom_notes";

/**
 * Get all notes from localStorage
 */
export const getNotes = () => {
  try {
    const notes = localStorage.getItem(STORAGE_KEY);
    return notes ? JSON.parse(notes) : [];
  } catch (error) {
    console.error("Failed to load notes from storage", error);
    return [];
  }
};

/**
 * Save notes array to localStorage
 */
export const saveNotes = (notes) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
  } catch (error) {
    console.error("Failed to save notes to storage", error);
  }
};
