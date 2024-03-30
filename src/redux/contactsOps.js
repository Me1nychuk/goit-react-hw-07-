import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";

axios.defaults.baseURL = "https://6607e98da2a5dd477b13abca.mockapi.io"; //  '/contacts'

export const fetchContacts  = createAsyncThunk(
  "contacts/fetchContacts",
    async (_,thunkAPI) => {
      try {
        const response = await axios.get("/contacts");
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
        
    }
)

export const deleteContact = createAsyncThunk(
    "contacts/deleteContact",
    async (taskId, thunkAPI) => { 
        try {
            const response = await axios.delete('/contacts/' + taskId);
            return response.data;

        } catch (e) {
             return thunkAPI.rejectWithValue(e.message);
        }
    })

export const addContact = createAsyncThunk(
    "contacts/addContact",
    async (contact, thunkAPI) => {
      try {
            const response = await axios.post('/contacts', contact);
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    });