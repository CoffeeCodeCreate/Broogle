/**
	App Controller
**/
import { elements, renderLoader, clearLoader, renderPointer, clearPointer } from './views/base.mjs';

//Models
import Search from './models/Search.mjs';

//views
import * as searchView from './views/searchView.mjs';


const state = {};

//SEARCH Controller

const controlSearch = async() => {
	//get query from search view
	const query = searchView.getInput();

	//if there is a value
	if(query)
	{
		clearPointer();
		state.search = new Search(query);
		searchView.clearInput();
		searchView.clearResults();


		renderLoader(elements.parentSearchContainer);

		//Get the data from the API
		try {
			await state.search.getResults();
			clearLoader();

			renderPointer(elements.parentSearchContainer);

			console.log(state.search.result);
			searchView.renderResults(state.search.result);
			//If promise returned:
		} catch(e) {
			alert("Something went wrong!\n" + e);
			// statements
			console.log(e);
		}
	}
	
}

elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});