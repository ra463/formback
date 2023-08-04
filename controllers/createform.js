import { CreateForm } from "../models/CreateForm.js";
import getDataUri from "../utils/dataUri.js";
import cloudinary from "cloudinary";

export const createform = async (req, res) => {
  try {
    const {
      description,
      category,
      answer,
      rightAnswer,
      sentence,
      selectedText,
      passage,
      title,
      options,
      rightOption,
    } = req.body;

    await CreateForm.create({
      questions1: {
        description: description,
        category: category,
        answers: answer,
        rightCategory: rightAnswer,
      },
      questions2: {
        sentence: sentence,
        options: selectedText,
      },
      questions3: {
        passage: passage,
        allquestion: [
          {
            title: title,
            options3: options,
            correctanswer: rightOption,
          },
        ],
      },
    });

    res.status(200).json({
      success: true,
      message: "Form created successfully",
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// didnot completed this part of uploaing image
export const createformimg = async (req, res) => {
  try {
    const {
      description,
      category,
      answer,
      rightAnswer,
      sentence,
      selectedText,
      passage,
      title,
      options,
      rightOption,
    } = req.body;

    const file = req.file;

    const fileUri = getDataUri(file);

    const myCloud = await cloudinary.v2.uploader.upload(fileUri.content, {
      folder: `FormBuilder`,
    });

    await CreateForm.create({
      questions1: {
        description: description,
        category: category,
        answers: answer,
        rightCategory: rightAnswer,
      },
      questions2: {
        sentence: sentence,
        options: selectedText,
      },
      questions3: {
        passage: passage,
        picture: {
          public_id: myCloud.public_id,
          url: myCloud.secure_url,
        },
        allquestion: [
          {
            title: title,
            options3: options,
            correctanswer: rightOption,
          },
        ],
      },
    });

    res.status(200).json({
      success: true,
      message: "Form created successfully",
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getFormData = async (req, res) => {
  try {
    const formData = await CreateForm.find({});

    res.status(200).json({
      success: true,
      formData,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
