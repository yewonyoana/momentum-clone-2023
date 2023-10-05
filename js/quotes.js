const quotes = [
	{
		quote: '"한 번 만난 인연은 잊혀지는 것이 아니라 잊고 있을 뿐이야."',
		from: "<센과 치히로의 행방불명, 2001>",
	},
	{
		quote: '"이렇게 웃어봐, 그러면 무서운 게 사라진단다."',
		from: "<이웃집 토토로, 1988>",
	},
	{
		quote: '"그렇게 겉모습에 신경쓰지 말거라. 중요한 건 마음이야."',
		from: "<마녀 배달부 키키, 1989>",
	},
	{
		quote: '"너는 너 자신이 되어야 해."',
		from: "<고양이의 보은, 2002>",
	},
	{
		quote: '"정말로 좋아하는 것은 좋아하는 이유가 발견되지 않아."',
		from: "<이웃집 토토로,1988>",
	},
	{
		quote: '"자신의 일을 스스로 결정하는 거야!"',
		from: "<하울의 움직이는 성, 2004>",
	},
	{
		quote: '"살아 있으면 어떻게든 될거야!"',
		from: "<원령공주, 1997>",
	},
	{
		quote: '"짐승보다 무서운게 인간이야."',
		from: "<원령공주, 1997>",
	},
	{
		quote: '"오늘이 안되면 내일이 있어. 언제나 내일은 있어."',
		from: "<추억은 방울방울, 1991>",
	},
	{
		quote: '"확인한 다음에 걱정해도 안 늦어."',
		from: "<마루 밑 아리에티, 2010>",
	},
	{
		quote: '"살아라. 그대는 아름답다."',
		from: "<원령공주, 1997>",
	},
];

const quote = document.querySelector("#quote span:first-child");
const from = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
from.innerText = todaysQuote.from;
