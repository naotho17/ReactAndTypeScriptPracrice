import { VFC } from "react";
import { User } from "./types/user";

type Props = {
  user: User;
};

export const UserProfile: VFC<Props> = (props) => {
  const { user } = props;
  return (
    <dl>
      <dt>名前</dt>
      <dd>{user.name}</dd>
      <dt>趣味</dt>
      {/* joinメソッドは配列を("文字列")区切りで表示してくれるメソッド */}
      {/*オプショナルチェイニングをhobbiesの後に付けて、そこまでで切りやめてくれる */}
      <dd>{user.hobbies?.join(" / ")}</dd>
    </dl>
  );
};
