let counter = document.querySelector('.counter')
const addcount =document.querySelector('#AddCountBtn')
const lowercount = document.querySelector('#LowerCountBtn')



let count = 0;


addcount.addEventListener('click', incrementcounter)
lowercount.addEventListener('click', decrementcounter) 


function incrementcounter() {
	
	count++
	counter.innerHTML = count;
	if (counter.innerHTML>'0') {
		counter.style.color = 'green'
	}
	else if (counter.innerHTML === '0') {
		counter.style.color = 'white';
	}
}


function decrementcounter() {
	
	count--
	counter.innerHTML = count;

		if (counter.innerHTML<'0') {
		counter.style.color = 'red'
	}
	else if (counter.innerHTML === '0') {
		counter.style.color = 'white';
	}

}