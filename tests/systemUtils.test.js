const { getCPUs } = require('../src/systemUtils');


describe('System Utilities', () => {

    describe('getCPUs', () => {
        
        it('should return the number of CPUs as a positive integer', () => {
            const cpuCount = getCPUs();
            expect(cpuCount).toBeGreaterThan(0);
            expect(Number.isInteger(cpuCount)).toBe(true);
        });//end of it

    });//end of the getCPUs 
    
}); //end of  the Systems Utilities 


