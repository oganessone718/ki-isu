const quotes = [
  {
    quote: " Acta Non Verba. ",
    korean: " 말 대신 행동으로 ",
  },
  {
    quote: "Age quod agis.",
    korean: "니가 지금 하는 것에 최선을 다하라",
  },
  {
    quote: "Bibamus, moriendum est.",
    korean: "마시자, 언젠간 죽을 것이기 때문에",
  },
  {
    quote: "Carpe Diem.",
    korean: "오늘을 즐겨라",
  },
  {
    quote: "Cogito Ergo Sum.",
    korean: "나는 생각한다. 그러므로 나는 존재한다.",
  },
  {
    quote: "Et hoc transibit",
    korean: "이 또한 지나가리라.",
  },
  {
    quote: "Dum vita est, spes est.",
    korean: "삶이 있으면, 희망이 있다.",
  },
  {
    quote: "Faber est suae quisque fortunae.",
    korean: "운명을 만드는 사람은 바로 자신이다.",
  },
  {
    quote: "Ignoramus et ignorabimus.",
    korean: "우리는 모른다. 앞으로도 모를 것이다.",
  },
  {
    quote:"Me amor lassum agit.",
    korean: "사랑이 날 지치게 해요.",
  }
]

const quote = document.querySelector("#quote span:first-child");
const korean = document.querySelector("#quote span:last-child");

const todayQuote = (quotes[Math.floor(Math.random()*(quotes.length))]);

quote.innerText = todayQuote.quote;
korean.innerText = todayQuote.korean