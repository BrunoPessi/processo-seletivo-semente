function changeForm(args) {

    if (form1) {
        document.getElementById('form1').style.display = "none";
        document.getElementById('form2').style.display = "block";
    }


    //switch (args) {
    //case form1: {
    //document.getElementById('form1').style.display = "none";
    //document.getElementById('form2').style.display = "block";
    //document.location.href = urlForm1;
    //break;
    //}
    //case form2: {
    //document.location.href = urlForm2;
    //break;
    //}
    //}
}

function saveForm(args) {

    if (form1) {
        localStorage.setItem("email", document.getElementById('emailField').value);
        localStorage.setItem("nome", document.getElementById('nameField').value);
        localStorage.setItem("startup", document.getElementById('startupField').value);
        localStorage.setItem("frase", document.getElementById('fraseField').value);
        localStorage.setItem("checkbox", document.getElementById('checkboxField').value);
    }

    if (form2) {

        var radios = document.getElementsByName('radio');

        for (var i = 0, length = radios.length; i < length; i++) {
            if (radios[i].checked) {
                localStorage.setItem('form2', radios[i].value)
            }
        }
    }
}

function enviarParaGoogle() {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbzteOsK9j9xWdQlm7XUVoch6ca39lUOWg0h2ABvZN5QQ2Cj7Fod/exec'
    const form = document.forms['form2']

    form.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(document.forms['form1']) })
            .then(response => console.log('Success!', response))
            .catch(error => console.error('Error!', error.message))
    })
}