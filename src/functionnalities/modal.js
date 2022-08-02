import {Task, TaskList} from '../functionnalities/Task';
import { editButton } from '../view  ihm/TaskBoard';
import { ProjectList } from '../functionnalities/Project';

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

modalContainer.closeModalBtn.addEventListener('click', ()=> {
    modalContainer.closeModal();
    form.clearInputsValues();
});

export const form = (()=> {
    const INPUTS = Array.from(document.querySelectorAll('.modal input[id]'));
    const SUBMIT_BTN = document.querySelector('#submit');
    const REQUIRED_INPUTS = Array.from(document.querySelectorAll('input[required]'));

    const removePlaceholderAfterInputUse = (()=> {
        REQUIRED_INPUTS.forEach(requiredInput => {
            requiredInput.addEventListener('click', ()=> {
                requiredInput.removeAttribute('placeholder');
            })
        })
    })()

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
        REQUIRED_INPUTS.forEach(requiredInput => {
            requiredInput.setAttribute('placeholder', ' ')
        })
    }

    return {
        INPUTS,
        getInputsValues,
        isOneInputInvalid,
        clearInputsValues,
        SUBMIT_BTN
    }
})()

export const formEditMode = (()=> {
    const SUBMIT_CHANGES_BTN = document.querySelector('#editMode');

    const open = (currentInputs)=> {
        form.SUBMIT_BTN.disabled = true;
        SUBMIT_CHANGES_BTN.disabled = false;
        fillFormInputsWithCurrentValues(currentInputs);
        modalContainer.openModal();
    }
    
    const inputsValidation = () => {
        form.INPUTS.forEach(input => {
            input.addEventListener('change', ()=> {
                (!form.isOneInputInvalid()) ? SUBMIT_CHANGES_BTN.disabled = false : 
                    SUBMIT_CHANGES_BTN.disabled = true;
                })
            })
    }

    const fillFormInputsWithCurrentValues = (currentValues) => {
        form.INPUTS.forEach((input) => {
            const currentValue = currentValues.filter((element)=> {
                return element.className === `_${input.id}`;
            }) 
            input.value = currentValue[0].value;
        }) 
    }

    const validateChanges = (e, inputs)=> {
            let editedTask = new Task(...form.getInputsValues());
            ProjectList.currentProject.taskList.editTask(e.target.parentElement.parentElement.getAttribute('data-index'), editedTask);
            editButton.displayEditedTask(editedTask, inputs);
            manageModalReset();
            form.SUBMIT_BTN.disabled = false;
            SUBMIT_CHANGES_BTN.disabled = true;
    }

    return { 
        inputsValidation,
        fillFormInputsWithCurrentValues,
        SUBMIT_CHANGES_BTN, 
        open,
        validateChanges
    }
})()

export function manageModalReset() {
    modalContainer.closeModal();
    form.clearInputsValues();
}






