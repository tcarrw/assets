/* 🌕 Illumina Harmonization Script · assets.plnt.earth
   Ensures every site shares the same background, theme, and navigation/footer. */
(function(){
  const colorSheet = "https://assets.plnt.earth/colors-daynight.css";
  const theme = "#dce9ff";
  document.addEventListener("DOMContentLoaded",()=>{
    /* Load color sheet if missing */
    const has = [...document.styleSheets].some(s=>s.href && s.href.includes("colors-daynight.css"));
    if(!has){
      const link=document.createElement("link");
      link.rel="stylesheet";link.href=colorSheet;
      document.head.appendChild(link);
    }

    /* Determine phase (simple day/night by hour) */
    const h=new Date().getHours();
    const night=(h>=20||h<6);
    const bgDay="radial-gradient(circle at center,var(--marina-pearl),var(--moon-blue),var(--moon-white))";
    const bgNight="linear-gradient(180deg,var(--moon-silver),var(--moon-blue),var(--moon-white))";
    document.body.style.background=night?bgNight:bgDay;

    /* Theme color */
    let meta=document.querySelector("meta[name=theme-color]");
    if(!meta){meta=document.createElement("meta");meta.name="theme-color";document.head.appendChild(meta);}
    meta.content=theme;

    /* Add moon marker comment for logs */
    const marker=document.createComment("🌕 Full-Moon Align · Nov 4 2025");
    document.body.prepend(marker);

    /* Inject shared nav/footer if missing */
    if(!document.querySelector("nav[data-illumina-nav]")){
      const nav=document.createElement("nav");
      nav.setAttribute("data-illumina-nav","");
      nav.innerHTML=`
        <a href="https://center.plnt.earth">Center</a> ·
        <a href="https://mirrorhoney.plnt.earth">MirrorHoney</a> ·
        <a href="https://froot.plnt.earth">Froot</a>`;
      nav.style.textAlign="center";nav.style.padding="12px";
      document.body.prepend(nav);
    }
    if(!document.querySelector("footer[data-illumina-footer]")){
      const foot=document.createElement("footer");
      foot.setAttribute("data-illumina-footer","");
      foot.style.textAlign="center";
      foot.style.padding="20px";
      foot.style.opacity="0.8";
      foot.innerHTML="© Illumina 2025 · Full-Moon Harmony";
      document.body.appendChild(foot);
    }
  });
})();
