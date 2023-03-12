// Variables

let btn = document.querySelector("#new-quote");
let quote = document.querySelector(".quote");
let person = document.querySelector(".person");

const quotes = [
  {
    quote: `"True terror is to wake up one morning and discover that your high school class is running the country."`,
    person: ` Kurt Vonnegut`,
  },
  {
    quote: `"Always forgive your enemies; nothing annoys them so much."`,
    person: ` Oscar Wilde`,
  },
  {
    quote: `"Sometimes the road less traveled is less traveled for a reason."`,
    person: `Jerry Seinfeld`,
  },

  {
    quote: `"Never go to bed mad. Stay up and fight."`,
    person: `Phyllis Diller`,
  },

  {
    quote: `"Misers are no fun to live with, but they make great ancestors."`,
    person: `Tom Snyder`,
  },

  {
    quote: `"If you want to know what God thinks of money, just look at the people he gave it to."`,
    person: `Dorothy Parker`,
  },

  { quote: `"When in doubt, look intelligent."`, person: `Garrison Keillor` },

  {
    quote:
      "In America, there are two classes of travel—first class and with children.",
    person: `Robert Benchley`,
  },

  {
    quote: "There is no such thing as fun for the whole family.",
    person: `Jerry Seinfeld`,
  },

  {
    quote: `"A perfect parent is a person with excellent child-rearing theories and no actual children."`,
    person: `Dave Barry`,
  },
  {
    quote: `"Neither cruelty, nor violence, nor torture will make me beg for mercy, because I prefer to die with my head raised high, with unshakeable faith... In my country’s predestination rather than live in submission forsaking my sacred principles."`,
    person: `Patrice Lumumba`,
  },
];

btn.addEventListener("click", function () {
  let random = Math.floor(Math.random() * quotes.length);

  quote.innerText = quotes[random].quote;
  person.innerText = quotes[random].person;
});
