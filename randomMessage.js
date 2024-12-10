a
// Part 1: Define the data sets
const greetings = [
    "Hello, dreamer!",
    "Hey, stargazer!",
    "Hi, you genius!",
    "Greetings, explorer!",
    "Ahoy, thinker!"
  ];
  
  const bodies = [
    "Today is the perfect day to start something new.",
    "Your future is bright, and the stars align for you.",
    "The universe whispers secrets of success in your ear.",
    "Challenges are opportunities in disguise.",
    "Laughter is the best medicine, so don't forget to smile."
  ];
  
  const endings = [
    "Have a great day!",
    "Make it count!",
    "You're unstoppable!",
    "Keep shining!",
    "Go conquer the world!"
  ];
  
  // Part 2: Randomize the output
  const getRandomIndex = (array) => Math.floor(Math.random() * array.length);
  
  const generateRandomMessage = () => {
    const greeting = greetings[getRandomIndex(greetings)];
    const body = bodies[getRandomIndex(bodies)];
    const ending = endings[getRandomIndex(endings)];
  
    // Combine the parts
    return `${greeting} ${body} ${ending}`;
  };
  
  // Part 3: Output the random message
  console.log("🎉 Random Message Generator 🎉");
  console.log(generateRandomMessage());
  