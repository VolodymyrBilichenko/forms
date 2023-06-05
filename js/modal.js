document.addEventListener('DOMContentLoaded', function() {
    const signInRadio = document.getElementById('tab-1');
    const signUpRadio = document.getElementById('tab-2');
    const formEmailId = document.querySelector('.form-email-id');
    const formPhone = document.querySelector('.form-phone');

    signInRadio.addEventListener('change', function() {
        formEmailId.style.display = 'block';
        formPhone.style.display = 'none';
    });

    signUpRadio.addEventListener('change', function() {
        formEmailId.style.display = 'none';
        formPhone.style.display = 'block';
    });
});

function toggleForms(event) {
    event.preventDefault();

    const formContainer1 = document.getElementById("form-container-1");
    const formPrivacy = document.getElementsByClassName("form-privacy")[0];
    const formContainer2 = document.getElementById("form-container-2");
    let timer = document.querySelector(".loading-form");


    timer.style.display = "block"
    setTimeout(() => {
        timer.style.display = "none"
        formContainer2.style.display = "block";
        formContainer1.style.display = "none";
        formPrivacy.style.display = "none";
    }, 2000)
}
