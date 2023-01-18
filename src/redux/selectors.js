export const getFilteredList = state => {
  const normalizedFilter = state.filter.trim().toLowerCase();
  return state.contacts.contacts.filter(({ name }) =>
    name.trim().toLowerCase().includes(normalizedFilter)
  );
};
