document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.bottom-nav .nav-item');
    const screens = document.querySelectorAll('.screen-content .screen');
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    // --- Bottom Navigation Handling ---
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default anchor behavior

            const targetId = item.getAttribute('data-target');
            const targetScreen = document.getElementById(targetId);

            if (targetScreen) {
                // Deactivate current active screen and nav item
                screens.forEach(screen => screen.classList.remove('active'));
                navItems.forEach(nav => nav.classList.remove('active'));

                // Activate new screen and nav item
                targetScreen.classList.add('active');
                item.classList.add('active');

                // Scroll screen content to top (optional)
                const screenContent = targetScreen.closest('.screen-content');
                if (screenContent) {
                    screenContent.scrollTop = 0;
                }
            }
        });
    });

    // --- Tab Handling (for Progress screen) ---
     tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('data-target');
            const targetContent = document.getElementById(targetId);

            if (targetContent) {
                // Deactivate current active tab button and content
                tabButtons.forEach(btn => btn.classList.remove('active'));
                tabContents.forEach(content => content.classList.remove('active'));

                // Activate new tab button and content
                button.classList.add('active');
                targetContent.classList.add('active');
            }
        });
    });

     // Simple Workout Screen Navigation Simulation
     const startWorkoutButton = document.querySelector('.btn-start-workout');
     const workoutScreenNavItem = document.querySelector('.nav-item[data-target="workout-screen"]'); // Assuming you add this nav item if needed, otherwise find screen directly
     const homeScreenNavItem = document.querySelector('.nav-item[data-target="home-screen"]');
     const workoutScreen = document.getElementById('workout-screen');
     const homeScreen = document.getElementById('home-screen');

     if (startWorkoutButton && workoutScreen && homeScreen && homeScreenNavItem) {
        startWorkoutButton.addEventListener('click', () => {
            screens.forEach(screen => screen.classList.remove('active'));
            navItems.forEach(nav => nav.classList.remove('active'));
            workoutScreen.classList.add('active');
            // No nav item active during workout? Or activate a temporary state?
        });
     }
     // Add logic for closing workout screen (e.g., clicking the 'X' or 'Stop')
     const closeWorkoutButton = document.querySelector('#workout-screen .workout-header span:last-child'); // The 'X'
     const stopWorkoutButton = document.querySelector('#workout-screen .btn-stop');

     function returnToHome() {
         if(workoutScreen && homeScreen && homeScreenNavItem) {
             screens.forEach(screen => screen.classList.remove('active'));
             navItems.forEach(nav => nav.classList.remove('active'));
             homeScreen.classList.add('active');
             homeScreenNavItem.classList.add('active');
             const screenContent = homeScreen.closest('.screen-content');
             if (screenContent) {
                 screenContent.scrollTop = 0;
             }
         }
     }

     if(closeWorkoutButton) closeWorkoutButton.addEventListener('click', returnToHome);
     if(stopWorkoutButton) stopWorkoutButton.addEventListener('click', returnToHome);


});