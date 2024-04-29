// import mongoose, { Schema } from "mongoose";

// const topicSchema = new Schema({
//     {
//         title: String,
//         required: true,
//     },
//     {
//         description: String,
//         required: true
//     }
// },{timeStamps: true});

import mongoose from "mongoose";

const topicSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Topic = mongoose.models.Topic || mongoose.model("Topic", topicSchema);

export default Topic;
