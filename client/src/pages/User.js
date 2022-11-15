export default function User({ singleUser }) {
  return (
    <>
      <li>
        <img alt={singleUser.first_name} src={singleUser.profile_picture}></img>
        {singleUser.first_name} {singleUser.last_name}
      </li>
    </>
  );
}
