$(document).ready(function () {
    fetchDashboardData();
});

function fetchDashboardData() {
    const url = `${CONFIG.BASE_URL}/api/general/getExpenseDetails`; // Use base URL from config.js

    fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
            //'Authorization': `Bearer ${CONFIG.API_KEY}`, // If you have an API key or token
        },
    })
        .then(response => response.json())
        .then(response => {
            console.log(response); // Process the API data
            // Add your logic to display data in the dashboard
            //$('#dashboard-content').html(JSON.stringify(data)); // Example of displaying the data

            if (response.length == 0) {
                $("#incometable").find("tr:gt(0)").remove();
            }
            $("#incometable").find("tr:gt(0)").remove();
            for (var i = 0; i < response.length; i++) {

                tr = $('<tr/>');
                tr.append("<td style='display: none;'>" + response[i].transactionId + "</td>");
                tr.append("<td>" + response[i].amount + "</td>");
                tr.append("<td>" + response[i].taxAmountCut + "</td>");
                tr.append("<td>" + response[i].transactionType + "</td>");
                tr.append("<td>" + response[i].date + "</td>");
                tr.append("<td>" + response[i].categoryName + "</td>");
                tr.append("<td>" + response[i].ownerName + "</td>");
                tr.append("<td>" + response[i].remarks + "</td>");
                // tr.append("<td><button class='buttonnew' onclick=GetCustomerById('" + response[i].customerId + "')>Edit</button></td>");
                // tr.append("<td><button class='buttonnew' onclick=DeleteCustomer('" + response[i].customerId + "')>Delete</button></td>");
                $('#incometable').append(tr);
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });

}