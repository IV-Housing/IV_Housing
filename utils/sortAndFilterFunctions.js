// sortAndFilterFunctions.js

import utilStyles from '../styles/utils.module.css'
import { markActiveFilter, markInactiveFilter } from './filterStyling.js'
import { sortAscendingTotal, sortDescendingTotal, 
	sortAscendingPerPerson, sortDescendingPerPerson } from './sortFuncs.js'
import { filterByStreet, filterByBlock, filterBySize,
	filterByPriceTotal, filterByPricePerPerson } from './filterFuncs.js'

export default function sortAndFilter(houses,street,block,size,price,priceType,direction) {
	let refinedHouses = houses;
	let s = document.getElementById('streetSelect');
	let b = document.getElementById('blockSelect');
	let p = document.getElementById('priceSelect');
	let si = document.getElementById('sizeSelect');

	if (street!=='Any') { refinedHouses=refinedHouses.filter(filterByStreet(street)); markActiveFilter(s); }
	else markInactiveFilter(s);

	if (block!=='Any') { refinedHouses=refinedHouses.filter(filterByBlock(block)); markActiveFilter(b); }
	else markInactiveFilter(b);

	if (size!=='Any') { refinedHouses=refinedHouses.filter(filterBySize(size)); markActiveFilter(si); }
	else markInactiveFilter(si);

	if (price!=='Any Price' && priceType==='total') refinedHouses=refinedHouses.filter(filterByPriceTotal(price));
	else if (price!=='Any Price') refinedHouses=refinedHouses.filter(filterByPricePerPerson(price));
	if (price!=='Any Price') markActiveFilter(p);
	else markInactiveFilter(p);

	if (direction=='ascending' && priceType=='total') refinedHouses.sort(sortAscendingTotal);
	else if (direction=='ascending') refinedHouses.sort(sortAscendingPerPerson);
	else if (direction=='descending' && priceType=='total') refinedHouses.sort(sortDescendingTotal);
	else if (direction=='descending') refinedHouses.sort(sortDescendingPerPerson);
	return refinedHouses;
}
