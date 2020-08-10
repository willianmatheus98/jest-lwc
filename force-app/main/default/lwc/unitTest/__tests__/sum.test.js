import { sum } from '../sum';

describe('sum()', () => {
    it('should add 1 and 2 returning 3', () => {
        expect(sum(1, 2)).toBe(3);
        expect(sum(1, 2)).not.toBeGreaterThan(3);
        expect(sum(1, 2)).not.toBeLessThan(3);
    });

    it('should add 5 and 2 returning 7', () => {
        expect(sum(5, 2)).toBe(7);
        expect(sum(5, 2)).not.toBeGreaterThan(7);
        expect(sum(5, 2)).not.toBeLessThan(7);
    });
});