import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const contacts = await readContacts();
    const updatedContacts = contacts.slice(0, contacts.length - 1);
    await writeContacts(updatedContacts);
  } catch (error) {
    console.log(error);
  }
};

removeLastContact();
