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

let running = true;

while (running) {
    let choice = prompt("Enter action:");

    switch (choice) {
        case "show":
            let index = prompt("Enter index number:");
            if (index in contacts && index !== null) {
                alert(`${contacts[index].name} / ${contacts[index].phone} / ${contacts[index].email}`)
            } else {
                alert('index not in array');
            }
            break;

        case "all":
            console.log("--- Full Contact List ---");
            contacts.forEach(contact => {
                console.log(`${contact.name} / ${contact.phone} / ${contact.email}`);
            });
            alert("See console for the list of contacts")
            break;

        case "add":
            let addName = prompt("Enter name:");
            let addPhone = prompt("Enter phone:");
            let addEmail = prompt("Enter email:");

            if (addName && addPhone && addEmail) {
                contacts.push({
                    name: addName,
                    phone: addPhone,
                    email: addEmail
                });
                let last = contacts.length - 1;
                alert(`Added: ${contacts[last].name} / ${contacts[last].phone} / ${contacts[last].email}`);
            } else {
                alert("Can't add missing values.");
            }
            break;

        case "search":
            let search = prompt("Enter name:");
            let found = false;
            
            for (let contact of contacts) {
                if (contact.name.toLowerCase() === search.toLowerCase()) {
                    alert(`Found: ${contact.name}\nPhone: ${contact.phone}\nEmail: ${contact.email}`);
                    found = true;
                    break;
                }
            }
            if (!found) alert("Name does not exist.");
            break;

        case "quit":
            console.log("Quitting");
            running = false;
            break;

        default:
            console.log("Invalid choice");
            break;
    }
}