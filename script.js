document.querySelector('.custom-color-selector').addEventListener('click',(e)=>{
    if(e.target.tagName=="LI"){
        [...e.target.parentElement.childNodes].forEach(ele=>ele?.classList?.remove('active'));
        e.target.classList.add('active');
        let styles = getComputedStyle(e.target);
        console.log(styles.getPropertyValue('--custom-hue'))
        document.querySelector('body').style.setProperty('--custom-hue',styles.getPropertyValue('--custom-hue'))
        document.querySelector('body').style.setProperty('--custom-color',styles.getPropertyValue('--custom-color'))
        document.querySelector('.umbrella').style.setProperty('filter',"hue-rotate("+(styles.getPropertyValue('--custom-hue')-200)+"deg)")
    }
})