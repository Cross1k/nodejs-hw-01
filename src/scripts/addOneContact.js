import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  const currentList = await readContacts();
  const newContact = createFakeContact();
  writeContacts([...currentList, newContact]);
};

addOneContact();
