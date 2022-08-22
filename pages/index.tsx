import type { NextPage, NextPageContext } from "next";

interface HomeProps {
  ip: string;
}

export function getServerSideProps(_ctx: NextPageContext): { props: HomeProps } {
  return { props: { ip: 'unknown' } };
}

const Home: NextPage<HomeProps> = (props: HomeProps) => {
  return <div>Current IP: {props.ip}</div>;
};

export default Home;
