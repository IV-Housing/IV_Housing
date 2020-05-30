// sortFuncs.js

import { sortAscendingTotal, sortDescendingTotal,
	sortAscendingPerPerson, sortDescendingPerPerson } from '../utils/sortFuncs.js'

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

	describe ('sortDescendingTotal',()=>{
		it ('returns positive value if totalPrice of h1 < totalPrice of h2',()=>{
			let h1 = {'totalPrice': 3};
			let h2 = {'totalPrice': 4};
			expect(sortDescendingTotal(h1,h2)>0).toBe(true);
		});
		it ('returns negative value if totalPrice of h1 > totalPrice of h2',()=>{
			let h1 = {'totalPrice': 4};
			let h2 = {'totalPrice': 3};
			expect(sortDescendingTotal(h1,h2)<0).toBe(true);
		});
		it ('returns zero if totalPrice of h1 == totalPrice of h2',()=>{
			let h1 = {'totalPrice': 3};
			let h2 = {'totalPrice': 3};
			expect(sortDescendingTotal(h1,h2)==0).toBe(true);
		});
	});

	describe ('sortAscendingPerPerson',()=>{
		it ('returns negative value if totalPrice/size of h1 < totalPrice/size of h2',()=>{
			let h1 = {'totalPrice': 3, 'size': 1};
			let h2 = {'totalPrice': 8, 'size': 2};
			expect(sortAscendingPerPerson(h1,h2)<0).toBe(true);
		});
		it ('returns positive value if totalPrice/size of h1 > totalPrice/size of h2',()=>{
			let h1 = {'totalPrice': 8, 'size': 2};
			let h2 = {'totalPrice': 3, 'size': 1};
			expect(sortAscendingPerPerson(h1,h2)>0).toBe(true);
		});
		it ('returns zero if totalPrice/size of h1 == totalPrice/size of h2',()=>{
			let h1 = {'totalPrice': 4, 'size': 1};
			let h2 = {'totalPrice': 8, 'size': 2};
			expect(sortAscendingPerPerson(h1,h2)==0).toBe(true);
		});
	});

	describe ('sortDescendingPerPerson',()=>{
		it ('returns positive value if totalPrice/size of h1 < totalPrice/size of h2',()=>{
			let h1 = {'totalPrice': 3, 'size': 1};
			let h2 = {'totalPrice': 8, 'size': 2};
			expect(sortDescendingPerPerson(h1,h2)>0).toBe(true);
		});
		it ('returns negative value if totalPrice/size of h1 > totalPrice/size of h2',()=>{
			let h1 = {'totalPrice': 8, 'size': 2};
			let h2 = {'totalPrice': 3, 'size': 1};
			expect(sortDescendingPerPerson(h1,h2)<0).toBe(true);
		});
		it ('returns zero if totalPrice/size of h1 == totalPrice/size of h2',()=>{
			let h1 = {'totalPrice': 4, 'size': 1};
			let h2 = {'totalPrice': 8, 'size': 2};
			expect(sortDescendingPerPerson(h1,h2)==0).toBe(true);
		});
	});
});
