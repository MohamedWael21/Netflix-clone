import { User } from "../models/user.js";

export const addToLikedMovies = async (req, res) => {
  try {
    const { email, data } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      const { likedMovies } = user;
      const movieAleradyLiked = likedMovies.find(({ id }) => id == data.id);
      if (!movieAleradyLiked) {
        await User.findByIdAndUpdate(
          user._id,
          {
            likedMovies: [...likedMovies, data],
          },
          { new: true }
        );
      } else {
        return res.json({ msg: "Movie alerady added o the liked list" });
      }
    } else {
      await User.create({ email, likedMovies: [data] });
    }
    res.json({ msg: "Movie added Successfully" });
  } catch (error) {
    res.json({ msg: error.message });
  }
};

export const getLikedMovies = async (req, res) => {
  try {
    const { email } = req.params;
    const user = await User.findOne({ email });
    if (user) {
      return res.json({ msg: "success", movies: user.likedMovies });
    }
    res.json({ msg: "Error Email Not Found" });
  } catch (error) {
    res.json({ msg: error.message });
  }
};

export const removeFromLikedMovies = async (req, res) => {
  try {
    const { email, movieId } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      const { likedMovies } = user;
      let movieIndex = likedMovies.findIndex(({ id }) => id === movieId);
      if (movieIndex == -1) {
        return res.status(400).json({ msg: "Movie Not found" });
      }
      likedMovies.splice(movieIndex, 1);
      await User.findByIdAndUpdate(
        user._id,
        {
          likedMovies,
        },
        { new: true }
      );
      res.status(200).json({ msg: "Movie Deleted", movies: likedMovies });
    }
  } catch (error) {
    return res.json({ msg: error.message });
  }
};
