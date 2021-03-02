const showWisdom = () => {
    document.getElementById("page1").style.display = "none";
    document.getElementById("page2").style.display = "block";
	var feeling = document.querySelector('input[name = "feeling"]:checked').value;
	var context = document.querySelector('input[name = "context"]:checked').value
	document.getElementById("theWisdom").innerHTML = getWisdom(feeling, context);
}

const backHome = () => {
    document.getElementById("page2").style.display = "none";
    document.getElementById("page1").style.display = "block";
}

function getWisdom(feeling, context) {
	if(feeling =='anger' && context == 'work') {return 'Anger resolves nothing it only puts up your blood pressure.';}
	else if(feeling =='anger' && context == 'work') {return 'To be angry is to let others\' mistakes punish yourself.';}
	else if(feeling =='anger' && context == 'family and friends') {return 'I was angered, for I had no shoes. Then I met a man who had no feet.';}
	else if(feeling =='anger' && context == 'love') {return 'If you are patient in one moment of anger, you will escape a hundred days of sorrow.';}
	else if(feeling =='anger' && context == 'love') {return 'Anger and jealousy can no more bear to lose sight of their objects than love.';}
	else if(feeling =='anger' && context == 'love') {return 'Anger blows out the lamp of the mind.';}
	else if(feeling =='sad' && context == 'love') {return 'Trying to avoid sadness is trying to avoid life.';}
	else if(feeling =='sad' && context == 'love') {return 'What brings us to tears, will lead us to grace. Our pain is never wasted.';}
	else if(feeling =='sad' && context == 'love') {return 'There are two medicines for all ills: time and silence.';}
	else if(feeling =='sad' && context == 'love') {return 'Sometimes it takes sadness to know happiness, noise to appreciate silence and absence to value presence.';}
	else if(feeling =='sad' && context == 'love') {return 'When you’re happy you enjoy the music, but when you’re sad you understand the lyrics.';}
	else if(feeling =='sad' && context == 'love') {return 'Chasing happiness is guaranteed to make you unhappy.';}
	else if(feeling =='sad' && context == 'work') {return 'I learned how to be happy because I know what unhappiness felt like.';}
	else if(feeling =='happy' && context == 'family and friends') {return 'Happiness is not doing fun things. Happiness is doing meaningful things.';}
	else if(feeling =='happy' && context == 'family and friends') {return 'One of the keys to happiness is a bad memory. ';}
	else if(feeling =='happy' && context == 'family and friends') {return 'He who lives in harmony with himself lives in harmony with the universe. ';}
	else if(feeling =='happy' && context == 'family and friends') {return 'Happiness is a state where nothing is missing.';}
	else if(feeling =='happy' && context == 'family and friends') {return 'Three grand essentials to happiness in this life are something to do, something to love, and something to hope for. ';}
	else if(feeling =='happy' && context == 'family and friends') {return 'Happiness is a function of accepting what is.';}
	else if(feeling =='stress' && context == 'work') {return 'When I look back on all these worries, I remember the story of the old man who said on his deathbed that he had had a lot of trouble in his life, most of which had never happened.';}
	else if(feeling =='stress' && context == 'work') {return 'Remember that stress doesn’t come from what’s going on in your life. It comes from your thoughts about what’s going on in your life.';}
	else if(feeling =='stress' && context == 'work') {return 'You are braver than you believe, and stronger than you seem, and smarter than you think.';}
	else if(feeling =='stress' && context == 'work') {return 'The greatest weapon against stress is our ability to choose one thought over another.';}
	else if(feeling =='stress' && context == 'work') {return 'You will never change your life until you change something you do daily.';}
	else if(feeling =='stress' && context == 'work') {return 'When we long for life without difficulties, remind us that oaks grow strong in contrary winds and diamonds are made under pressure.';}
	else {return 'No wisdom for ' + feeling + ' & ' + context + ' today :(';}
	
}