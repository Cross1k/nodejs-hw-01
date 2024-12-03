import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  const currentList = await readContacts();
  currentList.pop();
  writeContacts(currentList);
};

removeLastContact();
