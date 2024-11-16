import Image from "next/image";
import styles from "./page.module.css";
import TopicsList from "@/components/topicsList";

export default function Home() {
  return (
    <div>
      <TopicsList />
    </div>
  );
}
