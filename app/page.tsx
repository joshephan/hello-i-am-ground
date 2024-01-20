"use client";
import Ground from "@/components/Ground";
import { useEffect, useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  // 화면의 높이와 너비를 구해야 함
  useEffect(() => {
    // 높이와 너비에 따라서 땅의 크기를 조절해야 함
    const height = window.innerHeight;
    const width = window.innerWidth;

    // <Ground /> 컴포넌트의 개수가 정해짐
    setCount(Math.floor(height / 24) * Math.floor(width / 24));
  }, []);

  const MY_MESSAGE = "안녕 개발자 친구들! 나는 땅이야!";

  return (
    <main className="flex items-center justify-center flex-wrap">
      {
        // <Ground /> 컴포넌트를 count만큼 렌더링
        Array.from({ length: count }, (_, i) =>
          i < MY_MESSAGE.length ? (
            <Ground key={i} initText={MY_MESSAGE[i % MY_MESSAGE.length]} />
          ) : (
            <Ground key={i} />
          )
        )
      }
    </main>
  );
}
