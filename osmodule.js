const os = require('os');


// info about OS Architecture
console.log(os.arch());

// info about current user
const user = os.userInfo();
console.log(user);

// method returns the system uptime in seconds
console.log(`The System Uptime is ${os.uptime()} seconds`);

// info about current OS
const currentOS = {
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem()
}
console.log(currentOS);


// Get the home directory
console.log(os.homedir());

// Print the Hostname
console.log(os.hostname());

// Print the platform
console.log(os.platform());


// Print the total memory
console.log(os.totalmem());


// Print the Os type
console.log(os.type());


// Print the version
console.log(os.version());