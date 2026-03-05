let contacts = [{
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"
}, {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
}, {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
}];

function showContact(contactList, index) {
    if (contactList instanceof Array && index in contactList) {
        console.log(`${contactList[index].name} / ${contactList[index].phone} / ${contactList[index].email}`);
    } else {
        console.log("Index not found.");
    }
}

function showAllContacts(contactList) {
    if (contactList instanceof Array) {
        contactList.forEach(contact => {
            console.log(`${contact.name} / ${contact.phone} / ${contact.email}`);
        });
    } else {
        console.log("Not an Array.");
    }
}

function addNewContact(contactList, addName, addPhone, addEmail) {
    if (contactList instanceof Array && addName && addPhone && addEmail) {
        contactList.push({ name : addName, phone: addPhone, email: addEmail });
        let last = contacts.length - 1;
        console.log(`Added: ${contactList[last].name} / ${contactList[last].phone} / ${contactList[last].email}`);
    } else {
        console.log("Invalid inputs.");
    }
}

let choice = prompt("Enter action:");

switch (choice) {
    case "show":
        let idx = prompt("Enter index:");
        showContact(contacts, idx);
        break;

    case "all":
        showAllContacts(contacts);
        break;
    
    case "add":
        let addN = prompt("Enter Name:");
        let addP = prompt("Enter Phone:");
        let addE = prompt("Enter Email:");
        addNewContact(contacts, addN, addP, addE);
        break;

    default:
         alert("Invalid choice.");
}
