function format(name,data){
    try{
        if(typeof data == 'object') data = JSON.stringify(data);
    }catch(e){
        console.log('jsonformat faile: can not stringify data to json');
        console.log(e.stack);
    }
    return name+'('+data+')'
}
module.exports = format;