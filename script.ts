const toggelButton =document.getElementById('toggel-skills')as HTMLButtonElement;
const skills=document.getElementById('skills')as HTMLElement;

toggelButton.addEventListener('click', ()=>{
    if(skills.style.display==='none'){
        skills.style.display = 'block'

    }else{
        skills.style.display ='none'
    }
});