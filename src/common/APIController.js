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

    } catch (error) {
        console.error(`Error deleting ${apiURL}:`, error);
    }
}

export async function postPutData(method, apiURL, dataObject, token, setUserLoginChange) {
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
            console.error(`Error posting task: ${response.statusText}`);
            return
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`Error posting task to ${apiURL}:`, error);
    }
}
