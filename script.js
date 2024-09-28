$(document).ready(function() {
  fetchDashboardData();
    // Toggle sidebar visibility when hamburger menu is clicked
    $('#menuToggle').click(function() {
      let sidebar = $('#sidebar');
      if (sidebar.css('left') === '-200px') {
        sidebar.css('left', '0');
      } else {
        sidebar.css('left', '-200px');
      }
    });
  
    // Hide sidebar when clicking outside, but only on small screens
    $(document).click(function(event) {
      let sidebar = $('#sidebar');
      let menuToggle = $('#menuToggle');
  
      // Check if the screen width is less than 768px (small screens)
      if (window.innerWidth <= 768) {
        // Check if the click was outside the sidebar and menu toggle button
        if (!$(event.target).closest(sidebar).length && !$(event.target).closest(menuToggle).length) {
          if (sidebar.css('left') === '0px') {
            sidebar.css('left', '-200px'); // Close the sidebar
          }
        }
      }
    });
  
    // Ensure that the sidebar is always visible on larger screens when resizing the window
    $(window).resize(function() {
      let sidebar = $('#sidebar');
      if (window.innerWidth > 768) {
        sidebar.css('left', '0'); // Keep sidebar visible on larger screens
      } else {
        sidebar.css('left', '-200px'); // Hide sidebar on smaller screens
      }
    });
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
      .then(data => {
        console.log(data); // Process the API data
        // Add your logic to display data in the dashboard
        //$('#dashboard-content').html(JSON.stringify(data)); // Example of displaying the data
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });

  }