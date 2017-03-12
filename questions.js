var nameInput = document.getElementById('question');


document.querySelector('form').addEventListener('submit', function (e) {

    //prevent the normal submission of the form
    e.preventDefault();
    console.log(nameInput.value)
    if(nameInput.value == 'FS20') {
        setImageVisible('clue4a', false)
        setImageVisible('5abc', true)
    }
    if(nameInput.value == 'M027130') {
        setImageVisible('clue4b', false)
        setImageVisible('5abc', true)
    }
    if(nameInput.value == 'CHP55') {
        setImageVisible('clue4c', false)
        setImageVisible('5abc', true)
    }

});


function setImageVisible(id, visible) {
    var img = document.getElementById(id);
    img.style.visibility = (visible ? 'visible' : 'hidden');
    img.style.height = (visible ? '100%' : '0')
}
