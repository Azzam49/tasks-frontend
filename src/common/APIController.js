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