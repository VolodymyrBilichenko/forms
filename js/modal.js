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