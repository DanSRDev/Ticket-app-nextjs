import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;

const ticketSchema = new Schema(
  {
    title: String,
    description: String,
    category: String,
    prority: Number,
    progress: Number,
    status: String,
    active: Boolean,
  },
  {
    /* Crea un created_at y updated_at */
    timestamps: true,
  }
);

const Ticket = mongoose.models.Ticket || mongoose.model("Ticket", ticketSchema);

export default Ticket;
