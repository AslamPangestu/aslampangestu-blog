interface Props {
  name: string;
}

const Header = (props: Props) => {
  return <header>{props.name}</header>;
};

export default Header;
