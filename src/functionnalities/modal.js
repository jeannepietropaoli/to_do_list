export const modalContainer = (()=> {
    const MODAL_CONTAINER = document.querySelector('.modalContainer');
    const closeModalBtn = document.querySelector('#closeModal');
    const openModal = ()=> {
        MODAL_CONTAINER.classList.add('shown');
    }
    const closeModal = ()=> {
        MODAL_CONTAINER.classList.remove('shown');
    }
    return {
        openModal,
        closeModal,
        closeModalBtn
    }
})()

modalContainer.closeModalBtn.addEventListener('click', ()=> {modalContainer.closeModal()});

export const form = (()=> {
    const INPUTS = Array.from(document.querySelectorAll('input'));
    const SUBMIT_BTN = document.querySelector('#submit');

    const getInputsValues = ()=> {
        return  INPUTS.map(input => {
            return input.value;
        })
    }

    const isOneInputInvalid = ()=> {
        const inputsValues = getInputsValues();
        return inputsValues.includes('');
    }

    const clearInputsValues = ()=> {
        INPUTS.forEach(input => input.value = '');
    }

    return {
        getInputsValues,
        isOneInputInvalid,
        clearInputsValues,
        SUBMIT_BTN
    }
})()





