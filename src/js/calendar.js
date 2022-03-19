// Get calendar events from the `app()` instance
events = app().tasks;

// Load this block whenever DOM Content is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');
    
    // Configure and render FullCalendar
    var calendar = new FullCalendar.Calendar(calendarEl, {
        events: events,

        initialView: 'dayGridMonth',
        headerToolbar: {
            left: 'title',
            center: '',
            right: 'prev,next'
        },

        height: "auto",
    });

    calendar.render();   
});