const spaceships = [];

function addSpaceship(name: string, pilot: string, crewLimit: number) {
  const spaceship = {
    name,
    pilot,
    crewLimit,
    crew: [],
    inMission: false,
  };

  spaceships.push(spaceship);

  alert(`the spaceship ${spaceship.name} was registered`);
}

function findSpaceship(name: string) {
  let spaceship: {
    name: string;
    pilot: string;
    crewLimit: number;
    crew: string[];
    inMission: number;
  };

  spaceship = spaceships.find((ship) => ship.name === name);
}

function addCrewMember(
  member: string,
  spaceship: { name: string; crewLimit: number; crew: string[] }
) {
  if (spaceship.crew.length > spaceship.crewLimit) {
    alert(`this member can't join because the crew limit was exceeded`);
  } else {
    spaceship.crew.push(member);
    alert(`The member ${member} was added in the crew ${spaceship.name}`);
  }
}

function sendInMission(spaceship: {
  name: string;
  crewLimit: number;
  crew: string[];
  inMission: boolean;
}) {
  if (spaceship.inMission) {
    alert(
      `${spaceship.name} can't depart this spaceship is already in mission`
    );
  } else if (spaceship.crew.length < Math.floor(spaceship.crewLimit / 3)) {
    alert(
      `${spaceship.name} can't depart this spaceship because has no crew enough`
    );
  } else {
    spaceship.inMission = true;
    alert(`${spaceship.name} was launched`);
  }
}

function firstMenuOption() {
  const name = prompt(`what's the name of the spaceship to be registered`);
  const pilot = prompt(`what's the name of the pilot?`);
  const crewLimit = Number(prompt(`how many crew?`));

  const confirmation = confirm(`do you want register this spaceship? ${name}`);
  if (confirmation) {
    addSpaceship(name, pilot, crewLimit);
  }
}

function secondMenuOption() {
  const name = prompt(`what's the name of the crew`);
  const spaceshipName = prompt(`what's the name of the spaceship?`);

  const spaceship = findSpaceship(spaceshipName);
}
