function MyModule() {
  const me = {};
  let name = "John";
  let age = 15;

  const sayName = function () {
    console.log("My name is ", name);
  };

  // me.getName = () => name;

  // me.setName = function (_name) {
  //   name = _name;
  // };

  me.name = (_name) => {
    if (_name === undefined) {
      return name;
    }

    name = _name;
    return me;
  };

  me.age = (_age) => {
    if (_age === undefined) {
      return age;
    }
    age = _age;
    return me;
  };

  me.incrAge = () => {
    age += 1;
  };

  me.sayName = sayName;

  return me;
}

const person1 = MyModule().name("Alexis");

const outName = document.querySelector("#outName");
const btnGetOlder = document.querySelector("#btnGetOlder");

function update() {
  outName.textContent = `${person1.name()} is ${person1.age()} years old`;
}

function onClick() {
  person1.incrAge();
  update();
}

btnGetOlder.onclick = onClick;

update();

function populateTweets(tweets) {
  console.log("Got data!", tweets);

  const target = document.querySelector("#tweets");
  for (let tweet of tweets) {
    const tweetDiv = document.createElement("div");
    tweetDiv.setAttribute("class", "col-sm-4 col-lg-3 border p-2");
    tweetDiv.textContent = tweet.full_text;

    target.appendChild(tweetDiv);
  }
}

function dataIsReady(res) {
  return res.json();
}

let tweets = [];

fetch("./data/tweets.json").then(dataIsReady).then(populateTweets);
