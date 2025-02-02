import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';

const generateContacts = async (number) => {
  try {
    const existingContacts = await readContacts();
    const newContacts = [];

    for (let i = 0; i < number; i += 1) {
      newContacts.push(createFakeContact());
    }

    await writeContacts([...existingContacts, ...newContacts]);
  } catch (error) {
    console.log(error);
  }
};

generateContacts(5);
