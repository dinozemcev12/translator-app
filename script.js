document.addEventListener('DOMContentLoaded', () => {
    const inp = document.querySelector("#input");
    const trb = document.querySelector("#translateBtn");
    const out = document.querySelector("#output");
    const email = 'student@logika.school';
    async function translateText() {
        const text = inp.value;
        const encode = encodeURIComponent(text);
        
        const url = `https://api.mymemory.translated.net/get?q=${encode}&langpair=uk|en&de=${email}`;
        const response = await fetch(url);
        const data = await response.json();
        out.innerHTML = data.responseData.translatedText;
    }
    trb.addEventListener("click",()=>{
        translateText();
    })


    
});