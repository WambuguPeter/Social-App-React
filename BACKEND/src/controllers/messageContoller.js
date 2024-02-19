import { getMessageService,
        createMessageService,
        updateMessageService,
        deleteMessageService }
         from "../services/messageService.js";

import { sendServerError, sendNotFound,
        checkIfValuesIsEmptyNullUndefined,
      sendCreated, sendDeleteSuccess } from '../helper/helperFunctions.js';

import { messageValidator } from "../validators/messageValidator.js";

export const getMessages = async (req, res) =>{
    try {
        const data = await getMessageService();
        if (data.length === 0) {
            sendNotFound(res, 'No Message found');}
            else{
                res.status(200).send(data);
            }
        }
     catch (error) {
        sendServerError(res, error);
    }
}

export const getMessageByID = async (req, res) =>{
    try {
        const data = await getMessageService();
        const message = data.find((item) => item.MessageID == req.params.id);
        if (!message) {
            sendNotFound(res, 'Message not found');}
            else{
                res.status(200).send(message);
            }
        }
     catch (error) {
        sendServerError(res, error.message);
    }
}


export const createMessage = async (req, res) => {
    const { SenderID, ReceiverID, MessageDate, Content } = req.body;
    const { error } = messageValidator({
      SenderID,
      ReceiverID,
      MessageDate,
      Content
    });
    if (error) {
      res.status(400).send(error.details[0].message);
    } else {
      try {
        const newMessage = {
          SenderID,
          ReceiverID,
          MessageDate,
          Content
        };
        const response = await createMessageService(newMessage);
        if (response.message) {
            console.log("serverError");
        //   sendServerError(res, response.message);
        } else {
          sendCreated(res, "Message created successfully");
          // res.status(200).json(newUser);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  
  export const updateMessage = async (req, res) => {
    try {
      const data = await getMessageService();
      const message = data.find((item) => item.MessageID == req.params.id);
      console.log(message);
      if (!message) {
        sendNotFound(res, "Message to update not found");
      } else {
        if (checkIfValuesIsEmptyNullUndefined(req, res, req.body)) {
          const { SenderID, ReceiverID, MessageDate, Content } = req.body;
          if (SenderID) {
            message.SenderID = SenderID;
          }
          if (ReceiverID) {
            message.ReceiverID = ReceiverID;
          }
          if (MessageDate) {
            message.MessageDate = MessageDate;
          }
          if (Content) {
            message.Content = Content;
          }
  
          await updateMessageService(message);
  
          sendCreated(res, "Message updated successfully");
        } else {
          sendServerError(res, "Please provide a complete field");
        }
      }
    } catch (error) {
      sendServerError(res, error.message);
    }
  };
  
  export const deleteMessage = async (req, res) => {
    try {
      const id = req.params.id;
      console.log(id);
      const data = await getMessageService();
      console.log(data);
      const messageToDelete = data.find((item) => item.MessageID == id);
  
      if (!messageToDelete) {
        sendNotFound(res, "Message not found");
      } else {
        await deleteMessageService(id);
        sendDeleteSuccess(res, `Message with ID ${id} deleted successfully`);
      }
    } catch (error) {
      //console.log("Here we are");
      sendServerError(res, error.message);
    }
  };