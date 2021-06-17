module.exports = async function (context, myTimer) {
    var timeStamp = new Date().toISOString();
    
    if (myTimer.IsPastDue)
    {
        context.log('JavaScript is running late!');
    }
    context.log('JavaScript timer trigger function ran!', timeStamp);   
    var request=require("request");
    request.get("https://bing.com",function(error,response,body){
           if(error){
                 context.log(error);
           }else{
                 context.log(response);
         }
});
};