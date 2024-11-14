import { Song } from "../models/song.model";

const getAllSong = async (req, res, next) => {
  try {
    const songs = await Song.find().sort({ createdAt: -1 }); // -1 = newest -> oldest
    if (songs) {
      res.json(songs);
    }
  } catch (error) {}
};

const getFeatureSongs = async (req, res, next) => {
  try {
    const songs = await Song.aggregate([
      {
        $sample: { size: 6 },
      },
      {
        $project: {
          _id: 1,
          title: 1,
          artist: 1,
          imageUrl: 1,
          audioUrl: 1,
        },
      },
    ]); //fetch 6 random songs
    if (songs) {
      res.json(songs);
    }
  } catch (error) {
    next(error);
  }
};

const getMadeForYouSongs = async (req, res, next) => {
  try {
    const songs = await Song.aggregate([
      {
        $sample: { size: 4 },
      },
      {
        $project: {
          _id: 1,
          title: 1,
          artist: 1,
          imageUrl: 1,
          audioUrl: 1,
        },
      },
    ]); //fetch 6 random songs
    if (songs) {
      res.json(songs);
    }
  } catch (error) {
    next(error);
  }
};

const getTrendingSongs = async (req, res, next) => {
  try {
    const songs = await Song.aggregate([
      {
        $sample: { size: 4 },
      },
      {
        $project: {
          _id: 1,
          title: 1,
          artist: 1,
          imageUrl: 1,
          audioUrl: 1,
        },
      },
    ]); //fetch 6 random songs
    if (songs) {
      res.json(songs);
    }
  } catch (error) {
    next(error);
  }
};
export { getAllSong, getFeatureSongs, getMadeForYouSongs, getTrendingSongs };
