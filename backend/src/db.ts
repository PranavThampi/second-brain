import mongoose, { Types } from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  firstName: {type: String, required: true},
  lastName: {type: String, required: true}  
});

const contentTypes = ['image', 'video', 'article', 'audio']
const contentSchema = new Schema({
    link: {type: String, required: true},
    type: {type: String, enum: contentTypes, required: true},
    title: {type: String, required: true},
    tags: [{type: Types.ObjectId, ref: 'Tag', required: true}],
    userId: {type: Types.ObjectId, ref: 'User', required: true}
})

const tagsSchema = new Schema({
  title: {type: String, required: true}
})

const linkSchema = new Schema({
  hash: {type: String, required: true}
})

export const UserModel = mongoose.model("User", userSchema);
export const ContentModel = mongoose.model("Content", contentSchema);
export const TagsModel = mongoose.model("Tags", tagsSchema);
export const LinkModel = mongoose.model("Link", linkSchema);
