import { notifySuccess, notifyError } from '../common/Common';

export async function fetchData(apiURL, token, setUserLoginChange) {
    try {
        const response = await fetch('http://localhost:8000/' + apiURL, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        // 401 Unauthorized for invalid token
        // 403 forbidden for expired token
        if(response.status == 401 || response.status == 403){
            // alert(`Hey no auth!, response.status : ${response.status}`)

            // reset token and go to login page
            setUserLoginChange("");
            window.location.href="/";
            return
        }

        const data = await response.json();
        // console.log("\n\nDataaaaa:", data)
        return data;
    } catch (error) {
        console.error(`Error fetching ${apiURL}:`, error);
        notifyError('Error on loadig the data from server.')
    }
}

export async function deleteData(apiURL, token, setUserLoginChange) {
    try {
        const response = await fetch('http://localhost:8000/' + apiURL, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        // 401 Unauthorized for invalid token
        // 403 forbidden for expired token
        if(response.status == 401 || response.status == 403){
            // alert(`Hey no auth!, response.status : ${response.status}`)

            // reset token and go to login page
            setUserLoginChange("");
            window.location.href="/";
            return
        }

        notifySuccess('Task deleted successfully!')
    } catch (error) {
        console.error(`Error deleting ${apiURL}:`, error);
        notifyError('Error on deleting the task.')
    }
}

export async function postPutData(method, apiURL, dataObject, token, setUserLoginChange, customMsg) {

    // const action = method == 'POST' ? 'create' : 'update';
    // let errorMsg = '';
    // let successMsg = '';
    // if(customMsg){
    //     errorMsg = customMsg?.error;
    //     successMsg = customMsg?.success
    // }else{
    //     errorMsg = `Error on ${action} the task.`;
    //     successMsg = `Task ${action} was successfull!`;
    // }

    const action = method === 'POST' ? 'create' : 'update';
    let errorMsg = customMsg?.error || `Error on ${action} the task.`;
    let successMsg = customMsg?.success || `Task ${action} was successful!`;

    try {
        const response = await fetch('http://localhost:8000/' + apiURL, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(dataObject)
        });

        // 401 Unauthorized for invalid token
        // 403 forbidden for expired token
        if(response.status == 401 || response.status == 403){
            // alert(`Hey no auth!, response.status : ${response.status}`)

            // reset token and go to login page
            setUserLoginChange("");
            window.location.href="/";
            return
        }

        if (!response.ok) {
            console.error(`Error on post ${apiURL}: ${response.statusText}`);
            notifyError(errorMsg)
            return
        }

        notifySuccess(successMsg)

        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`Error on post ${apiURL}:`, error);
        notifyError(errorMsg)
    }
}
