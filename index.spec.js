const nothing = require('./index');

describe('nothing', () => {
    it('returns nothing', () => {
        const result = nothing();

        expect(result).toBe('nothing');
    });
});