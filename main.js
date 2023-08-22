(()=>{"use strict";function e(){const e=document.createDocumentFragment(),t=document.createElement("section");t.id="hero-section";const n=document.createElement("div");n.id="hero-div";const o=document.createElement("div");o.id="spacer";const c=document.createElement("img");c.src="../src/assets/pics/logo.png";const d=document.createElement("h1");d.textContent="Welcome To Bread Paradise, Where Deliciousness awaits!";const a=document.createElement("p");a.textContent="Indulge in our wide selection of organic bread products! baked with love, care and the finest ingredients. Experience the true taste of pure goodness.";const i=document.createElement("a");i.id="hero-btn",i.href="#",i.textContent="View Menu",n.appendChild(c),n.appendChild(d),n.appendChild(a),n.appendChild(i),t.appendChild(n),t.appendChild(o);const s=document.createElement("section");s.id="feature-section";const r=document.createElement("h2");r.textContent="Discover the Organic Goodness of Bread Paradise",r.id="feature-head";const m=[{icon:"../src/assets/icons/best-price.png",heading:"Great Value With Competitive Prices",subheading:"With the most competitive prices on the market we are able to deliver great value without compromising on taste."},{icon:"../src/assets/icons/bread-baked.png",heading:"Handcrafted Breads Made With Love And Care",subheading:"Our skilled bakers carefully handcraft each loaf of bread, ensuring a unique and flavourful experience for our customers."},{icon:"../src/assets/icons/eco-friendly-icon.png",heading:"Embrace Sustainable Bread Choices",subheading:"We prioritize sustainability by sourcing local ingredients, minimizing waste, and supporting eco-friendly packaging solutions."}];for(const e of m){const t=document.createElement("div");t.classList.add("benefit");const n=document.createElement("img");n.src=e.icon;const o=document.createElement("h3");o.textContent=e.heading;const c=document.createElement("p");c.textContent=e.subheading,t.appendChild(n),t.appendChild(o),t.appendChild(c),s.appendChild(t)}return e.appendChild(t),e.appendChild(r),e.appendChild(s),e}const t=[{image:"../src/assets/menuItems/1.jpeg",name:"Baguettes",description:"Lorem ipsum dolor sit amet",price:"$2.99"},{image:"../src/assets/menuItems/2.jpeg",name:"SourDough Bread",description:"Lorem ipsum dolor sit amet",price:"$4.99"},{image:"../src/assets/menuItems/3.jpeg",name:"Mixed Grain",description:"Lorem ipsum dolor sit amet",price:"$5.99"},{image:"../src/assets/menuItems/4.jpeg",name:"Milk Bread",description:"Lorem ipsum dolor sit amet",price:"$3.49"},{image:"../src/assets/menuItems/5.jpeg",name:"Brown Bread",description:"Lorem ipsum dolor sit amet",price:"$3.99"},{image:"../src/assets/menuItems/6.jpeg",name:"Cinnabon",description:"Lorem ipsum dolor sit amet",price:"$1.99"}];!function(){const e=document.querySelector("body"),t=document.createElement("nav"),n=document.createElement("button");n.id="homeTab",n.textContent="Homepage";const o=document.createElement("button");o.id="contactTab",o.textContent="Contact Us";const c=document.createElement("button");c.id="menuTab",c.textContent="Menu",t.appendChild(n),t.appendChild(o),t.appendChild(c),e.appendChild(t)}();const n=document.createElement("main");function o(e){n.innerHTML="",n.appendChild(e),n.appendChild(function(){const e=document.createElement("footer"),t=document.createElement("p");return t.textContent="Copyright © 2023 Anthony Giolti Funes",e.appendChild(t),e}())}document.body.appendChild(n);const c=document.getElementById("homeTab"),d=document.getElementById("contactTab");c.addEventListener("click",(()=>{o(e())})),d.addEventListener("click",(()=>{o(function(){const e=document.createDocumentFragment(),t=document.createElement("section");t.id="contact-section";const n=document.createElement("div");n.id="top";const o=document.createElement("h2");o.textContent="Contact Us";const c=document.createElement("form"),d=document.createElement("label");d.textContent="Email";const a=document.createElement("label");a.textContent="Name";const i=document.createElement("input");i.type="email",i.id="email";const s=document.createElement("input");s.type="text",s.id="name",i.placeholder="Enter your email",s.placeholder="Enter your name";const r=document.createElement("button");return r.textContent="Submit",c.appendChild(d),c.appendChild(i),c.appendChild(a),c.appendChild(s),c.appendChild(r),n.appendChild(o),n.appendChild(c),t.appendChild(n),e.appendChild(t),e}())})),menuTab.addEventListener("click",(()=>{o(function(){const e=document.createDocumentFragment(),n=document.createElement("section");n.id="menu-section";const o=document.createElement("div");o.id="menu-items";const c=document.createElement("h2");c.textContent="Bakery Items";const d=document.createElement("p");d.textContent="Explore Our Range Of Organic Goodness",o.appendChild(c),o.appendChild(d),n.appendChild(o);const a=document.createElement("div");a.id="menu";for(const e of t){const t=document.createElement("div");t.classList.add("menu-item");const o=document.createElement("img");o.src=e.image,o.alt=e.name;const c=document.createElement("h3");c.textContent=e.name;const d=document.createElement("p");d.textContent=e.description;const i=document.createElement("h4");i.textContent=e.price,t.appendChild(o),t.appendChild(c),t.appendChild(d),t.appendChild(i),a.appendChild(t),n.appendChild(a)}return e.appendChild(n),e}())})),o(e())})();