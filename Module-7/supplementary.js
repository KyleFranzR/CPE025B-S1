let contacts = [{
    name: "Linus Torvalds",
    role: "System Analyst",
    skills: ["Linux", "Git", "Kernel"],
    availability: "TRUE"
}, {
    name: "Ada Lovelace",
    role: "Logic Analyst",
    skills: ["Algorithms", "Math", "Analytics"],
    availability: "FALSE"
}, {
    name: "Alan Turing",
    role: "Cryptographer",
    skills: ["Logic", "Enigma", "Security"],
    availability: "TRUE"
}];

let showContact = function(contacts, i) {
    if (contacts instanceof Array && contacts[i]) {
        alert(`name: ${contacts[i].name}\nrole: ${contacts[i].role}\nskills: ${contacts[i].skills}\navailability: ${contacts[i].availability}`);
    } else {
        alert('index not in array');
    }
}

let showAllContacts = function(contacts) {
    if (contacts instanceof Array) {
        for (contact of contacts) {
            console.log(`${contact.name} / ${contact.role} / ${contact.skills} / ${contact.availability}`);
        }
        alert("See console log for the list of contacts");
    }
}

let addNewContact = function(contacts, name, role, skills, availability) {
    if (contacts instanceof Array && name && role && skills && availability) {
        contacts.push({
            name: name,
            role: role,
            skills: skills,
            availability: availability,
        });
        let last = contacts.length - 1;
        alert(`Added: ${contacts[last].name} / ${contacts[last].role} / ${contacts[last].skills} / ${contacts[last].availability}`);
    } else {
        alert("Can't add missing values.");
    }
}

let searchContact = function(contacts, search) {
    if (contacts instanceof Array && search) {
            let found = false;
            
            for (let contact of contacts) {
                if (contact.name.toLowerCase() === search.toLowerCase()) {
                    alert(`Found ${contact.name}\nrole: ${contact.role}\nskills: ${contact.skills}\navailability: ${contact.availability}`);
                    found = true;
                }
            }
            if (!found) alert("Name does not exist.");
    }
}

let running = true;

while (running) {
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
            let skills = [];
            let addName = prompt("Enter Name:");
            let addRole = prompt("Enter Role:");

            let nSkills = prompt("How many skills to add?");
            for (let i = 0; i < nSkills; i++) {
                let addSkills = prompt("Enter Skills:");
                skills.push(addSkills);
            }

            let availability = prompt("Available?");
            addNewContact(contacts, addName, addRole, skills, availability);
            break;

        case "search":
            let name = prompt("Enter name:");
            searchContact(contacts, name);
            break;
        
        case "quit":
            console.log("Exited menu");
            running = false;
            break;

        default:
            alert("Invalid input.");
    }
}