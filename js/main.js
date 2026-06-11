const inputEl = document.getElementById("input");
const clockEl = document.getElementById("clock");
const now = new Date();

const hour = now.getHours();
const minute = now.getMinutes();

clockEl.innerHTML = `
${hour}:${minute}`;
