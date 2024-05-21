export async function fetchData(apiURL) {
    try {
        const response = await fetch('http://localhost:8000/' + apiURL);
        const data = await response.json();
        // console.log("\n\nDataaaaa:", data)
        return data;
    } catch (error) {
        console.error(`Error fetching ${apiURL}:`, error);
    }
}

export async function deleteData(apiURL) {
    try {
        const response = await fetch('http://localhost:8000/' + apiURL, {
            method: 'DELETE'
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`Error deleting ${apiURL}:`, error);
    }
}

export async function postData(apiURL, dataObject) {
    try {
        const response = await fetch('http://localhost:8000/' + apiURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
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
