function sendSpaceship(name: string, captain: string) {
  const spaceship = {
    name,
    captain,
    speed: 20,
    inMission: true,
    crew: [],
  };

  alert(
    `The spaceship ${spaceship.name} controlled by the caption ${spaceship.captain} was send`
  );

  return spaceship;
}

function accelerate(
  targetSpeed: number,
  spaceship: { name: string; speed: number }
) {
  if (spaceship.speed > targetSpeed) {
    alert(`reducing speed spaceship ${spaceship.name} to ${targetSpeed}...`);
  } else if (spaceship.speed < targetSpeed) {
    alert(`increasing speed of ${spaceship.name} to ${targetSpeed}`);
  } else {
    alert(`keeping speed of ${spaceship.name}`);
  }
}

const spaceshipName = prompt(`Enter the spaceship name to send`);
const spaceshipCaption = prompt(`Enter the of the caption`);

const currentShip = sendSpaceship(spaceshipName, spaceshipCaption);

const speed = Number(prompt("Enter a speed"));

accelerate(speed, currentShip);
