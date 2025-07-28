const form = document.getElementById('abhyas-form'); // test
const responseDiv = document.getElementById('response');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  responseDiv.textContent = "Processing...";

  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  try {
    const res = await fetch('https://dev-digidaan.app.n8n.cloud/webhook-test/87ff4dd3-c30f-4736-86d9-93ce7c24379d', {
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
      responseDiv.textContent = "Thanks! Your submission has been received.";
    }
  } catch (err) {
    responseDiv.textContent = "Error submitting form. Please try again later.";
  }
});
