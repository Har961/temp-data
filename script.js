document.addEventListener('DOMContentLoaded', function () {
    const temperatureElement = document.getElementById('temperature');
    const humidityElement = document.getElementById('humidity');

    function fetchData() {
        fetch('https://api.thingspeak.com/channels/165462/feeds.json?api_key=JQ8377Q9Z7F3QEAJ&results=1')
            .then(response => response.json())
            .then(data => {
                const latestData = data.feeds[0];
                temperatureElement.textContent = latestData.field3; // Assuming temperature is in field1
                humidityElement.textContent = latestData.field4; // Assuming humidity is in field2
            })
            .catch(error => console.error('Error fetching data:', error));
    }

    // Fetch data initially and then every 15 seconds
    fetchData();
    setInterval(fetchData, 15000);
});
