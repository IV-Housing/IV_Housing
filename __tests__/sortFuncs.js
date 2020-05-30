// sortFuncs.js

import { sortAscendingTotal } from '../utils/sortFuncs.js'

describe ('utils/sortFuncs',()=>{
	describe ('sortAscendingTotal',()=>{
		it ('returns negative value if totalPrice of h1 < totalPrice of h2',()=>{
			let h1 = {'totalPrice': 3};
			let h2 = {'totalPrice': 4};
			expect(sortAscendingTotal(h1,h2)<0).toBe(true);
		});

		it ('returns positive value if totalPrice of h1 > totalPrice of h2',()=>{
			let h1 = {'totalPrice': 4};
			let h2 = {'totalPrice': 3};
			expect(sortAscendingTotal(h1,h2)>0).toBe(true);
		});

		it ('returns zero if totalPrice of h1 == totalPrice of h2',()=>{
			let h1 = {'totalPrice': 3};
			let h2 = {'totalPrice': 3};
			expect(sortAscendingTotal(h1,h2)==0).toBe(true);
		});
	});
});
