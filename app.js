var botui=new BotUI('app');
const response=new Array();

botui.message.add({
    delay:1500,
    loading: true,
    content: 'Hello. This is Alex, a bot created by the customer service department.'
}).then(function(){
    return botui.message.add({
        delay:2000,
        loading: true,
        content:'Your request will be handled by me today. What brings you here?'
    });
}).then(function(){
    return botui.action.text({
        action: {
          placeholder: 'Enter your message.'
        }
    
    });
}).then(function (res) { 
    console.log(res.value);
    response.push(res.value);
}).then(function(){
    return botui.message.add({
        delay:3000,
        loading: true,
        content:'That issue can be tackled. First, why do you need to replace or return this textbook?'
    });
}).then(function(){
    return botui.action.text({
        action: {
          placeholder: 'Enter your message.'
        }
    
    });
}).then(function (res) { 
    console.log(res.value);
    response.push(res.value);
}).then(function(){
    return botui.message.add({
        delay:2000,
        loading: true,
        content:'Got it. Could you input your order number below?'
    });
}).then(function(){
    return botui.action.text({
        action: {
          placeholder: 'Enter your message.'
        }
    
    });
}).then(function (res) { 
    console.log(res.value);
    response.push(res.value);
}).then(function(){
    return botui.message.add({
        delay:2000,
        loading: true,
        content:'Alright. Your order is being retrieved. Please wait for a moment.'
    });
}).then(function(){
    return botui.message.add({
        delay:5000,
        loading: true,
        content:'The 3rd edition is currently in stock. For your information, you need to pay $50 more for the newer edition. Would you still like to exchange the book?'
    });
}).then(function(){
    return botui.action.text({
        action: {
          placeholder: 'Enter your message.'
        }
        });
}).then(function (res) { 
    console.log(res.value);
    response.push(res.value);
}).then(function(){
    return botui.message.add({
        delay:3000,
        loading: true,
        content:'Your request is being processed. Please hold on.'
    });
}).then(function(){
    return botui.message.add({
        delay:6000,
        loading: true,
        content:'Your request has been processed, and the 3rd edition will be delivered in two days.'
    });
}).then(function(){
    sendcomplete();
    return botui.message.add({
        delay:4000,
        loading: true,
        content:'The issue has been resolved. Please contact us again if you need further assistance. Bye.'
    });
    
});

function sendcomplete(){
    window.parent.postMessage({"message": "completed","text1":response[0],"text2":response[1],"text3":response[2], "text4":response[3]}, "*");
};
