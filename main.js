
    const radios = document.querySelectorAll('input[name="helpType"]');
    const reservationForm = document.getElementById('reservationForm');
    const orderForm = document.getElementById('orderForm');
    const feedbackForm = document.getElementById('feedbackForm');

    function hideAllForms() {
        reservationForm.classList.add('hidden');
    orderForm.classList.add('hidden');
    feedbackForm.classList.add('hidden');
  }

  radios.forEach(radio => {
        radio.addEventListener('change', () => {
            hideAllForms();
            if (radio.value === 'reserve') {
                reservationForm.classList.remove('hidden');
            } else if (radio.value === 'order') {
                orderForm.classList.remove('hidden');
            } else if (radio.value === 'feedback') {
                feedbackForm.classList.remove('hidden');
            }
        });
  });
  