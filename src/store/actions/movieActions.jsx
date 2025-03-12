import axios from "../../utils/axios";
import { loadmovie } from "../reducers/movieSlice";
export { removemovie } from "../reducers/movieSlice";

export const asyncloadmovie = (id) => async (dispatch, _getState) => {
  try {
    const detail = await axios.get(`/movie/${id}`);
    const external_ids = await axios.get(`/movie/${id}/external_ids`);
    const recommendations = await axios.get(`/movie/${id}/recommendations`);
    const similar = await axios.get(`/movie/${id}/similar`);
    const videos = await axios.get(`/movie/${id}/videos`);
    const watchProvider = await axios.get(`/movie/${id}/watch/providers`);

    let ultimateData = {
      detail: detail.data,
      external_ids: external_ids.data,
      recommendations: recommendations.data,
      similar: similar.data.results,
      videos: videos.data.results.find((m) => m.type === "Teaser"),
      watchProvider: watchProvider.data.results.IN,
    };

    dispatch(loadmovie(ultimateData));

    // console.log(ultimateData);
  } catch (error) {
    console.log(`Error while loading movie in movieActions: `, error);
  }
};
