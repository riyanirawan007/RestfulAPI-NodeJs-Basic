const appPort=process.env.port||4100;
exports.app={
    port:appPort,
    base_url:'http://localhost:'+appPort+'/'
};