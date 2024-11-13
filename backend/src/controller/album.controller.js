import { Album } from "../models/album.model";
import { Song } from "../models/song.model";

const getAllAlbums = async (req, res) => {
  try {
    const albums = await Album.find();

    if (!albums) {
      console.error("There is no album");
    }

    res.status(200).json(albums);
  } catch (error) {
    console.log("Error fetching all album", error);
    next(error);
  }
};

const getAlbumsById = async (req, res, next) => {
  try {
    const { alBumId } = req.params;

    const album = await Album.findById(alBumId).populate("songs");

    if (!album) {
      return res.status(404).json({ message: "Album not found" });
    }

    res.status(200).json(album);
  } catch (error) {
    next(error);
  }
};

export { getAllAlbums, getAlbumsById };
