import configureStore, { composeEnhancers } from '../../src/redux/ConfigureStore';

describe('configure redux store', () => {
    it('check compose enhancers not null', () => {
        expect(composeEnhancers).toBeDefined();
    });

    it('check configureStore returns a store', () => {
        expect(configureStore()).toBeDefined();
    });
});