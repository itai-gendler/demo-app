document.addEventListener('DOMContentLoaded', () => {
    const fetchButton = document.getElementById('fetch-button');
    const serverMessage = document.getElementById('server-message');
    
    // Set initial message
    serverMessage.textContent = 'Message will appear here...';
    
    // Add click event to the button
    fetchButton.addEventListener('click', async () => {
        try {
            // Display loading state
            serverMessage.textContent = 'Loading...';
            
            // Fetch data from the API
            const response = await fetch('/api/hello');
            const data = await response.json();
            
            // Display the message with timestamp
            serverMessage.innerHTML = `
                <strong>${data.message}</strong>
                <br>
                <small>Server time: ${new Date(data.timestamp).toLocaleString()}</small>
            `;
        } catch (error) {
            // Handle errors
            serverMessage.textContent = 'Error fetching message from server!';
            console.error('Error:', error);
        }
    });
});
