exports.config={
    STATIC_KEY:"a!@#@#!@$SAFa#RQWER099881!@#",
    KEYS_FROM_DB:(user_id=null)=>{
        return this.STATIC_KEY;
    }
}