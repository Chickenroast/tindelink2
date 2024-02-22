"use client";
import { useRouter } from "next/router";

export default function Button({
  path,
  children,
}: {
  path: string;
  children: React.ReactNode;
}) {
  const router = useRouter();

  const handleClick = () => {
    router.push(path);
  };

  return (
    <button type="button" onClick={handleClick}>
      {children}
    </button>
  );
}
