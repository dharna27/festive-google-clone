// Simple snow effect
const snowCount = 50;
for (let i = 0; i < snowCount; i++) {
  const snowflake = document.createElement('div');
  snowflake.classList.add('snowflake');
  snowflake.style.left = Math.random() * 100 + 'vw';
  snowflake.style.animationDuration = 2 + Math.random() * 3 + 's';
  document.body.appendChild(snowflake);
}

