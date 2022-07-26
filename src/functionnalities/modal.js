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
    const INPUTS = Array.from(document.querySelectorAll('input[id]'));
    const SUBMIT_BTN = document.querySelector('#submit');
    const SUBMIT_CHANGES_BTN = document.querySelector('#editMode');

    const editMode = () => {
        SUBMIT_BTN.setAttribute('id', 'editMode');
        SUBMIT_BTN.textContent = 'Submit changes';
    }

    const resetMode = ()=> {
        SUBMIT_BTN.setAttribute('id', 'submit');
        SUBMIT_BTN.textContent = 'Add to the list';
    } 

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

    const fillFormInputsWithCurrentValues = (currentValues) => {
        INPUTS.forEach((input) => {
            const currentValue = currentValues.filter((element)=> {
                return element.className === `_${input.id}`;
            }) 
            input.value = currentValue[0].value;
         
        }) 
    }

    return {
        INPUTS,
        getInputsValues,
        isOneInputInvalid,
        clearInputsValues,
        SUBMIT_BTN,
        SUBMIT_CHANGES_BTN,
        fillFormInputsWithCurrentValues,
        editMode,
        resetMode
    }
})()

export function manageModalReset() {
    modalContainer.closeModal();
    form.clearInputsValues();
}





