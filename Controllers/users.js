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