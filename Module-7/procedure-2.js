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

let sortContact = function(contacts, specify) {
    if (contacts instanceof Array && (specify === "name" || specify === "phone" || specify === "email")) {
        contacts.sort((a, b) => {
            if (a[specify].toLowerCase() < b[specify].toLowerCase()) return -1;
            if (a[specify].toLowerCase() > b[specify].toLowerCase()) return 1;
            return 0;
        });
        for (contact of contacts) {
            console.log(`${contact.name} / ${contact.phone} / ${contact.email}`);
        }
    } else {
        alert("Invalid input");
    }
}

let showContact = function(contacts, i) {
    if (contacts instanceof Array && contacts[i]) {
        console.log(`${contacts[i].name} / ${contacts[i].phone} / ${contacts[i].email}`);
    }
}

let showAllContacts = function(contacts) {
    if (contacts instanceof Array) {
        for (contact of contacts) {
            console.log(`${contact.name} / ${contact.phone} / ${contact.email}`);
        }
    }
}

let addNewContact = function(contacts, name, phone, email) {
    if (contacts instanceof Array && name && phone && email) {
        contacts.push({
            name: name,
            phone: phone,
            email: email
        });
    }
}

let choice = prompt("Enter action:");

switch (choice) {

    case "sort":
        let choice = prompt("Sort by:");
        sortContact(contacts, choice);
        break;

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