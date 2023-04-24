import { fetchContacts } from "services/fetchAPI";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllContacts = createAsyncThunk('contacts/fetchAll', async () => {
    console.log('contacts/fetchAll')
    return await fetchContacts();
})