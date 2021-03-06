import { elements } from './base.mjs';
import {isDark} from './changeMode.mjs';

import {toggleClosingButton} from './toggle.mjs'
//Toggle the 'save' button 
export const toggleLike = () => {
   
};

export const toggleLikeMenu = () => {
    var favButton = document.querySelector('.fa-heart');
    var resultsContainer = document.querySelector("#resultsContainer");
    const actionButtons = [favButton];


    actionButtons.forEach(el => {
        el.onclick = function()
        {
            if(document.querySelector('.pointer'))
            {
                document.querySelector('.pointer').style.display="none";
            }
            document.querySelector("#likeOverlay").classList.toggle("show");
            if(document.querySelector("#likeOverlay").classList == 'overlay show')
            {
                toggleClosingButton(document.querySelector("#likeOverlay").classList.contains('overlay','show'), elements.heart);
                resultsContainer.style.display="none";
                
            }
            else
            {
                resultsContainer.style='display: none';
                toggleClosingButton(document.querySelector("#likeOverlay").classList.contains('show'), elements.heart);
            }
        }});
};

export const renderLike = like => {
    
    let markup = `
    <li class="likedElement" id="element_${like.id}">
        <a class="likes__link" href="#${like.id}">
            <div class="info-container ${isDark()}">
                <h1 class="lightblue"><a href="" class="lightblue">${like.name}</a></h1>
                    <h2>Address: ${like.address}</h2>
                        <h3>Phone#: ${like.phone}</h3>
                        <h3 class="lightblue"><a href=""class="lightblue">Get Directions</a></h3>
            <a class="delete__brewery" id="brewery__${like.id}" style="color: #ff4444" href="#${like.id}">Delete</a>
            </div>
        </a>
    </li>
    `;
    elements.likeList.insertAdjacentHTML('beforeend', markup);
}

export const deleteLike = id =>
{
    // grab child element from parent.
    const el = document.querySelector(`#element_${id}`);
    if(el) el.parentElement.removeChild(el);
    //Remove hash from URL
    history.replaceState(null,null,' ');
}
