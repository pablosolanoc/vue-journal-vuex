export default () => ({
  isLoading: true,
  entries: [
    {
      id: new Date().getTime(),
      date: new Date().toDateString(),
      text: "Lorem 1 ipsum dolor sit, amet consectetur adipisicing elit. Perferendis quidem accusamus excepturi id molestias fugiat consequatur provident similique aspernatur saepe eos ratione, omnis eveniet modi necessitatibus quibusdam commodi officiis nesciunt.",
    },
    {
      id: new Date().getTime() + 20,
      date: new Date().toDateString(),
      text: "Lorem 2 ipsum dolor sit, amet consectetur adipisicing elit. Perferendis quidem accusamus excepturi id molestias fugiat consequatur provident similique aspernatur saepe eos ratione, omnis eveniet modi necessitatibus quibusdam commodi officiis nesciunt.",
    },
    {
      id: new Date().getTime() + 30,
      date: new Date().toDateString(),
      text: "Lorem 3 ipsum dolor sit, amet consectetur adipisicing elit. Perferendis quidem accusamus excepturi id molestias fugiat consequatur provident similique aspernatur saepe eos ratione, omnis eveniet modi necessitatibus quibusdam commodi officiis nesciunt.",
    },
    {
      id: new Date().getTime() + 40,
      date: new Date().toDateString(),
      text: "Lorem 4 ipsum dolor sit, amet consectetur adipisicing elit. Perferendis quidem accusamus excepturi id molestias fugiat consequatur provident similique aspernatur saepe eos ratione, omnis eveniet modi necessitatibus quibusdam commodi officiis nesciunt.",
    },
  ],
});
