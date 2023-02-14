const shortid = require("shortid");
const { fs, contactsPath } = require("./contacts");

async function addContact(name, email, phone) {
  try {
    const contacts = await fs.readFile(contactsPath);
    const contactsList = JSON.parse(contacts);
    const newContact = { id: shortid.generate(), name, email, phone };
    const newContactsList = [...contactsList, newContact];
    await fs.writeFile(contactsPath, JSON.stringify(newContactsList));
    console.table(newContactsList);
  } catch (error) {
    console.log(error.message);
  }
}
