//Show menu on small screens
const navSlider = () => {
	const burger = document.querySelector('.burger');
	const navLinks = document.querySelector('.nav-links');
	burger.addEventListener('click',() => {
		navLinks.classList.toggle("nav-active");
	});
}
const birdContent = () =>{
	const birdButton = document.querySelector('.service-logo-image-1');
	const birdParagraph = document.querySelector('.bird-content');
	const birdText = document.querySelector('.service-text-1');
	//Hover zoom and move text
	birdButton.addEventListener('mouseenter',()=>{
		birdText.classList.remove('content-text-show');
		birdText.classList.toggle('content-text-hide');
	})
	birdButton.addEventListener('mouseleave',()=>{
		birdText.classList.remove('content-text-hide');
		birdText.classList.toggle('content-text-show');
	})
	//Show paragraph
	birdButton.addEventListener('click',()=>{
		birdParagraph.classList.toggle('bird-content-display')
	})
}
const picnicContent = () =>{
	const picnicButton = document.querySelector('.service-logo-image-9');
	const picnicParagraph = document.querySelector('.picnic-content');
	const picnicText = document.querySelector('.service-text-9');
	//Hover zoom and move text
	picnicButton.addEventListener('mouseenter',()=>{
		picnicText.classList.remove('content-text-show');
		picnicText.classList.toggle('content-text-hide');
	})
	picnicButton.addEventListener('mouseleave',()=>{
		picnicText.classList.remove('content-text-hide');
		picnicText.classList.toggle('content-text-show');
	})
	//Show Paragraph
	picnicButton.addEventListener('click',()=>{
		picnicParagraph.classList.toggle('picnic-content-display')
	})
}
const gradContent = () =>{
	const gradButton = document.querySelector('.service-logo-image-8');
	const showersButton = document.querySelector('.service-logo-image-2');
	const weddingButton = document.querySelector('.service-logo-image-5');
	const gradParagraph = document.querySelector('.grad-content');
	const gradText = document.querySelector('.service-text-8');
	const showersText = document.querySelector('.service-text-2');
	const weddingText = document.querySelector('.service-text-5');
	
	//Hover zoom and move text
	gradButton.addEventListener('mouseenter',()=>{
		gradText.classList.remove('content-text-show');
		gradText.classList.toggle('content-text-hide');
	})
	gradButton.addEventListener('mouseleave',()=>{
		gradText.classList.remove('content-text-hide');
		gradText.classList.toggle('content-text-show');
	})

	showersButton.addEventListener('mouseenter',()=>{
		showersText.classList.remove('content-text-show');
		showersText.classList.toggle('content-text-hide');
	})
	showersButton.addEventListener('mouseleave',()=>{
		showersText.classList.remove('content-text-hide');
		showersText.classList.toggle('content-text-show');
	})

	weddingButton.addEventListener('mouseenter',()=>{
		weddingText.classList.remove('content-text-show');
		weddingText.classList.toggle('content-text-hide');
	})
	weddingButton.addEventListener('mouseleave',()=>{
		weddingText.classList.remove('content-text-hide');
		weddingText.classList.toggle('content-text-show');
	})

	//Show paragraphs
	gradButton.addEventListener('click',()=>{
		gradParagraph.classList.toggle('grad-content-display')
	})
	showersButton.addEventListener('click',()=>{
		gradParagraph.classList.toggle('grad-content-display')
	})
	weddingButton.addEventListener('click',()=>{
		gradParagraph.classList.toggle('grad-content-display')
	})
}
const foodContent = () =>{
	const drinksButton = document.querySelector('.service-logo-image-3');
	const diningButton = document.querySelector('.service-logo-image-7');
	const foodParagraph = document.querySelector('.food-content');
	const drinksText = document.querySelector('.service-text-3');
	const diningText = document.querySelector('.service-text-7');
	
	//Hover zoom and move text
	drinksButton.addEventListener('mouseenter',()=>{
		drinksText.classList.remove('content-text-show');
		drinksText.classList.toggle('content-text-hide');
	})
	drinksButton.addEventListener('mouseleave',()=>{
		drinksText.classList.remove('content-text-hide');
		drinksText.classList.toggle('content-text-show');
	})

	diningButton.addEventListener('mouseenter',()=>{
		diningText.classList.remove('content-text-show');
		diningText.classList.toggle('content-text-hide');
	})
	diningButton.addEventListener('mouseleave',()=>{
		diningText.classList.remove('content-text-hide');
		diningText.classList.toggle('content-text-show');
	})
	//Show food content
	drinksButton.addEventListener('click',()=>{
		foodParagraph.classList.toggle('food-content-display')
	})
	diningButton.addEventListener('click',()=>{
		foodParagraph.classList.toggle('food-content-display')
	})
}
const freeContent = () =>{
	const kidsButton = document.querySelector('.service-logo-image-4');
	const wifiButton = document.querySelector('.service-logo-image-6');
	const freeParagraph = document.querySelector('.free-content');
	const kidsText = document.querySelector('.service-text-4');
	const wifiText = document.querySelector('.service-text-6');
	
	//Hover zoom and move text
	kidsButton.addEventListener('mouseenter',()=>{
		kidsText.classList.remove('content-text-show');
		kidsText.classList.toggle('content-text-hide');
	})
	kidsButton.addEventListener('mouseleave',()=>{
		kidsText.classList.remove('content-text-hide');
		kidsText.classList.toggle('content-text-show');
	})

	wifiButton.addEventListener('mouseenter',()=>{
		wifiText.classList.remove('content-text-show');
		wifiText.classList.toggle('content-text-hide');
	})
	wifiButton.addEventListener('mouseleave',()=>{
		wifiText.classList.remove('content-text-hide');
		wifiText.classList.toggle('content-text-show');
	})

	//Show Paragraphs
	kidsButton.addEventListener('click',()=>{
		freeParagraph.classList.toggle('free-content-display')
	})
	wifiButton.addEventListener('click',()=>{
		freeParagraph.classList.toggle('free-content-display')
	})
	
}
navSlider();
birdContent();
gradContent();
foodContent();
freeContent();
picnicContent();

