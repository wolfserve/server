var Discord = require ("discord.js")
var client = new Discord.Client();

client.on("ready",function(){
    console.log("連接成功")
})

client.on("message",function(msg){
    if(msg.author == client.user){
        return;
    }
    if(msg.content == "你好")
    {
        msg.channel.send("你好")
    }
    if(msg.content == "早安")
    {
        msg.channel.send("早安OAO")
    }
    if(msg.content == "晚安")
    {
        msg.channel.send("晚安")
    }
    if(msg.content == "DC連結")
    {
        msg.channel.send("https://discord.gg/FxaNbXzXj7")
    }
    if(msg.content == "午安")
    {
        msg.channel.send("午安")
    }
    if(msg.content == "外掛")
    {
        msg.channel.send("幹自己找")
    }
    if(msg.content == "申請身分組")
    {
        msg.channel.send("找身分組申請員 ")
    }
        if(msg.content == "公告")
    {
        msg.channel.send("玩法:4v4v4v4禁止使用的外掛:1.摔落無傷&減傷類2.增加攻擊範圍3.防推動4.防擊退5.飛行or滯空6.穿牆打人7.穿牆挖床強制安裝:1.攻擊範圍顯示mod2.座標mod積分制:床:5分/一張頭:1分/一顆最終擊殺:3分/一顆win:20分直播/錄影1.比賽時請開著dc的直播2.比賽時請開著錄影，錄影後將影片檔案傳至指定區域(嚴禁剪輯，錄影時間以#最新公告為準，只有差幾一點沒關西)違反情節輕者將計警告一，第二次將ben走sever以上如有修改將在#最新公告提醒大家 ")
    }
    

})

client.login("ODQ0ODA1ODM1MzU1NzE3NjUz.YKXwvg.ZCZlP70KFrUKxKOjUWBDPMqswlA")