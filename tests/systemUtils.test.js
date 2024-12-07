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

    describe('hasEnoughMemory', () => {
        it('should return true if there is enough memory for allocation', () => {
            expect(hasEnoughMemory(1)).toBe(true); // Assuming 1 MB is allocatable
        });//end of it

        it('should return false if there is not enough memory for allocation', () => {
            const totalMemoryInMB = require('os').totalmem() / (1024 * 1024);
            expect(hasEnoughMemory(totalMemoryInMB + 1)).toBe(false); // Over the limit
        });//end of it

    });//end of hasEnoughMemory
    
}); //end of  the Systems Utilities 


