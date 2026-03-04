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

let choice = prompt("Enter action:");

switch (choice) {
    case "show first":
        console.log(`${contacts[0].name} / ${contacts[0].phone} / ${contacts[0].email}`);
        break;

    case "show last":
        let last = contacts.length - 1;
        console.log(`${contacts[last].name} / ${contacts[last].phone} / ${contacts[last].email}`);
        break;

    case "add new":
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
            console.log(`Added: ${contacts[last].name} / ${contacts[last].phone} / ${contacts[last].email}`);
        } else {
            console.log("Can't add missing values.");
        }
        break;

    default:
        console.log("Wrong choice.");
        break;
}