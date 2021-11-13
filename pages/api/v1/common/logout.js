import connectDB from "../../../../utils/connectDB";
import Auth from "../../../../utils/auth";
import Client from "../../../../models/clientModel";

connectDB();

const LogOut = async (req, res) => {
  const midwr = await Auth(req.headers.authorization);
  if (midwr.success) {
    res.status(200).json({ success: true, type: midwr.user.type });
    //Verify Admin Access
  } else res.status(422).json(midwr);
};

export default LogOut;
