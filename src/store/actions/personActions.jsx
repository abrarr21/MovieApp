import axios from "../../utils/axios";
import { loadperson } from "../reducers/personSlice";
export { removeperson } from "../reducers/personSlice";

export const asyncloadperson = (id) => async (dispatch, _getState) => {
  try {
    const detail = await axios.get(`/person/${id}`);
    const external_ids = await axios.get(`/person/${id}/external_ids`);
    const combined_credits = await axios.get(`/person/${id}/combined_credits`);
    const movie_credits = await axios.get(`/person/${id}/movie_credits`);
    const tv_credits = await axios.get(`/person/${id}/tv_credits`);

    let ultimateData = {
      detail: detail.data,
      external_ids: external_ids.data,
      combined_credits: combined_credits.data,
      movie_credits: movie_credits.data,
      tv_credits: tv_credits.data,
    };
    dispatch(loadperson(ultimateData));

    console.log(ultimateData);
  } catch (error) {
    console.log(`Error while loading person in personActions: `, error);
  }
};
