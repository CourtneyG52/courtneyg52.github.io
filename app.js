const projects = document.getElementsByClassName('project-list');

for(i=0; i<projects.length; i++){
	projects[i].addEventListener('click', function(){
	this.classList.toggle('active')
	})
}