const teamDirectory = [{
    Name: "Leo Brooks",
    Role: "Designer",
    Skills: ["UI", "UX", "Figma"],
    Available: true
}, {
    Name: "Sasha Ivana",
    Role: "Developer",
    Skills: ["HTML", "CSS", "JS"],
    Available: false
}, {
    Name: "Jordan Lee",
    Role: "Manager",
    Skills: ["Planning", "Agile"],
    Available: true}];

newSpecialist = {
    Name: "Casey Moore",
    Role: "QA Engineer",
    Skills: ["Testing", "Debugging"],
    Available: true
}

// add the new specialist via array method
teamDirectory.push(newSpecialist);

//Update Availability for Sasha
teamDirectory[1].Available = true;

//Display

// a
console.log(`First skill of ${teamDirectory[0].Name}: ${teamDirectory[0].Skills[0]}`);

// b
console.log(`Total number of skills of last member: ${teamDirectory[3].Skills.length}`);

// c
console.log(`Total number of employee: ${teamDirectory.length}`);