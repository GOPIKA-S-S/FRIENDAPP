const express=require("express")
const FriendData=express('./src/model/FriendData');
const friend=express();
friend.use(express.json());
friend.use(express.urlencoded({extended:true}));
data=
friend.get('/getdata',function(req,res){
    FriendData.find().then(function(datas){
        console.log(datas);
        res.send(datas);
    })

})
friend.post('/adddata',function(req,res){
    
var item={
    _id:req.body._id,
    name:req.body.name,
    endName:req.body.endName,
    friendNickName:req.body.friendNickName,
    DescribeYourrFriend:req.body.DescribeYourrFriend,
    _v:req.body._v

}
var data=FriendData(item);
data.save();
FriendData.find()
.then(function(data){
    res.send(data);
})
})
friend.put('/update/:id',function(req,res){
    const _id=req.params._id;
    name=req.body.name;
    endName=req.body.endName;
    friendNickName=req.body.friendNickName;
    DescribeYourrFriend=req.body.DescribeYourrFriend;
    _v=req.body._v;

    FriendData.findByIdAndupdate({"_id":_id},
    {$set:{"_id":_id, "name":name,"endName":endName, "friendNickName":friendNickName,"DescribeYourrFriend":DescribeYourrFriend, "_v":_v}}
    )
    .then(function(){res.send("updated")})
})
friend.listen(4000);
console.log("server runnning at port : 4000");
