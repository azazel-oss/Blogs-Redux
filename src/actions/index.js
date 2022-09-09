import _ from "lodash";
import jsonPlaceholder from "../apis/jsonPlaceholder";

const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());

  _.uniq(_.map(getState().posts, "userId")).forEach((id) =>
    dispatch(fetchUser(id))
  );
};
const fetchPosts = () => async (dispatch) => {
  const posts = await jsonPlaceholder.get("/posts");
  dispatch({
    type: "FETCH_POSTS",
    payload: posts.data,
  });
};

const fetchUser = (userId) => {
  return async (dispatch) => {
    const user = await jsonPlaceholder.get(`/users/${userId}`);
    dispatch({
      type: "FETCH_USER",
      payload: user.data,
    });
  };
};

/*
* One Time Memoized method
const fetchUser = (userId) => (dispatch) => _fetchUser(userId, dispatch);
const _fetchUser = _.memoize(async (userId, dispatch) => {
  const user = await jsonPlaceholder.get(`/users/${userId}`);
  dispatch({
    type: "FETCH_USER",
    payload: user.data,
  });
});

*/

export { fetchPosts, fetchUser, fetchPostsAndUsers };
