function borderNPM(){
    let images = document.querySelectorAll('.borderNPM');

    if(options.shadow_type === 'hard')
        options.shadow_type = '10px';
    else    
        options.shadow_type = '1px';

    images.forEach(image => {
        image.style.border = `${options.shadow_type} solid red`;
        if(options.padding){
            image.style.padding = '1em';
        }
    })
}
module.exports.borderNPM = borderNPM;