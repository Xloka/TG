import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const AuthenticatedTemplate: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const { data: session } = useSession();

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>{session?.user?.email}</li>
        </ul>
      </nav>
      {children}
    </div>
  );
};

export default AuthenticatedTemplate;
