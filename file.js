const fs = require('fs');
const { argv } = require('process');

// fs.writeFileSync('./data/text.txt',"hello");
// fs.writeFile('./data/text.txt',"hello world",(err,res)=>{
//     if(err)console.log("Error",err);

// });

let contacts = null
let sr_no;
try {
    const data = fs.readFileSync('./data/contacts.txt', "utf-8");
    // console.log(data);
    contacts = data

    const lines = contacts.split('\n');
    const lastline = lines[lines.length - 2];
    sr_no = lastline.split(' ')[0];
    // console.log(typeof(Number(sr_no)))

} catch (error) {

    console.log("some error occured", error)
}

// console.log(sr_no)

// append on same file dont over write
let serial_no=parseInt(sr_no,10);
serial_no+=1
console.log("Enter name and number seperated by sapace like nish +912222")
const args=process.argv.slice(2);
if (args.length === 0) {
    console.log('No command line arguments provided.');
}
else{
        console.log('sss',argv[2],argv[3]);
}
// console.log(args)
fs.appendFileSync('./data/contacts.txt',`${serial_no} ${argv[2]},${argv[3]}\n`)
const data = fs.readFileSync('./data/contacts.txt', "utf-8");
console.log(data)

try {
    
    console.log(fs.statSync('./data/contacts.txt'));
} catch (error) {
    console.log('some error',error);
}


