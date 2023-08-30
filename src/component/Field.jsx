import DeleteIcon from "@mui/icons-material/Delete";

const Field = ({ name, email, index }) => {
  return (
    <div className="data_val">
      <h4>{name}</h4>
      <h4>{email}</h4>
      <h4>
        <DeleteIcon />
      </h4>
    </div>
  );
};

export default Field;
