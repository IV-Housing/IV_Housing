// filterFuncs.js

import { filterByStreet, filterByBlock, filterBySize,
	filterByPriceTotal, filterByPricePerPerson } from '../utils/filterFuncs.js'

describe ('utils/filterFuncs',()=>{
	describe ('filterByStreet',()=>{
		it ('returns true if address contains indicated streetname',()=>{
			let h = {'address': '6632 Abrego Rd. #21'};
			let h2 = {'address': '6632 Abrego Rd.'};
			let abregoFilter = filterByStreet('Abrego Rd.');
			expect(abregoFilter(h)).toBe(true);
			expect(abregoFilter(h2)).toBe(true);
		});
		it ('returns false if address != contain indicated streetname',()=>{
			let h = {'address': '6632 Abrego Rd. #21'};
			let suenoFilter = filterByStreet('Sueno Rd.');
			expect(suenoFilter(h)).toBe(false);
		});
	});

	describe ('filterByBlock',()=>{
		it ('returns true if 1st 2 letters of address == indicated block',()=>{
			let h = {'address': '6632 Abrego Rd. #21'};
			let sixsixBlockFilter = filterByBlock('66');
			expect(sixsixBlockFilter(h)).toBe(true);
		});
		it ('returns false if 1st 2 letters of address != indicated block',()=>{
			let h = {'address': '6632 Abrego Rd. #21'}
			let sixsevenBlockFilter = filterByBlock('67');
			expect(sixsevenBlockFilter(h)).toBe(false);
		});
	});

	describe ('filterBySize',()=>{
		it ('returns true if size of house == indicated size, false otherwise',()=>{
			let h = {'size': 8};
			let size8Filter = filterBySize('8');
			let size9Filter = filterBySize('9');
			expect(size8Filter(h)).toBe(true);
			expect(size9Filter(h)).toBe(false);
		});
		it ('returns true if size >= indicated lower limit (ie. 10+)',()=>{
			let h = {'size': 12};  // for > than lower limit of 10
			let h2 = {'size': 10};  // for == lower limit
			let size10PlusFilter = filterBySize('10+');
			expect(size10PlusFilter(h)).toBe(true);
			expect(size10PlusFilter(h2)).toBe(true);
		});
		it ('returns false if size < indicated lower limit',()=>{
			let h = {'size': 8};
			let size10PlusFilter = filterBySize('10+');
			expect(size10PlusFilter(h)).toBe(false);
		});
	});

	describe ('filterByPriceTotal',()=>{
		it ('returns true if totalPrice is in indicated price range, false otherwise',()=>{
			let h = {'totalPrice': 1500};
			let h2 = {'totalPrice': 3000};
			let filter0to2000 = filterByPriceTotal('0-2000');
			expect(filter0to2000(h)).toBe(true);
			expect(filter0to2000(h2)).toBe(false);
		});
		it ('returns true if totalPrice == lower limit of price range',()=>{
			let h = {'totalPrice': 0};
			let filter0to2000 = filterByPriceTotal('0-2000');
			expect(filter0to2000(h)).toBe(true);
		});
		it ('returns false if totalPrice == upper limit of price range',()=>{
			let h = {'totalPrice': 2000};
			let filter0to2000 = filterByPriceTotal('0-2000');
			expect(filter0to2000(h)).toBe(false);
		});
		it ('returns true if totalPrice >= indicated lower price limit (ie. 10000+), false otherwise',()=>{
			let h = {'totalPrice': 12000};
			let h2 = {'totalPrice': 10000};
			let h3 = {'totalPrice': 9000};
			let filter0to2000 = filterByPriceTotal('10000+');
			expect(filter0to2000(h)).toBe(true);
			expect(filter0to2000(h2)).toBe(true);
			expect(filter0to2000(h3)).toBe(false);
		});
	});

	describe ('filterByPricePerPerson',()=>{
		it ('returns true if totalPrice/size is in indicated price range, false otherwise',()=>{
			let h = {'totalPrice': 1695, 'size': 2};  // pricePerPerson = $847.50
			let h2 = {'totalPrice': 11200, 'size': 15};  // pricePerPerson = $746.67
			let filter800to900 = filterByPricePerPerson('800-900');
			expect(filter800to900(h)).toBe(true);
			expect(filter800to900(h2)).toBe(false);
		});
		it ('returns true if totalPrice == lower limit of price range',()=>{
			let h = {'totalPrice': 11200, 'size': 14};  // pricePerPerson = $800.00
			let filter800to900 = filterByPricePerPerson('800-900');
			expect(filter800to900(h)).toBe(true);
		});
		it ('returns false if totalPrice == upper limit of price range',()=>{
			let h = {'totalPrice': 7200, 'size': 8};  // pricePerPerson = $900.00
			let filter800to900 = filterByPricePerPerson('800-900');
			expect(filter800to900(h)).toBe(false);
		});
		it ('returns true if totalPrice >= indicated lower price limit (ie. 1200+), false otherwise',()=>{
			let h = {'totalPrice': 18500, 'size': 15};  // pricePerPerson = $1233.33
			let h2 = {'totalPrice': 8400, 'size': 7};  // pricePerPerson = $1200.00
			let h3 = {'totalPrice': 4400, 'size': 4};  // pricePerPerson = $1100.00
			let filter1200Plus = filterByPricePerPerson('1200+');
			expect(filter1200Plus(h)).toBe(true);
			expect(filter1200Plus(h2)).toBe(true);
			expect(filter1200Plus(h3)).toBe(false);
		});
	});
});
