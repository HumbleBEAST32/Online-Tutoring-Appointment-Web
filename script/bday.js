document.addEventListener("DOMContentLoaded", function () {
    const birthDay = document.getElementById("birthDay");
    const birthYear = document.getElementById("birthYear");
    const birthMonth = document.getElementById("birthMonth");
    const ageInput = document.getElementById("age");

    // Fill days 1–31
    for (let d = 1; d <= 31; d++) {
        let opt = document.createElement("option");
        opt.value = d;
        opt.textContent = d;
        birthDay.appendChild(opt);
    }

    // Fill years from 2025 to 1920
    for (let y = 2025; y >= 1920; y--) {
        let opt = document.createElement("option");
        opt.value = y;
        opt.textContent = y;
        birthYear.appendChild(opt);
    }

    // Calculate age
    function calculateAge() {
        let month = birthMonth.value;
        let day = birthDay.value;
        let year = birthYear.value;

        if (month && day && year) {
            let today = new Date();
            let birthday = new Date(year, month - 1, day);
            let age = today.getFullYear() - birthday.getFullYear();
            let m = today.getMonth() - birthday.getMonth();

            if (m < 0 || (m === 0 && today.getDate() < birthday.getDate())) {
                age--;
            }

            ageInput.value = age;
        }
    }

    birthMonth.addEventListener("change", calculateAge);
    birthDay.addEventListener("change", calculateAge);
    birthYear.addEventListener("change", calculateAge);
});
