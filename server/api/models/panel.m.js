
const mongoose = require('mongoose');
 
const Schema = mongoose.Schema;

const panelSchema = new Schema({
  panelID: {
    type: String,
    required: [true, "Panel ID required⚠️"],
  },
  member1: {
    type: String,
    required: [true, "Three Members are required⚠️"],
  },
  member2: {
    type: String,
    required: [true, "Three Members are required⚠️"],
  },
  member3: {
    type: String,
    required: [true, "Three Members are required⚠️"],
  },
  panelType: {
    type: String,
    required: [true, "Panel Type is required⚠️"],
  }
});


module.exports = mongoose.model("PanelSchema", panelSchema);