// function sendSpaceship(spaceship: { pilot: string; copilot?: string }) {
//   // ... optional "?"
//   return spaceship.copilot;
// }
//
// sendSpaceship({ pilot: "Han solo", copilot: "Chewbacca" });
//
// sendSpaceship({ pilot: "Luke" });
//
// let input: unknown;
// // only specific values
// input = "Test";
// input = 20;
// input = [];
//
// let text: string;
//
// // text = input; Error
// input = text;
// let input: any;
//
// input = "Test";
// input = 20;
// input = [];
//
// let text: string;
//
// input = text;
function verification(test) {
    if (test) {
        // ...
    }
    else {
        let _check;
        let text = _check;
        // text = ""; Error
        return _check;
    }
}
