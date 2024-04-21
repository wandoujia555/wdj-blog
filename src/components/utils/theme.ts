import { ref,watch } from "vue"
//@ts-ignore
import lightCss from"highlight.js/styles/stackoverflow-light.css"
//@ts-ignore
import darkCss from"highlight.js/styles/stackoverflow-dark.css"




import lightUrl from "highlight.js/styles/stackoverflow-light.css?url";
import darkUrl from "highlight.js/styles/stackoverflow-dark.css?url"

export const theme = ref("dark")
var link = document.createElement("link")
link.href = lightUrl;
link.rel = 'stylesheet';
link.type = 'text/css';
document.head.appendChild(link);

document.documentElement.className=theme.value
if(theme.value=="dark"){
    link.href = darkUrl;
    document.documentElement.className="dark"
}
else {
    link.href = lightUrl;
    document.documentElement.className="light"
}


watch(theme,(newQuestion,_)=>{

    if(newQuestion=="dark"){
        link.href = darkUrl;
        document.documentElement.className="dark"
    }
    else {
        link.href = lightUrl;
        document.documentElement.className="light"
    }
})