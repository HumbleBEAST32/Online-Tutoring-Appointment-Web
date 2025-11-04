const educationStage = document.getElementById('educationStage');
  const gradeLevel = document.getElementById('gradeLevel');

  const grades = {
    elementary: [
      { value: '3', text: 'Grade 3' },
      { value: '4', text: 'Grade 4' },
      { value: '5', text: 'Grade 5' },
      { value: '6', text: 'Grade 6' },
    ],
    highschool: [
      { value: '7', text: 'Grade 7' },
      { value: '8', text: 'Grade 8' },
      { value: '9', text: 'Grade 9' },
      { value: '10', text: 'Grade 10' },
    ],
  };

  educationStage.addEventListener('change', () => {
    const stage = educationStage.value;
    
    // Clear previous options
    gradeLevel.innerHTML = '<option value="">Select Grade Level</option>';

    if (grades[stage]) {
      grades[stage].forEach(g => {
        const option = document.createElement('option');
        option.value = g.value;
        option.textContent = g.text;
        gradeLevel.appendChild(option);
      });
      gradeLevel.disabled = false;
    } else {
      gradeLevel.disabled = true;
    }
  });

  // Disable gradeLevel select initially
  gradeLevel.disabled = true;