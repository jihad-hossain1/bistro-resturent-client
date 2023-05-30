import { useQuery } from "@tanstack/react-query";
import React from "react";

const AllUsers = () => {
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch("http://localhost:5000/users");
    return res.json();
  });

  return (
    <div>
      all users here
      <span className="font-bold ml-3">{users.length}</span>
    </div>
  );
};

export default AllUsers;
