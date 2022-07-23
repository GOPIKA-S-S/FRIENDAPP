const mongoose=require("mongoose");
mongoose.connect('mongodb+srv://GOPIKA-S-S:<dhanu824>@cluster0.hhmqgj4.mongodb.net/FriendDB?retryWrites=true&w=majority')
const Schema=mongoose.Schema;
const FriendSchema=new Schema({_id:String,
name:String,
endName:String,
friendNickName:String,
DescribeyourFriend:String,
_v:String
});
var FriendData=mongoose.model('dataset',FriendSchema);
module.exports=FriendData;