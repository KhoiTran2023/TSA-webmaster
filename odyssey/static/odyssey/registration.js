const createForm = document.querySelector('#create-acc-form');
const createStatus = document.querySelector('#create-status');

createForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(loginForm);

    fetch('/create-account/', {
    method: 'POST',
    body: formData
    })
    .then(response => {
    if (response.status === 200) {
        createStatus.style.display = "inline-block";
        createStatus.classList.add("alert-success");
        createStatus.innerHTML = 'Created account successfully';
        //change this to redirect to profile center
    } else {
        createStatus.style.display = "inline-block";
        createStatus.classList.add("alert-info");
        createStatus.innerHTML = 'Error';
    }
    })
    .catch(error => {
    console.error(error);
    });
});