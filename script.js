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

const Q1 = "Anger resolves nothing it only puts up your blood pressure."
const Q2 = "To be angry is to let others' mistakes punish yourself."
const Q3 = "I was angered, for I had no shoes. Then I met a man who had no feet."
const Q4 = "If you are patient in one moment of anger, you will escape a hundred days of sorrow."
const Q5 = "Anger and jealousy can no more bear to lose sight of their objects than love."
const Q6 = "Anger blows out the lamp of the mind."
const Q7 = "Trying to avoid sadness is trying to avoid life."
const Q8 = "What brings us to tears, will lead us to grace. Our pain is never wasted."
const Q9 = "There are two medicines for all ills: time and silence."
const Q10 = "Sometimes it takes sadness to know happiness, noise to appreciate silence and absence to value presence."
const Q11 = "When you’re happy you enjoy the music, but when you’re sad you understand the lyrics."
const Q12 = "Chasing happiness is guaranteed to make you unhappy."
const Q13 = "I learned how to be happy because I know what unhappiness felt like."
const Q14 = "Happiness is not doing fun things. Happiness is doing meaningful things."
const Q15 = "One of the keys to happiness is a bad memory. "
const Q16 = "He who lives in harmony with himself lives in harmony with the universe. "
const Q17 = "Happiness is a state where nothing is missing."
const Q18 = "Three grand essentials to happiness in this life are something to do, something to love, and something to hope for."
const Q19 = "Happiness is a function of accepting what is."
const Q20 = "When I look back on all these worries, I remember the story of the old man who said on his deathbed that he had had a lot of trouble in his life, most of which had never happened."
const Q21 = "Remember that stress doesn’t come from what’s going on in your life. It comes from your thoughts about what’s going on in your life."
const Q22 = "You are braver than you believe, and stronger than you seem, and smarter than you think."
const Q23 = "The greatest weapon against stress is our ability to choose one thought over another."
const Q24 = "You will never change your life until you change something you do daily."
const Q25 = "When we long for life without difficulties, remind us that oaks grow strong in contrary winds and diamonds are made under pressure."

const angerWork = [Q1, Q2, Q3, Q6];
const angerFandF = [Q1, Q2, Q3, Q4,Q5];
const angerLove = [Q4,Q5, Q6];
const sadWork = [Q9, Q12, Q13];
const sadFandF = [Q7, Q8, Q10, Q11, Q13];
const sadLove = [Q7, Q8, Q9, Q10, Q11, Q12];
const happyWork = [Q14, Q17, Q19];
const happyFandF = [Q14, Q15, Q16, Q17, Q18, Q19];
const happyLove = [Q15, Q16, Q18];
const stressWork = [Q20, Q21, Q22, Q23, Q24, Q25];
const stressFandF = [Q20, Q21, Q22, Q23, Q24];
const stressLove = [Q25];


function getWisdom(feeling, context) {
	if(feeling =='anger' && context == 'work') {
		let i = Math.floor(Math.random()*angerWork.length);
		return angerWork[i];
	}
	else if(feeling =='anger' && context == 'family and friends') {
		let i = Math.floor(Math.random()*angerFandF.length);
		return angerFandF[i];
	}
	else if(feeling =='anger' && context == 'love') {
		let i = Math.floor(Math.random()*angerLove.length);
		return angerLove[i];
	}
	else if(feeling =='sad' && context == 'work') {
		let i = Math.floor(Math.random()*sadWork.length);
		return sadWork[i];
	}
	else if(feeling =='sad' && context == 'family and friends') {
		let i = Math.floor(Math.random()*sadFandF.length);
		return sadFandF[i];
	}
	else if(feeling =='sad' && context == 'love') {
		let i = Math.floor(Math.random()*sadLove.length);
		return sadLove[i];
	}
	else if(feeling =='happy' && context == 'work') {
		let i = Math.floor(Math.random()*happyWork.length);
		return happyWork[i];
	}
	else if(feeling =='happy' && context == 'family and friends') {
		let i = Math.floor(Math.random()*happyFandF.length);
		return happyFandF[i];
	}
	else if(feeling =='happy' && context == 'love') {
		let i = Math.floor(Math.random()*happyLove.length);
		return happyLove[i];
	}
	else if(feeling =='stress' && context == 'work') {
		let i = Math.floor(Math.random()*stressWork.length);
		return stressWork[i];
	}
	else if(feeling =='stress' && context == 'family and friends') {
		let i = Math.floor(Math.random()*stressFandF.length);
		return stressFandF[i];
	}
	else if(feeling =='stress' && context == 'love') {
		let i = Math.floor(Math.random()*stressLove.length);
		return stressLove[i];
	}
	else {return 'No wisdom for ' + feeling + ' & ' + context + ' today :(';}
	
}