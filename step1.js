const fs = require('fs')


function cat(path){

    fs.readFile(path , 'utf8', (err, data ) => {
        if(err){
            console.log(`ERROR  path ${path}: ${err}`);
            process.exit(1);
        }
        else {

        console.log(data)
    }
    })
}

cat(process.argv[2])

// const argv = process.argv;

// for (let i = 0; i < argv.length; i++) {
//   console.log(i, argv[i]);
// }
