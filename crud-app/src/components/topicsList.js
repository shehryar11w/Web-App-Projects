'use client'
import Link from "next/link";
import { useSearchParams } from 'next/navigation'
import CreateModal from "./CreateModal";

export default function TopicsList() {
  const searchParams = useSearchParams();
  const show = searchParams.get('show');

  return (
    <div>
      <div>
        <h2>Topic Title</h2>
        <div>Topic Description</div>
      </div>
      <div>
        <Link href="/?show=create">
          <button>Create</button> 
        </Link>

        {show === "create" && <CreateModal />}
      </div>
    </div>
  );
}
