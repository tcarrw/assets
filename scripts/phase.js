/* simple 42-day Illumina cycle helper */
window.IlluminaPhase = (function(){
  const start = new Date("2025-11-05T00:00:00Z"); // Illumina 1 start
  const now = new Date();
  const diff = Math.floor((now - start)/86400000);
  const day = (diff % 42) + 1;
  const phase = ["🌑","🌓","🌕","🌗"][Math.floor(day/10)%4];
  return { day, phase };
})();
