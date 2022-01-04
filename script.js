const random_dog=document.getElementById('random_dog');
const dog_button=document.getElementById('dog_button');

function getRandomDog() {
	try{

		fetch('https://random.dog/woof.json')
		.then(res => res.json())
		.then(data => {
			if(data.url.includes('.mp4')) {
				getRandomDog();
			}
			else {
				random_dog.innerHTML = `<img src=${data.url} alt="dog"/>`;
			}
		});
	}
		catch(e)
		{
			console.log(e);
		}
		
}
dog_button.addEventListener('click',getRandomDog)
