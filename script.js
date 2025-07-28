const form = document.getElementById('abhyas-form'); // test
const responseDiv = document.getElementById('response');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  responseDiv.textContent = "Processing...";

  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  try {
    const res = await fetch('YOUR_N8N_WEBHOOK_URL', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await res.json();

    if (result.output) {
      responseDiv.textContent = result.output;
    } else {
      responseDiv.textContent = "Sorry, no response from AI.";
    }
  } catch (err) {
    responseDiv.textContent = "Error submitting form. Please try again later.";
  }
});
