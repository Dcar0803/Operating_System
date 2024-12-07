const { getCPUs } = require('../src/systemUtils');


describe('System Utilities', () => {

    describe('getCPUs', () => {

        it('should return the number of CPUs as a positive integer', () => {
            const cpuCount = getCPUs();
            expect(cpuCount).toBeGreaterThan(0);
            expect(Number.isInteger(cpuCount)).toBe(true);
        });//end of it

    });//end of the getCPUs 

    describe('getSystemInfo', () => {

        it('should return an object with architecture and total memory', () => {
            const info = getSystemInfo();
            expect(info).toHaveProperty('architecture');
            expect(info).toHaveProperty('totalMemory');
            expect(typeof info.architecture).toBe('string');
            expect(info.totalMemory).toBeGreaterThan(0);
        });//end of it

    });//end of getSystemInfo
    
}); //end of  the Systems Utilities 


