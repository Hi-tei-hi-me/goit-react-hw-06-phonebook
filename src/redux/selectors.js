export const getFilteredList = state => {
  const normalizedFilter = state.filters.trim().toLowerCase();
  return state.contacts.items.filter(({ name }) =>
    name.trim().toLowerCase().includes(normalizedFilter)
  );
};
