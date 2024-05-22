import { toast } from 'react-toastify';


// customize by : https://fkhadra.github.io/react-toastify/introduction/
export const notifySuccess = (msg) => {
    toast.success(msg);
}

export const notifyWarning = (msg) => {
    toast.warning(msg);
}

export const notifyError = (msg) => {
    toast.error(msg);
}