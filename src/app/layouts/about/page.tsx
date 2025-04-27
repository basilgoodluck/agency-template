import { JSX } from "react";
import Overview from "./components/overview";

export default function About(): JSX.Element {
  return (
    <section className="py-20 px-4 bg-white dark:bg-neutral-900">
      <Overview />
      <Technologies />
    </section>
  );
}
