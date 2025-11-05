/* 🌗 Illumina Phase Helper
   Calculates day within 42-day cycle and simple moon phase symbol. */
window.IlluminaPhase = (function(){
  const start = new Date("2025-11-05T00:00:00Z"); // Illumina 1 start
  const now = new Date();
  const diff = Math.floor((now - start)/86400000);
  const day = (diff % 42) + 1;
  const phaseIndex = Math.floor((day/42)*8);
  const symbols = ["🌑","🌒","🌓","🌔","🌕","🌖","🌗","🌘"];
  const phase = symbols[phaseIndex];
  return { day, phase };
})();
