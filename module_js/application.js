
import {contenuIntro} from './contenuIntro.js' // le contenu de l'intoduction */
import {Introduction} from './Introduction.js' // 
import {AnimLettre} from './AnimLettre.js' //


/* l'élement de la page qui contiendra les éléments créés dynamiquement */
let elmHeader = document.querySelector('.header')
let intro = new Introduction(contenuIntro, elmHeader, animationLettre, animationDeux)

// debutQuestionnaire()

function animationLettre()
{
    /* Une fois que l'animation des mots est terminé la fonction animLettre s'exécutera */ 
	console.log('debut animation lettre')
	const lesLettres = 'Vincent-Gagnon'
 	let  monAnimLettre = new AnimLettre(lesLettres, elmHeader, finAnim)	
}


function animationDeux()
{
    /* Une fois que l'animation des mots est terminé la fonction animLettre s'exécutera */ 
	console.log('debut animation Deux')
	const lesLettres2 = 'Portfolio'
 	let  monAnimLettre = new AnimLettre(lesLettres2, elmHeader, finAnim)	
}

function finAnim()
{
	console.log('animation terminée')
}