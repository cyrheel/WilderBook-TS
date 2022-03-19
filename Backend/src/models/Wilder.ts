import mongoose from "mongoose";
const Schema = mongoose.Schema;

interface IWilder {
  name: string,
  city: string,
  skills: {title: string, votes: number}[]
}

const WilderSchema = new Schema<IWilder>({
  name: { type: String, unique: true },
  city: String,
  skills: [{ title: String, votes: Number }],
});

export default mongoose.model("wilder", WilderSchema);
