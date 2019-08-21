import random from "random";

export function subscribeStatus(id, callback) {
  console.log(`Subscribed ID: ${id}`);
  const time = random.int(300, 500);
  const intervalID = setInterval(() => {
    callback(random.boolean());
  }, time);
  return {
    dispose: () => {
      clearInterval(intervalID);
      console.log(`Unsubscribed ${id}`);
    }
  };
}

export function fakeSave(name, callback) {
  const timeoutID = setTimeout(() => {
    callback(`Saved ${name.firstName}, ${name.lastName}`);
  }, 2000);
  return {
    dispose: () => clearTimeout(timeoutID)
  };
}
