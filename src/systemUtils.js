const os = require('os');

/**
 * Returns the number of CPUs on the machine
 * @returns {number} The number of CPUs on the machine
 */

function getCPUs(){

    return os.cpus().length;

}

/**
 * * Returns the system architecture and total memory.
 * @returns {object} An object containing:
 * - `architecture` (string): The system architecture (e.g., 'x64').
 * - `totalMemory` (number): The total memory in bytes.
 */

function getSystemInfo(){

    return{
        architecture: os.arch(),
        totalMemory: os.totalmem(),

    }//end of return
}

module.exports= {getCPUs, getSystemInfo};

