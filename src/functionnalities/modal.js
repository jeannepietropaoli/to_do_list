import { Task } from '../functionnalities/Task';
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
        form.clearInputsValues();
    }
    const activateCloseBtn = (()=> {
        closeModalBtn.addEventListener('click', ()=> {
            closeModal();
        })
    })()
    return {
        openModal,
        closeModal,
        closeModalBtn
    }
})()

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

    const addStateValue = ()=> {
        INPUTS.push(document.querySelector('.modal select'));
    }

    const getTaskDetailsValues = ()=> {
        addStateValue();
        return  INPUTS.map(input => {
            return input.value;
        })
    }

    const isEveryInputValid = ()=> {
        return INPUTS.every(input => {
            return input.value !== '';
        })
    }

    const clearInputsValues = ()=> {
        INPUTS.forEach(input => input.value = '');
        REQUIRED_INPUTS.forEach(requiredInput => {
            requiredInput.setAttribute('placeholder', ' ')
        })
    }

    const filterInvalidInputs = () => {
        const invalidInputs = INPUTS.filter(input => {
            return input.value == ''
        })
        return invalidInputs
    }

    const errorDisplay = () => {
        filterInvalidInputs().forEach(invalidInput => {
            invalidInput.setAttribute('placeholder', 'enter a valid value');
        })
    }

    return {
        INPUTS,
        getTaskDetailsValues,
        isEveryInputValid,
        clearInputsValues,
        SUBMIT_BTN,
        errorDisplay
    }
})()

export const formEditMode = (()=> {
    const SUBMIT_CHANGES_BTN = document.querySelector('#editMode');

    let editModeActivated = false; 

    const open = (currentInputs)=> {
        editModeActivated = true;
        form.SUBMIT_BTN.disabled = true;
        SUBMIT_CHANGES_BTN.disabled = false;
        fillFormInputsWithCurrentValues(currentInputs);
        modalContainer.openModal();
    }

    const inputsValidation = () => {
        form.INPUTS.forEach(input => {
            input.addEventListener('change', ()=> {
                if (editModeActivated) {
                    (form.isEveryInputValid()) ? SUBMIT_CHANGES_BTN.disabled = false : 
                    SUBMIT_CHANGES_BTN.disabled = true;
                }
                })
            })
    } 

    const fillFormInputsWithCurrentValues = (currentValues) => {
        form.INPUTS.forEach((input) => {
            let currentValue;
            if (input.id === 'state') {
                currentValue = currentValues.filter((element)=> { 
                    return element.className === 'stateContainer';
                }) 
                currentValue = currentValue[0].lastChild.value;
            }
            else {
                currentValue = currentValues.filter((element)=> {
                    return element.className === `_${input.id}`;
                })
                currentValue = currentValue[0].value
            }
            input.value = currentValue;
        }) 
    }

    const validateChanges = (e, inputs, stateColorPoint, flag)=> {
            let editedTask = new Task(...form.getTaskDetailsValues());
            ProjectList.currentProject.taskList.editTask(e.target.parentElement.parentElement.getAttribute('data-index'), editedTask);
            const taskContainer = e.target.parentElement.parentElement;
            editButton.displayEditedTask(editedTask, inputs, stateColorPoint, flag, taskContainer);
            manageModalReset();
            form.SUBMIT_BTN.disabled = false;
            SUBMIT_CHANGES_BTN.disabled = true;
    }

    return { 
        inputsValidation,
        fillFormInputsWithCurrentValues,
        SUBMIT_CHANGES_BTN, 
        open,
        validateChanges,
        editModeActivated
    }
})()

export function manageModalReset() {
    modalContainer.closeModal();
    form.clearInputsValues();
}






