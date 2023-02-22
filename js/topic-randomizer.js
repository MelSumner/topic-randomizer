function updateTopic() {
	const topics = [
		"'apples vs oranges' vs 'apples vs baby wolverines'",
		"oranges used to be a prized dessert!",
		"frameworks: you need them, get over it.",
		"Dogs are so cute! What is the breed of the cutest dog you know IRL?",
		"Have you watched the Great Pottery Throw Down?",
		"numberwang!",
		"play No More Jockeys",
		"experienced broadcaster Peter Barakan",
		"Which exam(s) did you fail before deciding to do your current job instead?",
		"what job did you want to do as a child?",
		"what was your favorite summertime activity?",
		"the number of times you've been to the dentist in the last 12 months",
		"favorite colloquial phrases that don't translate but really they do",
		"When will the bird site go away? Any Bets?",
		"latest interesting RSS feed?",
		"why is comic sans the best font?",
    "what is your favorite 'Document 72 hours' episode on NHK World Japan?",
    "what is the best sandwich",
    "what's the easiest way to put markdown into your website?",
    "ok what podcast are you listening to and is it about murder?",
    "what are the best headphones?"
	];
	let newTopicIndex = Math.floor(Math.random() * topics.length);
	let paragraphElement = document.getElementById("topic");
	paragraphElement.innerText = topics[newTopicIndex];
}

const buttonElement = document.querySelector("button#topic-randomizer");

buttonElement.addEventListener("click", updateTopic);
