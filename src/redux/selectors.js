import { createSelector } from '@reduxjs/toolkit';


export const selectContacts = (state) => state.contacts.items;

export const selectNameFilter = (state) => state.filters.status;

export const selectIsLoading = (state) => state.contacts.isLoading;
export const selectError = (state) => state.contacts.error;


export const selectVisibleContacts = createSelector(
    [selectContacts, selectNameFilter],
    (contacts, statusFilter) => {
        if (statusFilter && statusFilter.trim() !== "") {
            return contacts.filter((contact) =>
                contact.username.toLowerCase().includes(statusFilter.toLowerCase())
            );
        }
        return contacts;
    }
);