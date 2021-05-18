
const container = document.querySelector('.container');

window.addEventListener('scroll',()=>{
	const {scrollHeight,scrollTop,clientHeight} = document.documentElement;
	if(scrollTop + clientHeight > scrollHeight - 5){
		setTimeout(display,10);

	}
});

let i=25;
function display(){

	const elem = document.createElement('div');
	elem.className = 'text';
	elem.innerHTML = `<h1>MASAI STUDENT${" "}${++i}</h1>
	`;
	container.appendChild(elem);
}