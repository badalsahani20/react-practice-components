import React from "react";

const UserData = ({ user }) => {
  const { avatar_url, followers, public_repos, name, login, created_at, following} = user;

  const createdDate = new Date(created_at);
  return (
    <div className="user">
      <div className="">
        <img src={avatar_url} className="avatar" alt="User" />
      </div>
      <div>
        <a href={`https://github.com/${login}`}>{name || login}</a>
        <p>
          User joined on{" "}
          {`${createdDate.getDate()} ${createdDate.toLocaleString("en-us", {
            month: "short",
          })} ${createdDate.getFullYear()}`}
        </p>
      </div>
      <div>
        <p>Public Repos</p>
        <p>{public_repos}</p>
      </div>
      <div>
          <p>Followers</p>
          <p>{followers}</p>
      </div>
      <div>
          <p>Following</p>
          <p>{following}</p>
      </div>
    </div>
  );
};

export default UserData;
