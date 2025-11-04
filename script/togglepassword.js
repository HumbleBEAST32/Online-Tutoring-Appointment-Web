document.addEventListener("DOMContentLoaded", () => {
    const toggles = document.querySelectorAll(".toggle-password");

    toggles.forEach(toggle => {
        toggle.addEventListener("click", () => {
            const targetId = toggle.getAttribute("data-target");
            const input = document.getElementById(targetId);

            if (input.type === "password") {
                input.type = "text";
                toggle.textContent = "👁️"; 
            } else {
                input.type = "password";
                toggle.textContent = "👁️‍🗨️"; 
            }
        });
    });
});
