//计数
//EntityEvents.spawned('goetyawaken:hostile_wildfire',event=>{//敌对野火不超过5个
//    let server = event.server
//    if(server.persistentData.wildFire_counter <= 4){
//        server.persistentData.wildFire_counter ++//计数增加
//    }else{
//        event.cancel()//禁止生成
//    }   
//})
//EntityEvents.death('goetyawaken:hostile_wildfire',event =>{
//    event.server.persistentData.wildFire_counter--//死亡扣回计数
//})
