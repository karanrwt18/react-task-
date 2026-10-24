const Profile=(props) =>{
  return (
    <div>
      <img src={props.image} alt={Profile.name} style={{ width: "100px", height: "100px", borderRadius: "50%", objectFit: "cover" }} />
      <h3>{props.name}</h3>
      <h2>City:{props.city}</h2>
      </div>
  );
}

export default Profile;