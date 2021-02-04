// This code is meant to serve as a mock fetch from an API.
export const getDeveloper = new Promise(function (resolve) {
  setTimeout(() => {
    resolve({
      hungerLevel: "IT'S OVER 9K!!!!!!",
      hasHunger: "ANSWER THE BUTTON",
      mood: "",
      name: "",
    });
  }, 1000);
});
