const os = require('os');

/**
 * Returns the number of CPUs on the machine
 * @returns {number} The number of CPUs on the machine
 */

function getCPUs(){

    return os.cpus().length;

}

function getSystemInfo(){

    return{
        architecture: os.arch(),
        totalMemory: os.totalmem(),

    }//end of return
}

module.exports= {getCPUs};

