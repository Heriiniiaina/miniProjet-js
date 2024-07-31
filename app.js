// Liste des mots
const mots = [
    "JAVASCRIPT",
    "DART",
    "HTTP",
    "REACT",
    "VISUAL",
    "GIGABYTE",
    "ASROCK",
    "PYTHON",
    "PHP",
    "ASUS",
    "IGGLIA",
    "ESSIA",
    "ISAIA",
    "EMP",
    "ICMP",
    "MONGOOSE",
    "ASSEMBLEUR",
    "BONJOUR",
    "SALAMA",
    "MERCI",
    "LUNDI",
    "MERCREDI",
    "JEUDI",
    "VENDREDI",
    "ORDINATEUR",
    "SMARTPHONE",
    "UNIVERSITE",
    "MUSIC"
] 
let tab =[]
const index = Math.floor(Math.random() * mots.length)
const mot = mots[index]
let vie = 5
const resultat = document.querySelector(".resultat")
function afficheVie(){

    document.querySelector(".vie").innerHTML = `Vie restant: ${vie} `
}
afficheVie()
// affichage des _ eo am place le cacactere
for(i=0;i<mot.length;i++){
    tab.push("_")
}
function ajout(){
    for(i=0;i<mot.length;i++){
        const p = document.createElement("p")
        p.textContent= tab[i]
        p.className = `p${i} caractere`
        letter.appendChild(p)
    }
}
// Verification du mot 
function verifier(){
    if(tab.join("")==mot) return true
    return false
}

const clavier = document.querySelector(".clavier")
for(i=0;i<26;i++){
    const p = document.createElement("button")
    p.textContent = String.fromCharCode(65+i)
    p.className = "touche"
    clavier.appendChild(p)
}
function verif(c){
    let t = []
    for(i=0;i<mot.length;i++) 
        if(mot[i]==c) t.push(i)
    return t
}
const letter = document.querySelector(".lettre")
const restart = document.querySelector(".restart")
const btnRestart = document.createElement("button")
btnRestart.innerHTML = "Restart"
btnRestart.className = "btn-restart"

restart.appendChild(btnRestart)
document.querySelector(".btn-restart").addEventListener("click",()=>{
    window.location.reload()
})
const touches = document.querySelectorAll(".touche")
// fonction midesactiver anle caractere
function stop(){
    touches.forEach(touche=>{
        touche.disabled = true
    })
}
touches.forEach(touche =>{
    touche.addEventListener("click",function onClick(e){
        if(mot.includes(this.innerHTML)){
           let t = verif(this.innerHTML)
           t.forEach(index =>{
                p = document.querySelector(`.p${index}`)
                tab[index] = this.innerHTML
                p.innerHTML = this.innerHTML
               
           })
           victoire = verifier()
           if(victoire) {
            resultat.innerHTML = `Felicitation vous avez gagné! &#x1F60B`
            resultat.className = "win"
            stop()
            btnRestart.style.display = "block"
            
           }
        } else{
            vie--
            afficheVie()
            if(vie==4)
                document.querySelector(".hazo").style.display = "block"
            if(vie==3)
                document.querySelector(".tete").style.display = "block"
            if(vie==2)
                document.querySelector(".corps").style.display = "block"
            if(vie==1)
                document.querySelectorAll(".mains").forEach(pied=>pied.style.display = "block")
            if(vie==0)
                document.querySelectorAll(".pieds").forEach(main=>main.style.display = "block")
        }
        if(vie==0) {
            resultat.innerHTML = `Dommage vous avez perdu! &#x1F595 Le mot était ${mot}`
            resultat.className = "lost"
            stop()
            btnRestart.style.display = "block"
         
        }
        // midesactiver anle caractere voatsindry
        this.disabled = true
        this.removeEventListener("click",onClick)

    })
})
ajout()

console.log(mot)
