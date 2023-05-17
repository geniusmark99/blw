const html = document.documentElement;
const body = document.body;
const Id = (el) => document.getElementById(el);
const querySelector = (el) => document.querySelector(el);
const querySelectorAll = (el) => document.querySelectorAll(el);
const AddEvent = function(el,evt,funct,bool=false){
querySelector(el).addEventListener(evt,funct,bool);
};

const menuLinks = querySelectorAll(".admin-menu a");
const collapseBtn = querySelector(".admin-menu .collapse-btn");
const toggleMobileMenu = querySelector(".toggle-mob-menu");
const switchInput = querySelector(".switch input");
const switchLabel = querySelector(".switch label");
const switchLabelText = switchLabel.querySelector("span:last-child");
const collapsedClass = "collapsed";
const lightModeClass = "light-mode";

/*TOGGLE HEADER STATE*/
collapseBtn.addEventListener("click", function () {
  body.classList.toggle(collapsedClass);
  this.getAttribute("aria-expanded") == "true"
    ? this.setAttribute("aria-expanded", "false")
    : this.setAttribute("aria-expanded", "true");
  this.getAttribute("aria-label") == "collapse menu"
    ? this.setAttribute("aria-label", "expand menu")
    : this.setAttribute("aria-label", "collapse menu");
});

/*TOGGLE MOBILE MENU*/
toggleMobileMenu.addEventListener("click", function () {
  body.classList.toggle("mob-menu-opened");
  this.getAttribute("aria-expanded") == "true"
    ? this.setAttribute("aria-expanded", "false")
    : this.setAttribute("aria-expanded", "true");
  this.getAttribute("aria-label") == "open menu"
    ? this.setAttribute("aria-label", "close menu")
    : this.setAttribute("aria-label", "open menu");
});

/*SHOW TOOLTIP ON MENU LINK HOVER*/
for (const link of menuLinks) {
  link.addEventListener("mouseenter", function () {
    if (
      body.classList.contains(collapsedClass) &&
      window.matchMedia("(min-width: 768px)").matches
    ) {
      const tooltip = this.querySelector("span").textContent;
      this.setAttribute("title", tooltip);
    } else {
      this.removeAttribute("title");
    }
  });
}

/*TOGGLE LIGHT/DARK MODE*/
if (localStorage.getItem("dark-mode") === "false") {
  html.classList.add(lightModeClass);
  switchInput.checked = false;
  switchLabelText.textContent = "Light";
}

switchInput.addEventListener("input", function () {
  html.classList.toggle(lightModeClass);
  if (html.classList.contains(lightModeClass)) {
    switchLabelText.textContent = "Light";
    localStorage.setItem("dark-mode", "false");
  } else {
    switchLabelText.textContent = "Dark";
    localStorage.setItem("dark-mode", "true");
  }
});


// ADMIN NOTIFICATION CLICK 
const AdminNotify = document.getElementById("admin-notification"),
AdminPopupSettings =  Id("admin-popup-settings"),
CloseAdminPopupSettings = Id("close-admin-popup-settings"),
AddActiveLink = (link) => Id("admin-link-"+link).classList.add("active");


AdminNotify.addEventListener("click",function(){
  body.classList.toggle("extra-notification-menu-open");
});

AdminPopupSettings.addEventListener("click",function(){
Id("admin-settings").classList.toggle("show");
});

CloseAdminPopupSettings.addEventListener("click",function(){
if(Id("admin-settings").classList.contains("show")) {
  Id("admin-settings").classList.remove("show");
}
return false;
});

// ESC CLICK CLOSE    

document.addEventListener('keydown', function (event) {
  if (event.key === "Escape") {
      event.preventDefault();
      if(Id("admin-settings").classList.contains("show")) {
        Id("admin-settings").classList.remove("show");
      }
    
  }
});


var presentLink = window.location.pathname;
switch(presentLink){
case "/admin/dashboard":
  AddActiveLink("dashboard");
  break;
  case "/admin/users":
  AddActiveLink("users");
  break;
  case "/admin/trends":
  AddActiveLink("trends");
  break;
  case "/admin/signals":
  AddActiveLink("signals");
    break;
case "/admin/settings":
  AddActiveLink("settings");
  break;
  default:
    false;
}