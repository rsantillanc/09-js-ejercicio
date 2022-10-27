const logger = require("./logger");

function greeting(language) {
  let say;
  switch (language) {
    case "es":
      say = "Di hola!";
      break;
    case "en":
      say = "Say hello!";
      break;
    default:
      throw Error(`The language ${language} doesn't defined!`);
  }
  return say;
}

try {
  console.log(greeting("es"));
  console.log(greeting("en"));
  console.log(greeting("fr"));
} catch (e) {
  logger.info(`Error: ${e}`);
}
