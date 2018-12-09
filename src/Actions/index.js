export const selectUser = (user) => {
  console.log("clicked" + user.id);
  return {
      type: "USER_SELECTED",
      payload: user
  }
};