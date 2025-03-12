import axios from "../../utils/axios";
import { loadtv } from "../reducers/tvSlice";
export { removetv } from "../reducers/tvSlice";

export const asyncloadtv = (id) => async (dispatch, _getState) => {
  try {
    const detail = await axios.get(`/tv/${id}`);
    const external_ids = await axios.get(`/tv/${id}/external_ids`);
    const recommendations = await axios.get(`/tv/${id}/recommendations`);
    const similar = await axios.get(`/tv/${id}/similar`);
    const videos = await axios.get(`/tv/${id}/videos`);
    const watchProvider = await axios.get(`/tv/${id}/watch/providers`);

    let ultimateData = {
      detail: detail.data,
      external_ids: external_ids.data,
      recommendations: recommendations.data,
      similar: similar.data.results,
      videos: videos.data.results.find((m) => m.type === "Teaser"),
      watchProvider: watchProvider.data.results.IN,
    };

    dispatch(loadtv(ultimateData));

    // console.log(ultimateData);
  } catch (error) {
    console.log(`Error while loading tv in tvActions: `, error);
  }
};
