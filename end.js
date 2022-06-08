let  trust = sessionStorage.getItem("trust");
let  neglect = sessionStorage.getItem("neglect");
let guilt = sessionStorage.getItem("guilt");
let  abandonment = sessionStorage.getItem("abandonment");
let unworthy = sessionStorage.getItem("unworthy")

let mess;
let typo;
//abandonment
if (
   abandonment >  neglect &&
   abandonment > guilt &&
   abandonment >  trust &&
   abandonment > unworthy
) {
  typo = "Abandonment Wound ";
  mess = [
    "This wound is caused when you were abandoned by either or both of your parents.  You had to fend for yourself and this has caused you to be very needy in relationships.  You are afraid of being alone and bounce from one relationship to the next with little to no breaks in between.  You often attract emotionally unavailable people such as married men, or men who have commitment issues.",
    "False Identity:  I am not wanted, I am not good enough, I am alone, I am not worthy of love"
  ];
}

// neglect
else if (
   neglect >  trust &&
   neglect > guilt &&
   neglect >  abandonment &&
   neglect > unworthy
) {
  typo = "Neglect Wound";
  mess = [
    "This wound is caused by either or both parents neglecting the child during their early childhood years.  They grow up and because of the neglect struggle with setting boundaries, being vulnerable and expressing their emotions.  When you get into a loving intimate relationship, you don’t know what to do with it because you’ve never had it before.",
    "<br>",
    "False Identity:  I am not wanted, I am not good enough, I am not worthy of love",
  ]; 
}
//guilt
else if (
  guilt >  neglect &&
  guilt >  trust &&
  guilt >  abandonment &&
  guilt > unworthy
) {
  typo = "Guilt Wound";
  mess = [
    "This wound is caused by either or both of your parents using manipulation to get what they want from you.  They make you feel guilty.  This lead you to feel very guilty and give in.  Thus you adopt this style of guilt manipulation (also known as guilt-tripping) in your relationships as well.  You often times are self-sacrificing and put others needs ahead of your own because you feel your wants, needs or desires don’t matter that much.  Self-sacrificing people often attract Narcissist because you have the same energy frequency of lack – the narcissist feels like there is not enough to go around, so he’s going get all his needs met over yours.  The self-sacrificing woman also comes from a space of lack because she believes that there is not enough to go around, hence she’s going to give up all of her wants, needs and desires so someone else can have what they desire.", "<br>",
    "False Identity:  I am wrong, I am not worthy, I am not good enough",
  ]; 
}
// trust
else if (
   trust >  neglect &&
   trust > guilt &&
   trust >  abandonment &&
   trust > unworthy
) {
  typo = "Trust Wound";
  mess = [
    "Do you feel like you don’t trust yourself to make the right decision? This wound is caused by a child being abused physically, emotionally or mentally by either/both parents or a trusted person.  This causes you to go into a hyper-vigilant mode to overprotect yourself and your children.  You often times don’t feel safe and feel people are out to get you.  You tend to avoid intimate long-term relationships for fear of being hurt.  You struggle with trusting yourself and others, therefore seek a lot of external validation.  This causes you a lot of pain in your life because you often times get let down simply by seeking validation outside of yourself, which you should find within.",
    "<br>","False Identity:  I am unsafe (coupled with anxiety and/or paranoia)",
  ]; 
}
// unworthy
else if (
  unworthy >  neglect &&
  unworthy > guilt &&
  unworthy >  abandonment &&
  unworthy > trust
) {
 typo = "Not Good Enough/Unworthy Wound";
 mess = [
 " This Wound is caused by an excessive amount of criticism from either or both parents during your early childhood years.  You end up in your adult life having unconscious feelings of being “not worthy” or “not good enough.”  This shows up as your perfectionist tendencies.  It is also manifests as you being over-critical of others.  This is you simply projecting your feelings of unworthiness on others to avoid feeling this negative feeling of unworthiness yourself.  Your repression of your unworthiness, gives rise to your Shadow.  ",
 "<br>","False Identity:  I am flawed, I am unworthy, I am not good enough",
 ]; 
}

//ab === neg
else if (
  abandonment ==  neglect &&
  abandonment >  trust &&
  abandonment> unworthy &&  
  abandonment>  guilt
) {
  typo = "Abandonment Wound";
  mess = [
    "This wound is caused when you were abandoned by either or both of your parents.  You had to fend for yourself and this has caused you to be very needy in relationships.  You are afraid of being alone and bounce from one relationship to the next with little to no breaks in between.  You often attract emotionally unavailable people such as married men, or men who have commitment issues." ,
    "<br>", "False Identity:  I am not wanted, I am not good enough, I am alone, I am not worthy of love" ,
   
  ];
  typa = "Neglect Wound ";
  mesi =   [  "This wound is caused by either or both parents neglecting the child during their early childhood years.  They grow up and because of the neglect struggle with setting boundaries, being vulnerable and expressing their emotions.  When you get into a loving intimate relationship, you don’t know what to do with it because you’ve never had it before.",
  "<br>", "False Identity:  I am not wanted, I am not good enough, I am not worthy of love",]
  const mav = mesi.map((mg) => `<li>` + mg + `</li>` ).join("");
  const headmsgs = document.querySelector(".headmsgs");
  const msdme = document.querySelector(".msdhere");
  msdme.className = "center-item";
  headmsgs.innerHTML = typa;
  msdme.innerHTML = mav;
  
}

//ab === gu
else if (
  abandonment ==  guilt &&
  abandonment >  trust &&
  abandonment> unworthy &&  
  abandonment>  neglect
) {
  typo = "Abandonment Wound";
  mess = [
    "This wound is caused when you were abandoned by either or both of your parents.  You had to fend for yourself and this has caused you to be very needy in relationships.  You are afraid of being alone and bounce from one relationship to the next with little to no breaks in between.  You often attract emotionally unavailable people such as married men, or men who have commitment issues.",
    "<br>","False Identity:  I am not wanted, I am not good enough, I am alone, I am not worthy of love",
    
  
  ];
  typa = "Guilt Wound";
  mesi =   ["This wound is caused by either or both of your parents using manipulation to get what they want from you.  They make you feel guilty.  This lead you to feel very guilty and give in.  Thus you adopt this style of guilt manipulation (also known as guilt-tripping) in your relationships as well.  You often times are self-sacrificing and put others needs ahead of your own because you feel your wants, needs or desires don’t matter that much.  Self-sacrificing people often attract Narcissist because you have the same energy frequency of lack – the narcissist feels like there is not enough to go around, so he’s going get all his needs met over yours.  The self-sacrificing woman also comes from a space of lack because she believes that there is not enough to go around, hence she’s going to give up all of her wants, needs and desires so someone else can have what they desire.",
  "<br>","False Identity:  I am wrong, I am not worthy, I am not good enough",]
  const mav = mesi.map((mg) => `<li>` + mg + `</li>` ).join("");
  const headmsgs = document.querySelector(".headmsgs");
  const msdme = document.querySelector(".msdhere");
  msdme.className = "center-item";
  headmsgs.innerHTML = typa;
  msdme.innerHTML = mav;
  
}
//ab == tru
else if (
  abandonment ==  trust &&
  abandonment >  guilt &&
  abandonment> unworthy &&  
  abandonment>  neglect
) {
  typo = "Abandonment Wound";
  mess = [
    "This wound is caused when you were abandoned by either or both of your parents.  You had to fend for yourself and this has caused you to be very needy in relationships.  You are afraid of being alone and bounce from one relationship to the next with little to no breaks in between.  You often attract emotionally unavailable people such as married men, or men who have commitment issues.",
    "<br>", "False Identity:  I am not wanted, I am not good enough, I am alone, I am not worthy of love",
    
  ];
  typa = "Trust Wound";
  mesi =   ["Do you feel like you don’t trust yourself to make the right decision? This wound is caused by a child being abused physically, emotionally or mentally by either/both parents or a trusted person.  This causes you to go into a hyper-vigilant mode to overprotect yourself and your children.  You often times don’t feel safe and feel people are out to get you.  You tend to avoid intimate long-term relationships for fear of being hurt.  You struggle with trusting yourself and others, therefore seek a lot of external validation.  This causes you a lot of pain in your life because you often times get let down simply by seeking validation outside of yourself, which you should find within.   ",
  "<br>","False Identity:  I am unsafe (coupled with anxiety and/or paranoia)",]
  const mav = mesi.map((mg) => `<li>` + mg + `</li>` ).join("");
  const headmsgs = document.querySelector(".headmsgs");
  const msdme = document.querySelector(".msdhere");
  msdme.className = "center-item";
  headmsgs.innerHTML = typa;
  msdme.innerHTML = mav;
  
}
//ab == unwo
else if (
  abandonment ==  unworthy &&
  abandonment >  guilt &&
  abandonment> trust &&  
  abandonment>  neglect
) {
  typo = "Abandonment Wound";
  mess = [
    "This wound is caused when you were abandoned by either or both of your parents.  You had to fend for yourself and this has caused you to be very needy in relationships.  You are afraid of being alone and bounce from one relationship to the next with little to no breaks in between.  You often attract emotionally unavailable people such as married men, or men who have commitment issues.",
    "<br>", "False Identity:  I am not wanted, I am not good enough, I am alone, I am not worthy of love",
   
  ];
  typa = "Not Good Enough/Unworthy Wound";
  mesi =   [ " This Wound is caused by an excessive amount of criticism from either or both parents during your early childhood years.  You end up in your adult life having unconscious feelings of being “not worthy” or “not good enough.”  This shows up as your perfectionist tendencies.  It is also manifests as you being over-critical of others.  This is you simply projecting your feelings of unworthiness on others to avoid feeling this negative feeling of unworthiness yourself.  Your repression of your unworthiness, gives rise to your Shadow.  ",
  "<br>", "False Identity:  I am flawed, I am unworthy, I am not good enough",]
  const mav = mesi.map((mg) => `<li>` + mg + `</li>` ).join("");
  const headmsgs = document.querySelector(".headmsgs");
  const msdme = document.querySelector(".msdhere");
  msdme.className = "center-item";
  headmsgs.innerHTML = typa;
  msdme.innerHTML = mav;
  
}
//neg == gu
else if (
 neglect == guilt &&
  neglect >  trust &&
  neglect >  abandonment &&
  neglect > unworthy
) {
  typo = "Neglect Wound";
  mess = [
    "This wound is caused by either or both parents neglecting the child during their early childhood years.  They grow up and because of the neglect struggle with setting boundaries, being vulnerable and expressing their emotions.  When you get into a loving intimate relationship, you don’t know what to do with it because you’ve never had it before.",
    "<br>","False Identity:  I am not wanted, I am not good enough, I am not worthy of love",
    
  ];
  typa = "Guilt wound";
  mesi =   ["This wound is caused by either or both of your parents using manipulation to get what they want from you.  They make you feel guilty.  This lead you to feel very guilty and give in.  Thus you adopt this style of guilt manipulation (also known as guilt-tripping) in your relationships as well.  You often times are self-sacrificing and put others needs ahead of your own because you feel your wants, needs or desires don’t matter that much.  Self-sacrificing people often attract Narcissist because you have the same energy frequency of lack – the narcissist feels like there is not enough to go around, so he’s going get all his needs met over yours.  The self-sacrificing woman also comes from a space of lack because she believes that there is not enough to go around, hence she’s going to give up all of her wants, needs and desires so someone else can have what they desire.",
  "<br>","False Identity:  I am wrong, I am not worthy, I am not good enough",
]
  const mav = mesi.map((mg) => `<li>` + mg + `</li>` ).join("");
  const headmsgs = document.querySelector(".headmsgs");
  const msdme = document.querySelector(".msdhere");
  msdme.className = "center-item";
  headmsgs.innerHTML = typa;
  msdme.innerHTML = mav;
  
}
//neg == tru
else if (
  neglect == trust &&
  neglect >  guilt &&
  neglect >  abandonment &&
  neglect > unworthy
) {
  typo = "Neglect Wound";
  mess = [
    "This wound is caused by either or both parents neglecting the child during their early childhood years.  They grow up and because of the neglect struggle with setting boundaries, being vulnerable and expressing their emotions.  When you get into a loving intimate relationship, you don’t know what to do with it because you’ve never had it before.",
    "<br>","False Identity:  I am not wanted, I am not good enough, I am not worthy of love",
   
  
  ];
  typa = "Trust wound";
  mesi =   [ "Do you feel like you don’t trust yourself to make the right decision? This wound is caused by a child being abused physically, emotionally or mentally by either/both parents or a trusted person.  This causes you to go into a hyper-vigilant mode to overprotect yourself and your children.  You often times don’t feel safe and feel people are out to get you.  You tend to avoid intimate long-term relationships for fear of being hurt.  You struggle with trusting yourself and others, therefore seek a lot of external validation.  This causes you a lot of pain in your life because you often times get let down simply by seeking validation outside of yourself, which you should find within.",
  "<br>", "False Identity:  I am unsafe (coupled with anxiety and/or paranoia)",]
  const mav = mesi.map((mg) => `<li>` + mg + `</li>` ).join("");
  const headmsgs = document.querySelector(".headmsgs");
  const msdme = document.querySelector(".msdhere");
  msdme.className = "center-item";
  headmsgs.innerHTML = typa;
  msdme.innerHTML = mav;
  
}
//neg == unwo
else if (
  neglect == unworthy &&
  neglect >  trust &&
  neglect >  abandonment &&
  neglect > guilt
) {
  typo = "Neglect Wound";
  mess = [
    "This wound is caused by either or both parents neglecting the child during their early childhood years.  They grow up and because of the neglect struggle with setting boundaries, being vulnerable and expressing their emotions.  When you get into a loving intimate relationship, you don’t know what to do with it because you’ve never had it before.",
    
    "<br>","False Identity:  I am not wanted, I am not good enough, I am not worthy of love",
   
  ];
  typa = "Not Good Enough/Unworthy Wound";
  mesi =   [ " This Wound is caused by an excessive amount of criticism from either or both parents during your early childhood years.  You end up in your adult life having unconscious feelings of being “not worthy” or “not good enough.”  This shows up as your perfectionist tendencies.  It is also manifests as you being over-critical of others.  This is you simply projecting your feelings of unworthiness on others to avoid feeling this negative feeling of unworthiness yourself.  Your repression of your unworthiness, gives rise to your Shadow.  ",
  "<br>","False Identity:  I am flawed, I am unworthy, I am not good enough",]
  const mav = mesi.map((mg) => `<li>` + mg + `</li>` ).join("");
  const headmsgs = document.querySelector(".headmsgs");
  const msdme = document.querySelector(".msdhere");
  msdme.className = "center-item";
  headmsgs.innerHTML = typa;
  msdme.innerHTML = mav;
  
}
//gu == tru 
else if (
  guilt ==  trust &&
  guilt >  neglect &&
  guilt >  abandonment &&
  guilt > unworthy
) {
  typo = "Guilt Wound";
  mess = [
    "This wound is caused by either or both of your parents using manipulation to get what they want from you.  They make you feel guilty.  This lead you to feel very guilty and give in.  Thus you adopt this style of guilt manipulation (also known as guilt-tripping) in your relationships as well.  You often times are self-sacrificing and put others needs ahead of your own because you feel your wants, needs or desires don’t matter that much.  Self-sacrificing people often attract Narcissist because you have the same energy frequency of lack – the narcissist feels like there is not enough to go around, so he’s going get all his needs met over yours.  The self-sacrificing woman also comes from a space of lack because she believes that there is not enough to go around, hence she’s going to give up all of her wants, needs and desires so someone else can have what they desire.",
    "<br>","False Identity:  I am wrong, I am not worthy, I am not good enough",
    
  
  ];
  typa = "Trust wound";
  mesi =   ["Do you feel like you don’t trust yourself to make the right decision? This wound is caused by a child being abused physically, emotionally or mentally by either/both parents or a trusted person.  This causes you to go into a hyper-vigilant mode to overprotect yourself and your children.  You often times don’t feel safe and feel people are out to get you.  You tend to avoid intimate long-term relationships for fear of being hurt.  You struggle with trusting yourself and others, therefore seek a lot of external validation.  This causes you a lot of pain in your life because you often times get let down simply by seeking validation outside of yourself, which you should find within.",
  "<br>","False Identity:  I am unsafe (coupled with anxiety and/or paranoia)",]
  const mav = mesi.map((mg) => `<li>` + mg + `</li>` ).join("");
  const headmsgs = document.querySelector(".headmsgs");
  const msdme = document.querySelector(".msdhere");
  msdme.className = "center-item";
  headmsgs.innerHTML = typa;
  msdme.innerHTML = mav;
  
}
//gu== unwo
else if (
  guilt ==  unworthy &&
  guilt >  neglect &&
  guilt >  abandonment &&
  guilt > trust
) {
  typo = "Guilt Wound";
  mess = [
    "This wound is caused by either or both of your parents using manipulation to get what they want from you.  They make you feel guilty.  This lead you to feel very guilty and give in.  Thus you adopt this style of guilt manipulation (also known as guilt-tripping) in your relationships as well.  You often times are self-sacrificing and put others needs ahead of your own because you feel your wants, needs or desires don’t matter that much.  Self-sacrificing people often attract Narcissist because you have the same energy frequency of lack – the narcissist feels like there is not enough to go around, so he’s going get all his needs met over yours.  The self-sacrificing woman also comes from a space of lack because she believes that there is not enough to go around, hence she’s going to give up all of her wants, needs and desires so someone else can have what they desire.",
    "<br>","False Identity:  I am wrong, I am not worthy, I am not good enough",
    
  
  ];
  typa = "Not Good Enough/Unworthy Wound";
  mesi =   [" This Wound is caused by an excessive amount of criticism from either or both parents during your early childhood years.  You end up in your adult life having unconscious feelings of being “not worthy” or “not good enough.”  This shows up as your perfectionist tendencies.  It is also manifests as you being over-critical of others.  This is you simply projecting your feelings of unworthiness on others to avoid feeling this negative feeling of unworthiness yourself.  Your repression of your unworthiness, gives rise to your Shadow.  ",
  "<br>","False Identity:  I am flawed, I am unworthy, I am not good enough",]
  const mav = mesi.map((mg) => `<li>` + mg + `</li>` ).join("");
  const headmsgs = document.querySelector(".headmsgs");
  const msdme = document.querySelector(".msdhere");
  msdme.className = "center-item";
  headmsgs.innerHTML = typa;
  msdme.innerHTML = mav;
}
//tru == unwo
else if (
    trust == unworthy &&
  trust >  neglect &&
  trust >  abandonment &&
  trust > guilt
) {
  typo = "Trust Wound";
  mess = [
    "Do you feel like you don’t trust yourself to make the right decision? This wound is caused by a child being abused physically, emotionally or mentally by either/both parents or a trusted person.  This causes you to go into a hyper-vigilant mode to overprotect yourself and your children.  You often times don’t feel safe and feel people are out to get you.  You tend to avoid intimate long-term relationships for fear of being hurt.  You struggle with trusting yourself and others, therefore seek a lot of external validation.  This causes you a lot of pain in your life because you often times get let down simply by seeking validation outside of yourself, which you should find within.",
    "<br>","False Identity:  I am unsafe (coupled with anxiety and/or paranoia)",
   
  ];
  typa = "Not Good Enough/Unworthy Wound";
  mesi =   [ " This Wound is caused by an excessive amount of criticism from either or both parents during your early childhood years.  You end up in your adult life having unconscious feelings of being “not worthy” or “not good enough.”  This shows up as your perfectionist tendencies.  It is also manifests as you being over-critical of others.  This is you simply projecting your feelings of unworthiness on others to avoid feeling this negative feeling of unworthiness yourself.  Your repression of your unworthiness, gives rise to your Shadow.  ",
  "<br>", "False Identity:  I am flawed, I am unworthy, I am not good enough",]
  const mav = mesi.map((mg) => `<li>` + mg + `</li>` ).join("");
  const headmsgs = document.querySelector(".headmsgs");
  const msdme = document.querySelector(".msdhere");
  msdme.className = "center-item";
  headmsgs.innerHTML = typa;
  msdme.innerHTML = mav;
  
}
else{
  {
    typo = "Neglect Wound";
    mess = [
      "This wound is caused by either or both parents neglecting the child during their early childhood years.  They grow up and because of the neglect struggle with setting boundaries, being vulnerable and expressing their emotions.  When you get into a loving intimate relationship, you don’t know what to do with it because you’ve never had it before.",
      "<br>","False Identity:  I am not wanted, I am not good enough, I am not worthy of love",
    ]; 
  }
}




const mao = mess.map((ms) => `<li>` + ms + `</li>`).join("");


//document.querySelector(".msghere").innerHTML = mao;


window.onload = function() {
  what();
  function what(){
    const headmsg = document.querySelector(".headmsg");
   
    headmsg.innerHTML = typo;
   
   const msgme = document.querySelector(".msghere");
  
   msgme.className = "center-item";
  
   msgme.innerHTML = mao;
  
  };
}
document.querySelector(".usertype").value = typo;

document.querySelector(".usertype").style.display = "none";
console.log(document.querySelector(".usertype").value)

//share buttons
/* 

Social Share Links:

WhatsApp:
https://wa.me/?text=[post-title] [post-url]

Facebook:
https://www.facebook.com/sharer.php?u=[post-url]

Twitter:
https://twitter.com/share?url=[post-url]&text=[post-title]

Pinterest:
https://pinterest.com/pin/create/bookmarklet/?media=[post-img]&url=[post-url]&is_video=[is_video]&description=[post-title]

LinkedIn:
https://www.linkedin.com/shareArticle?url=[post-url]&title=[post-title]

*/

const facebookBtn = document.querySelector(".facebook-btn");
const twitterBtn = document.querySelector(".twitter-btn");

const linkedinBtn = document.querySelector(".linkedin-btn");
const whatsappBtn = document.querySelector(".whatsapp-btn");

function init() {
  let postUrl = encodeURI(document.location.href);
  let postTitle = encodeURI("Checkout what type of communicator I am");
  // let postImg = encodeURI(pinterestImg.src);

  facebookBtn.setAttribute(
    "href",
    `https://www.facebook.com/sharer.php?u=${postUrl}`
  );

  twitterBtn.setAttribute(
    "href",

    `https://twitter.com/share?url=${postUrl}&text=${postTitle}`
  );

  // linkedinBtn.setAttribute(
  // "href",
  //"http://www.linkedin.com/shareArticle?mini=true&amp;url=https://simplesharebuttons.com"
  //`https://www.linkedin.com/shareArticle?url=${postUrl}&title=${postTitle}`
  //);
  linkedinBtn.setAttribute(
    "href",
    `https://www.linkedin.com/shareArticle?url=${postUrl}&title=${postTitle}`
  );

  whatsappBtn.setAttribute(
    "href",
    `https://wa.me/?text=${postTitle} ${postUrl}`
  );
}

init();
