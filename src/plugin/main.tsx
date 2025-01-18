const React = window.PluginApi.React;

const Test: React.FC<MyProp> = (props) => {
  return <div>{props.title}</div>;
};

interface MyProp {
  title: string;
}

export default Test;
