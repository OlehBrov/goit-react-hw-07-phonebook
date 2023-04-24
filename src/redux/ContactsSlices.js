import { createSlice } from '@reduxjs/toolkit';
import { getAllContacts } from './contactsAPI';


export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
  contactList: {
    items: [],
    isLoading: false,
    error: null
  },

},
  
  extraReducers: {
    [getAllContacts.pending]: (state) => {
      state.contactList.isLoading = true;
    },
    [getAllContacts.fulfilled]: (state, action) => {
      console.log('state', state.contactList)
      console.log('action', action)
      state.contactList.isLoading = false;
      state.contactList.items = action.payload;
      state.contactList.error = null
    },
    [getAllContacts.rejected]: (state, action) => {
      state.contactList.error = action.payload
    }
  }

});

export const contactsReducer = contactsSlice.reducer;
export const { addContact, deleteContact } = contactsSlice.actions;
