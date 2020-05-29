// filterFuncs.js

export function filterByStreet(street) { return (item)=>{ return item.address.indexOf(street)!==-1; } }
export function filterByBlock(block) { return (item)=>{ return item.address.substr(0,2)===block; } }

export function filterBySize(size) {
	return (item) => {
		let tIndex = size.indexOf('+');
		if (tIndex!==-1) return item.size > Number(size.substring(0,tIndex));
		else return item.size === Number(size);
	} 
}

export function filterByPriceTotal(price) { 
	return (item) => {
		let tIndex = price.indexOf('+');
		if (tIndex!==-1) return item.totalPrice>=Number(price.substring(0,tIndex));
		else {
			let tarr = price.split('-');
			return item.totalPrice>=Number(tarr[0])&&item.totalPrice<Number(tarr[1]);
		}
	}
}

export function filterByPricePerPerson(price) { 
	return (item) => {
		let tIndex = price.indexOf('+');
		if (tIndex!==-1) 
			return Number((item.totalPrice/item.size).toFixed(2))>=Number(price.substring(0,tIndex));
		else {
			let tarr = price.split('-');
			return Number((item.totalPrice/item.size).toFixed(2))>=Number(tarr[0])
				&& Number((item.totalPrice/item.size).toFixed(2));
		}
	}
}
