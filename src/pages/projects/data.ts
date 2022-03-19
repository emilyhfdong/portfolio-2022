export interface IProject {
  name: string
  year: string
  technology: string[]
  rating: number // out of 5
  summary: string
  motivation: string
  finalProduct: string
  deployedLink?: string
  githubLink?: string
}

export const PROJECTS: IProject[] = [
  {
    name: "library books",
    year: "2021",
    technology: [],
    rating: 5,
    summary:
      "My Goodread's to-read list with ability to sort by the wait time for the book at various libraries",
    motivation: `I'm an avid fiction reader (almost entirely only romance and thrillers) and I get all my ebooks from a bunch of different libraries. I used to go through my to-reads list on Goodreads and search for each book at each library to find a book that is available – a very inefficient system.`,
    finalProduct:
      "I used aws step functions to orchestrate aws lambdas to get all the data for my books: Step 1 - scrape Goodreads for my to-read list (y did they deprecate their api tho 🥲)",
  },
  {
    name: "wiki game",
    year: "2021",
    technology: [],
    rating: 5,
    summary:
      "Race your friends to get from one wikipedia article to another by only clicking on links in the article",
    motivation:
      "There is an existing website that gives you wikipedia article prompts. My problem with it was that it shows the same articles for everyone in the world for the same amount of time. So if you and your friends finish the round before the time they set for each round, you have to wait for the next round. I am much too impatient for that.",
    finalProduct: "",
  },
  {
    name: "yarn catalogue",
    year: "2022",
    technology: [],
    rating: 4,
    summary:
      "Creates a notion table with all available yarns in popular yarn stores in Toronto",
    motivation:
      "I am an obsessive knitter and spend a lot of my time finding yarns for my next project. I was getting tired of opening tabs for all of my favourite yarn stores in Toronto and searching for the yarn I want on each website. I wanted one place to search in all stores.",
    finalProduct: "",
  },
  {
    name: "color picker",
    year: "2022",
    technology: [],
    rating: 1,
    summary:
      "A chrome extension that lets you click on the page to create colour palettes",
    motivation:
      "TBH I'm not sure why I made this. The mac app 'Digital Color Meter' already does the trick (but better lol).",
    finalProduct: "",
  },
  {
    name: "acnh critters",
    year: "2020",
    technology: [],
    rating: 4,
    summary:
      "Find the Animal Crossing fish/bugs that are currently out and about and how much $$ you can earn by selling them.",
    motivation:
      "Like most of the world during the first phase of lockdown in 2020, I was obsessed with Animal Crossing. One way to make $$ in Animal Crossing is catching and selling expensive fish/bugs. I was wasting too much time catching critters that turned out to sell for not a lot.",
    finalProduct: "",
  },
  {
    name: "two letters",
    year: "2020",
    technology: [],
    rating: 4,
    summary:
      "Simple game that will test your knowledge of valid scrabble two letter words",
    motivation:
      "Hot take - the trick to winning scrabble is knowing & leveraging all the two letter words. I was losing too much so it was time to train my brain.",
    finalProduct: "",
  },
]
