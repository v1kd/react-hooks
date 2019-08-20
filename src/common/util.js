import random from "random";

function subscribeStatus(id, callback) {
  console.log(`Subscribed ID: ${id}`);
  const time = random.int(300, 500);
  const intervalID = setInterval(() => {
    callback(random.boolean());
  }, time);
  return {
    cancel: () => {
      clearInterval(intervalID);
      console.log(`Unsubscribed ${id}`);
    }
  };
}

export default subscribeStatus;
