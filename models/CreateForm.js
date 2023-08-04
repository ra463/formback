import mongoose from "mongoose";

const schema = new mongoose.Schema({
  questions1: {
    description: {
      type: String,
    },
    category: {
      type: Array,
    },
    answers: {
      type: Array,
    },
    rightCategory: {
      type: Array,
    },
  },
  questions2: {
    sentence: {
      type: String,
    },
    options: {
      type: Array,
    },
  },

  questions3: {
    passage: {
      type: String,
    },
    picture: {
      public_id: {
        type: String,
        default: "public_id",
      },
      url: {
        type: String,
        trim: true,
        default: "url",
      },
    },

    allquestion: [
      {
        title: {
          type: String,
        },
        options3: {
          type: Array,
        },
        correctanswer:{
          type: String,
        }
      },
    ],
  },
});

export const CreateForm = mongoose.model("CreateForm", schema);
