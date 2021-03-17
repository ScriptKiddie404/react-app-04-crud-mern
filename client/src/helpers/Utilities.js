const closeAllInputs = () => {
    const inputs = Array.from(document.querySelectorAll('input'));
    inputs.forEach(input => {
        if (input.classList.contains('task__input')) {
            input.style.display = 'none';
        }
    });
}


const Utilities = {
    closeAllInputs
}

export default Utilities;