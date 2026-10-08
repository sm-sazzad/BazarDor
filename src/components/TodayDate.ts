const date = new Date();
const todaydate = date.toLocaleDateString("bn-BD", {
  dateStyle: "full",
});

export default todaydate;
