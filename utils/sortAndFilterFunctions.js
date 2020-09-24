// sortAndFilterFunctions.js
import { markActiveFilter, markInactiveFilter } from './filterStyling.js'
import { sortAscendingTotal, sortDescendingTotal, 
	sortAscendingPerPerson, sortDescendingPerPerson } from './sortFuncs.js'
import { filterByCompany, filterByStreet, filterByBlock, filterBySize,
	filterByPriceTotal, filterByPricePerPerson, filterByAvail } from './filterFuncs.js'

export default function sortAndFilter(houses, company, street, block, size, price, priceType, avail, direction) {
	let refinedHouses = houses;
	let c = document.getElementById('companySelect');
	let s = document.getElementById('streetSelect');
	let b = document.getElementById('blockSelect');
	let p = document.getElementById('priceSelect');
	let si = document.getElementById('sizeSelect');
	let a = document.getElementById('availSelect');
	let sT = document.getElementById('sortSelectTotal');
	let sP = document.getElementById('sortSelectPer');

	if (company!=='Any') { refinedHouses=refinedHouses.filter(filterByCompany(company)); markActiveFilter(c); }
	else markInactiveFilter(c);	

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

	if(avail!=='any'){ refinedHouses=refinedHouses.filter(filterByAvail(avail));}
	if(avail!=='available'){markActiveFilter(a);}
	else markInactiveFilter(a);
	
	if (direction=='ascendingTotal' || direction=='descendingTotal') {
		markActiveFilter(sT);
		sP.options[0].selected = true;
		markInactiveFilter(sP);
		if (direction=='ascendingTotal') refinedHouses.sort(sortAscendingTotal);
		else refinedHouses.sort(sortDescendingTotal);
	} else if (sT) markInactiveFilter(sT);
	if (direction=='ascendingPer' || direction=='descendingPer') {
		markActiveFilter(sP);
		sT.options[0].selected = true;
		markInactiveFilter(sT);
		if (direction=='ascendingPer') refinedHouses.sort(sortAscendingPerPerson);
		else refinedHouses.sort(sortDescendingPerPerson);
	} else if (sP) markInactiveFilter(sP);	
	
	return refinedHouses;
}
