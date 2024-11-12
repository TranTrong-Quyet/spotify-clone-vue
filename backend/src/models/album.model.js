import mongoose from "mongoose";

const albumSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    artist: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    releaseYear: {
      type: Number,
      required: true,
    },
    audioUrl: {
      type: String,
      required: true,
    },
    song: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Song",
        required: true,
      },
    ],
  },
  { timestamps: true }
);

const Album = mongoose.model("Album", albumSchema);
export { Album };
