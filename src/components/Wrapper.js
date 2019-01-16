export default function Wrapper(WrappedComponent) {
  return {
    props: {
      list: {
        type: Array,
        default: () => []
      },
      title: String
    },
    render(h) {
      return h("div", [
        h("h3", {}, this.title),
        h(
          "div",
          {
            class: "flex-row main-align-space-around"
          },
          this.list.map(item => {
            return h(WrappedComponent, { props: item });
          })
        )
      ]);
    }
  };
}
