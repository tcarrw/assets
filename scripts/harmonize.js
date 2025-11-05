/* 🌕 Illumina Harmonization */
(function(){
  const colorSheet = "https://assets.plnt.earth/colors-daynight.css";
  const theme = "#dce9ff";
  document.addEventListener("DOMContentLoaded",()=>{
    // ensure stylesheet
    const has = [...document.styleSheets].some(s=>s.href && s.href.includes("colors-daynight.css"));
    if(!has){
      const link=document.createElement("link");
      link.rel="stylesheet"; link.href=colorSheet;
      document.head.appendChild(link);
    }
    // background
    const h=new Date().getHours();
    const night=(h>=20||h<6);
    document.body.style.background=night
      ? "linear-gradient(180deg,var(--moon-silver),var(--moon-blue),var(--moon-white))"
      : "radial-gradient(circle at center,var(--marina-pearl),var(--moon-blue),var(--moon-white))";
    // theme color
    let meta=document.querySelector("meta[name=theme-color]");
    if(!meta){meta=document.createElement("meta");meta.name="theme-color";document.head.appendChild(meta);}
    meta.content=theme;
  });
})();
