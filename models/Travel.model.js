const {Schema,model}=require ('mongoose');


const travelSchema= new Schema(
    {
        date:{
            type: Date,
            //required:true
        },
        from:{
            type:String,
            required:true
        },
        to:{
            type:String,
            required:true
        },
        car:{
            type:String,
            required:true
        },
        bags:{
            type:Number,
            //required:true
        },
        seatsCar:{
            type:Number,
           // required:true
        },
        price:{
            type:Number,
           // required:true
        },
        owner:{
            type:Schema.Types.ObjectId,
            ref:'User'
        },
        navigator:[{
            type: Schema.Types.ObjectId,
            ref:'User'
        }]
    }
)

const Travel= model('Travel',travelSchema);
module.exports = Travel;

