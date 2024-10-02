import mongoose,{Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const vedioSchema = new Schema({

    vedioFile:{
        type:String ,
        require:true
    },
    thumbnail:{
        type:String ,
        require:true
    },
    title:{
        type:String ,
        require:true
    },
    description:{
        type:String ,
        require:true
    },
    duration:{
        type:Number ,
        require:true
    },
    views:{
        type:Number,
        default:0
    },
    isPublished:{
        type:Boolean,
        default:true
    },
    owner:{
        type:Schema.Types.ObjectId,
        ref:"User"
    }

},{
    timeseries:true,
})

vedioSchema.plugin(mongooseAggregatePaginate)

export const Vedio= mongoose.model("Vedio",vedioSchema)