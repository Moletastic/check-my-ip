import type { NextPage, NextPageContext } from "next";

interface HomeProps {
  ip: string;
}

export function getServerSideProps(ctx: NextPageContext): { props: HomeProps } {
  const props: HomeProps = { ip: "unknown" };
  const { req } = ctx;

  if (!req) {
    return { props };
  }

  if (typeof req.headers["x-forwarded-for"] === "string") {
    props.ip = req.headers["x-forwarded-for"].split(",")[0];
    return { props };
  }

  if (req.headers["x-real-ip"]) {
    props.ip = req.connection.remoteAddress ?? "unknown";
    return { props };
  }

  return { props };
}

const Home: NextPage<HomeProps> = (props: HomeProps) => {
  return <div>Current IP: {props.ip}</div>;
};

export default Home;
