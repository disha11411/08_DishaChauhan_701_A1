import fetch from 'node-fetch';

async function fetchGoogle() {
  try {
    const response = await fetch('https://www.google.com');
    const data = await response.text();
    console.log(data);
  } catch (error) {
    console.error('Error fetching Google page:', error);
  }
}

fetchGoogle();
