export async function fetchData(apiURL, token) {
    try {
        const response = await fetch('http://localhost:8000/' + apiURL, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        const data = await response.json();
        // console.log("\n\nDataaaaa:", data)
        return data;
    } catch (error) {
        console.error(`Error fetching ${apiURL}:`, error);
    }
}

export async function deleteData(apiURL, token) {
    try {
        await fetch('http://localhost:8000/' + apiURL, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
    } catch (error) {
        console.error(`Error deleting ${apiURL}:`, error);
    }
}

export async function postPutData(method, apiURL, dataObject, token) {
    try {
        const response = await fetch('http://localhost:8000/' + apiURL, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(dataObject)
        });

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
