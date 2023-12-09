var e=globalThis,s={},i={},r=e.parcelRequire3a11;null==r&&((r=function(e){if(e in s)return s[e].exports;if(e in i){var r=i[e];delete i[e];var n={id:e,exports:{}};return s[e]=n,r.call(n.exports,n,n.exports),n.exports}var c=Error("Cannot find module '"+e+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(e,s){i[e]=s},e.parcelRequire3a11=r),(0,r.register)("27Lyk",function(e,s){Object.defineProperty(e.exports,"register",{get:()=>i,set:e=>i=e,enumerable:!0,configurable:!0});var i,r=new Map;i=function(e,s){for(var i=0;i<s.length-1;i+=2)r.set(s[i],{baseUrl:e,path:s[i+1]})}}),r("27Lyk").register(new URL("",import.meta.url).toString(),JSON.parse('["f9fpV","index.e5376d63.js","eyyUD","icons.c14567a0.svg"]')),new URL("icons.c14567a0.svg",import.meta.url).toString();const n=document.querySelector(".recipe");!async function(){try{let e=await fetch("https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886"),s=await e.json();if(!e.ok)throw Error(`${s.message} (${e.status})`);let{recipe:i}=s.data;i={id:i.id,title:i.title,publisher:i.publisher,sourceUrl:i.source_url,image:i.image_url,servings:i.servings,cookingTime:i.cooking_time,ingredients:i.ingredients},console.log(i);let r=`
    <figure class="recipe__fig">
      <img src="${i.image}" alt="${i.title}" class="recipe__img" />
      <h1 class="recipe__title">
        <span>${i.title}</span>
      </h1>
    </figure>

    <div class="recipe__details">
      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="src/img/icons.svg#icon-clock"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--minutes">${i.cookingTime}</span>
        <span class="recipe__info-text">minutes</span>
      </div>
      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="src/img/icons.svg#icon-users"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--people">${i.servings}</span>
        <span class="recipe__info-text">servings</span>

        <div class="recipe__info-buttons">
          <button class="btn--tiny btn--increase-servings">
            <svg>
              <use href="src/img/icons.svg#icon-minus-circle"></use>
            </svg>
          </button>
          <button class="btn--tiny btn--increase-servings">
            <svg>
              <use href="src/img/icons.svg#icon-plus-circle"></use>
            </svg>
          </button>
        </div>
      </div>

      <div class="recipe__user-generated">
        <svg>
          <use href="src/img/icons.svg#icon-user"></use>
        </svg>
      </div>
      <button class="btn--round">
        <svg class="">
          <use href="src/img/icons.svg#icon-bookmark-fill"></use>
        </svg>
      </button>
    </div>

    <div class="recipe__ingredients">
      <h2 class="heading--2">Recipe ingredients</h2>
      <ul class="recipe__ingredient-list">
        ${i.ingredients.map(e=>`
          <li class="recipe__ingredient">
            <svg class="recipe__icon">
              <use href="src/img/icons.svg#icon-check"></use>
            </svg>
            <div class="recipe__quantity">${e.quantity}</div>
            <div class="recipe__description">
              <span class="recipe__unit">${e.unit}</span>
              ${e.description}
            </div>
          </li>
          `).join("")}
      </ul>
    </div>

    <div class="recipe__directions">
      <h2 class="heading--2">How to cook it</h2>
      <p class="recipe__directions-text">
        This recipe was carefully designed and tested by
        <span class="recipe__publisher">${i.publisher}</span>. Please check out
        directions at their website.
      </p>
      <a
        class="btn--small recipe__btn"
        href="${i.sourceUrl}"
        target="_blank"
      >
        <span>Directions</span>
        <svg class="search__icon">
          <use href="src/img/icons.svg#icon-arrow-right"></use>
        </svg>
      </a>
    </div>`;n.innerHTML="",n.insertAdjacentHTML("afterbegin",r)}catch(e){alert(e)}}();
//# sourceMappingURL=index.e5376d63.js.map
