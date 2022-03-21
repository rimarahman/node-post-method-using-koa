const fs = require("fs");

exports.createUser = ctx =>{

    console.log("createuser function fired");

    console.log(
        ctx.params,
        ctx.request.url,
        ctx.request.method,
        ctx.request.body,
        ctx.request.headers
    );
    

    ctx.body={
         
        status:200
    };

};


exports.processFiles = ctx => { 
    const fileStream = fs.createReadStream("./video-file-stream.mp4");
    ctx.body = fileStream;
    console.log("processfile");
};


//<video control src="http//localhost:3000/files"/>;